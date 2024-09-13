function calcA5() {
    // 获取输入值
    let name = document.getElementsByTagName('h1')[0].textContent;
    let r0 = parseFloat(document.getElementById("r0").value);// 重要系数
    let ft = parseFloat(document.getElementById("ft").value);// 混凝土强度
    let fy = parseFloat(document.getElementById("fy").value);// 钢筋强度
    let dm = parseFloat(document.getElementById("dm").value);// 柱直径
    let lf = parseFloat(document.getElementById("lf").value);// 分项系数
    let bd = parseFloat(document.getElementById("bd").value);// 剪力标准值
    let sp = parseFloat(document.getElementById("sp").value);// 箍筋间距
    if (isNaN(r0) || isNaN(ft) || isNaN(fy) || isNaN(dm) || isNaN(lf) || isNaN(bd) || isNaN(sp)) {
        alert("输入数据有误，请检查！");
        return;
    }
    // 计算过程
    let h0 = 1.6 * dm / 2;
    let b = 1.76 * dm / 2;
    let bs = r0 * lf * bd;
    let As = (bs * 1000 - 0.7 * ft * b * h0) / (fy * h0 * 2 / sp);
    console.log([r0, ft, fy, dm, lf, bd, sp, h0, b, bs, As].join("\n"));
    // 输出结果
    document.getElementById("output").innerHTML = `
    <h1>${name}</h1>
    <h2>一、主要参数</h2>
    <p>综合分项系数：${lf}</p>
    <p>支护结构重要性系数：${r0}</p>
    <p>混凝土强度等级：${document.getElementById('ft').options[document.getElementById('ft').selectedIndex].text}</p>
    <p>钢筋型号种类：${document.getElementById('fy').options[document.getElementById('fy').selectedIndex].text}</p>
    <p>柱直径：${dm} mm</p>
    <p>剪力标准值：${bd} KN</p>
    <p>箍筋间距：${sp} mm</p>
    <h2>二、计算结果</h2>
    <p>所需箍筋面积：${As.toFixed(0)} mm²</p>`;
    saveFormData('formA5');
}