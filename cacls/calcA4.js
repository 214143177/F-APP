function calcA4() {
    // 获取输入值
    let name = document.getElementsByTagName('h1')[0].textContent;
    let r0 = parseFloat(document.getElementById("r0").value);// 重要系数
    let fc = parseFloat(document.getElementById("fc").value);// 混凝土强度
    let fy = parseFloat(document.getElementById("fy").value);// 钢筋强度
    let dm = parseFloat(document.getElementById("dm").value);// 柱直径
    let lf = parseFloat(document.getElementById("lf").value);// 分项系数
    let tk = parseFloat(document.getElementById("tk").value);// 保护层厚度
    let bd = parseFloat(document.getElementById("bd").value);// 弯矩标准值
    let gj = parseFloat(document.getElementById("gj").value);// 钢筋直径
    if (isNaN(r0) || isNaN(fc) || isNaN(fy) || isNaN(dm) || isNaN(lf) || isNaN(tk) || isNaN(bd) || isNaN(gj)) {
        alert("输入数据有误，请检查！");
        return;
    };
    // 计算过程
    let bs = r0 * lf * bd;
    let A = Math.PI * dm ** 2 / 4;
    let rs = dm / 2 - tk - gj;
    let x = 0.25;
    let xt = undefined;
    let As = undefined;
    let M = undefined;
    while (true) {
        xt = x > 0.625 ? 0 : 1.25 - 2 * x;
        As = (x * fc * A * (1 - Math.sin(2 * Math.PI * x) / (2 * Math.PI * x))) / fy / (xt - x);
        M = ((2 / 3 * fc * A * dm / 2 * (Math.sin(Math.PI * x) ** 3) / Math.PI) + (fy * As * rs * (Math.sin(Math.PI * x) + Math.sin(Math.PI * xt)) / Math.PI)) / 1000000;
        if (M >= bs) {
            break;
        }
        x += 0.001;
    }
    let P = As / (Math.PI * dm ** 2 / 4) * 100;// 计算配筋率
    let ang = 2 * Math.PI * x / Math.PI * 180;// 计算受压区混凝土截面面积的圆心角
    // 输出结果
    document.getElementById("output").innerHTML = `
    <h1>${name}</h1> 
    <h2>一、主要参数</h2>
    <p>荷载分项系数：${lf}</p>
    <p>结构重要性系数：${r0}</p>
    <p>混凝土标号：${document.getElementById('fc').options[document.getElementById('fc').selectedIndex].text}</p>
    <p>钢筋型号：${document.getElementById('fy').options[document.getElementById('fy').selectedIndex].text}</p>
    <p>围护桩直径：${dm} mm</p>
    <p>保护层厚度：${tk} mm</p>
    <p>弯矩标准值：${bd} KN·m</p> 
    <h2>二、计算结果</h2>
    <p>弯矩设计值：${bs.toFixed(0)} KN·m</p> 
    <p>受压区混凝土截面面积的圆心角：${ang.toFixed(1)}°</p> 
    <p>计算纵向钢筋面积：${As.toFixed(0)} mm² 
    <p>计算纵向钢筋配筋率：${P.toFixed(2)} (%)</p> 
    <h2>三、配筋方案选择</h2>
    <table id="myTable"></table>`
    let Asi = { 12: 113.1, 14: 153.9, 16: 201.1, 18: 254.5, 20: 314.2, 22: 380.1, 25: 490.9, 28: 615.8, 32: 804.2 };
    let diameters = Object.keys(Asi); // 获取所有钢筋直径
    let tablehead = document.createElement('thead');// 创建表头
    let tableBody = document.createElement('tbody');// 创建表格体
    let headerRow = document.createElement('tr');// 创建表头行
    headerRow.innerHTML = `
        <td>直径D(mm)</td>
        <td>数量(根)</td>
        <td>面积As(mm²)</td>
        <td>U(%)</td>
        <td>弧向间距(mm)</td>
    `;
    tablehead.appendChild(headerRow);// 将表头添加到表格体中 
    document.getElementById("myTable").appendChild(tablehead);
    // 动态添加表格行
    diameters.forEach(diameter => {
        let AsPerBar = Asi[diameter];
        let barCount = Math.ceil(As / AsPerBar);
        let area = barCount * AsPerBar;
        let U = (area / (Math.PI * dm ** 2 / 4) * 100).toFixed(2);
        let spacing = (Math.PI * (dm - 2 * tk - parseInt(diameter)) / barCount).toFixed(0);
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${diameter}</td>
            <td>${barCount}</td>
            <td>${area.toFixed(0)}</td>
            <td>${U}</td>
            <td>${spacing}</td>
        `;
        tableBody.appendChild(row);
    });
    // 将表格体添加到表格中
    document.getElementById("myTable").appendChild(tableBody);
    saveFormData('formA4');
}

