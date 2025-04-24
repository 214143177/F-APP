function calcA4(formId) {
    const formData = getFormData(formId);
    if (!formData) {
        console.error('无法获取表单数据');
        return;
    }
    const name = document.querySelector(`#${ formId } h1`).textContent;
    const numberData = Object.fromEntries(Array.from(formData.entries()).map(([key, value]) => [key, Number(value)]));
    const diamArea = {
        12: 113.1,
        14: 153.9,
        16: 201.1,
        18: 254.5,
        20: 314.2,
        22: 380.1,
        25: 490.9,
        28: 615.8,
        32: 804.2
    };

    // 计算过程
    const { γ0, fc, fy, dm, lf, tk, bd, gj } = numberData;
    // 计算弯矩设计值
    const bs = γ0 * lf * bd;
    // 计算受压区混凝土截面面积的圆心角
    const A = Math.PI * dm ** 2 / 4;
    // 计算受压区混凝土截面面积
    const rs = dm / 2 - tk - gj;
    // 先在x = 0.25时计算一次As、M等值
    let x = 0.25;
    let xt = x > 0.625 ? 0 : 1.25 - 2 * x;
    let As = (x * fc * A * (1 - Math.sin(2 * Math.PI * x) / (2 * Math.PI * x))) / fy / (xt - x);
    let M = ((2 / 3 * fc * A * dm / 2 * (Math.sin(Math.PI * x) ** 3) / Math.PI) + (fy * As * rs * (Math.sin(Math.PI * x) + Math.sin(Math.PI * xt)) / Math.PI)) / 1000000;
    // 根据M和bs关系判断，不符合条件时继续循环调整x并重新计算As、M
    while (M < bs) {
        x += 0.001;
        xt = x > 0.625 ? 0 : 1.25 - 2 * x;
        As = (x * fc * A * (1 - Math.sin(2 * Math.PI * x) / (2 * Math.PI * x))) / fy / (xt - x);
        M = ((2 / 3 * fc * A * dm / 2 * (Math.sin(Math.PI * x) ** 3) / Math.PI) + (fy * As * rs * (Math.sin(Math.PI * x) + Math.sin(Math.PI * xt)) / Math.PI)) / 1000000;
    }
    // 计算配筋率
    const P = As / (Math.PI * dm ** 2 / 4) * 100;
    // 计算受压区混凝土截面面积的圆心角
    const ang = 2 * Math.PI * x / Math.PI * 180;

    // 输出结果
    let outputHtml = `<h1>${ name }</h1>`;
    outputHtml += `<h2>一、主要参数</h2>`;
    outputHtml += `<p>荷载分项系数：${ lf }</p>`;
    outputHtml += `<p>结构重要性系数：${ γ0 }</p>`;
    outputHtml += `<p>混凝土标号：${ document.getElementById('fc').options[document.getElementById('fc').selectedIndex].text }</p>`;
    outputHtml += `<p>钢筋型号：${ document.getElementById('fy').options[document.getElementById('fy').selectedIndex].text }</p>`;
    outputHtml += `<p>围护桩直径：${ dm } mm</p>`;
    outputHtml += `<p>保护层厚度：${ tk } mm</p>`;
    outputHtml += `<p>弯矩标准值：${ bd } KN·m</p>`;
    outputHtml += `<h2>二、计算结果</h2>`;
    outputHtml += `<p>弯矩设计值：${ bs.toFixed(0) } KN·m</p>`;
    outputHtml += `<p>受压区混凝土截面面积的圆心角：${ ang.toFixed(1) }°</p>`;
    outputHtml += `<p>计算纵向钢筋面积：${ As.toFixed(0) } mm²</p>`;
    outputHtml += `<p>计算纵向钢筋配筋率：${ P.toFixed(2) } (%)</p>`;
    outputHtml += `<h2>三、配筋方案选择</h2>`;
    const diameters = Object.keys(diamArea);// 获取所有钢筋直径
    const table = document.createElement('table');// 创建表格
    const tableHead = document.createElement('thead');// 创建表头
    const tableBody = document.createElement('tbody');// 创建表格体
    const headerRow = document.createElement('tr');// 创建表头行
    headerRow.innerHTML = `
        <td>直径D(mm)</td>
        <td>数量(根)</td>
        <td>面积As(mm²)</td>
        <td>U(%)</td>
        <td>弧向间距(mm)</td>`;
    tableHead.appendChild(headerRow);// 将表头行添加到表头中
    table.appendChild(tableHead);// 将表头添加到表格中  
    // 动态添加表格行
    diameters.forEach(diameter => {
        const diam = diamArea[diameter];// 获取钢筋直径对应的面积
        const count = Math.ceil(As / diam);// 计算钢筋数量
        const area = count * diam;// 计算钢筋面积
        const U = (area / (Math.PI * dm ** 2 / 4) * 100).toFixed(2);// 计算配筋率
        const spacing = (Math.PI * (dm - 2 * tk - parseInt(diameter)) / count).toFixed(0);// 计算弧向间距
        const row = document.createElement('tr');// 创建表格行
        row.innerHTML = `
            <td>${ diameter }</td>
            <td>${ count }</td>
            <td>${ area.toFixed(0) }</td>
            <td>${ U }</td>
            <td>${ spacing }</td>`;
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);// 将表格体添加到表格中
    outputHtml += table.outerHTML;// 将表格转换为HTML字符串并添加到输出结果中
    document.getElementById('output').innerHTML = outputHtml;// 将表格添加到页面中
    saveFormData(formId); // 保存数据
}

