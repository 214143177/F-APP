function calcB6() {
    // 获取输入值
    let name = document.getElementsByTagName('h1')[0].textContent;
    let b = parseFloat(document.getElementById("b").value); // 截面宽度
    let h = parseFloat(document.getElementById("h").value); // 截面高度
    let Tk = parseFloat(document.getElementById("Tk").value); // 拉力标准值
    let Mk = parseFloat(document.getElementById("Mk").value); // 弯矩标准值
    let Dt = parseFloat(document.getElementById("Dt").value); // 受拉钢筋直径
    let Nt = parseFloat(document.getElementById("Nt").value); // 受拉钢筋根数
    let Dc = parseFloat(document.getElementById("Dc").value); // 受压钢筋直径
    let Nc = parseFloat(document.getElementById("Nc").value); // 受压钢筋根数
    let Es = parseFloat(document.getElementById("Es").value); // 钢筋弹性模量
    let a = parseFloat(document.getElementById("a").value); // 保护层厚度
    let v = parseFloat(document.getElementById("v").value); // 钢筋相对粘结特性系数
    let acr = parseFloat(document.getElementById("acr").value); // 构件受力特征系数
    let fc = parseFloat(document.getElementById("fc").value); // 混凝土抗压强度
    let ft = parseFloat(document.getElementById("ft").value); // 混凝土抗拉强度
    if (isNaN(b) || isNaN(h) || isNaN(Tk) || isNaN(Mk) || isNaN(Dt) || isNaN(Nt) || isNaN(Dc) || isNaN(Nc) || isNaN(Es) || isNaN(a) || isNaN(v) || isNaN(acr) || isNaN(fc) || isNaN(ft)) {
        alert("输入数据有误，请检查！");
        return;
    }
    // 计算过程
    let ast = a + (document.getElementById('Dt').options[document.getElementById('Dt').selectedIndex].text) / 2; // 受拉区纵向受拉钢筋合力点至受拉区纵向受拉边缘的距离
    let asc = a + (document.getElementById('Dc').options[document.getElementById('Dc').selectedIndex].text) / 2; // 受压区纵向受拉钢筋合力点至受压区纵向受拉边缘的距离
    let h0 = h - ast;
    let e0 = Mk / Tk * 1000; // 轴向拉力合力点距截面重心的距离
    let et = e0 - (h / 2 - ast); // 轴向拉力合力点距受拉钢筋合力点的距离
    let A = 1 * fc * b / 2;
    let B = -1 * fc * b * h0;
    let C = Tk * et * 1000;
    let x1 = (-B + (B * B - 4 * A * C) ** 0.5) / (2 * A);
    let x2 = (-B - (B * B - 4 * A * C) ** 0.5) / (2 * A);
    let ec = e0 + (h / 2 - x2 / 2); // 轴向拉力合力点距受压区混凝土合力点的距离
    let c = Math.min(Math.max(20, h - a - x2), 65); // 最外层纵向受拉钢筋外边缘至受拉区底边的距离
    let Ate = 0.5 * h * b; // 有效受拉截面面积
    let As = Dt * Nt; // 受拉钢筋面积
    let pte = Math.max(0.01, As / Ate); // 受拉钢筋配筋率
    let deq = document.getElementById('Dt').options[document.getElementById('Dt').selectedIndex].text; // 等效钢筋直径
    let osk = Tk * 1000 * ec / (As * (h - ast - asc)); // 受拉钢筋应力
    let yi = 1.1 - 0.65 * ft / (pte * osk); // 受拉钢筋不均匀系数
    let wmax = acr * yi * osk / Es * (1.9 * c + 0.08 * deq / pte); // 裂缝宽度
    // 输出结果
    document.getElementById("output").innerHTML = `
    <h1>${name}</h1> 
    <h2>一、主要参数</h2>
    <p>截面高度：${h} mm</p>
    <p>截面宽度：${b} mm</p>
    <p>拉力标准值：${Tk} kN</p>
    <p>弯矩标准值：${Mk} kN·m</p>
    <p>受拉钢筋直径：${document.getElementById('Dt').options[document.getElementById('Dt').selectedIndex].text} mm</p>
    <p>受拉钢筋根数：${Nt} 根</p>
    <p>受压钢筋直径：${document.getElementById('Dc').options[document.getElementById('Dc').selectedIndex].text} mm</p>
    <p>受压钢筋根数：${Nc} 根</p>
    <p>钢筋弹性模量：${Es} N/mm²</p>
    <p>保护层厚度：${a} mm</p>
    <p>钢筋相对粘结特性系数：${v}</p>
    <p>构件受力特征系数：${acr}</p>
    <p>混凝土抗压强度：${document.getElementById('fc').options[document.getElementById('fc').selectedIndex].text} N/mm²</p>
    <p>混凝土抗拉强度：${document.getElementById('ft').options[document.getElementById('ft').selectedIndex].text} N/mm²</p>
    <h2>二、计算过程</h2>
    <p>最外层纵向受拉钢筋外边缘至受拉区底边的距离：${c} mm</p>
    <p>有效受拉截面面积：${Ate.toFixed(0)} mm²</p>
    <p>受拉钢筋面积：${As.toFixed(0)} mm²</p>
    <p>受拉钢筋配筋率：${pte.toFixed(3)}%</p>
    <p>等效钢筋直径：${document.getElementById('Dt').options[document.getElementById('Dt').selectedIndex].text} mm</p>
    <p>受拉钢筋应力：${osk.toFixed(0)} N/mm²</p>
    <p>受拉钢筋不均匀系数：${yi.toFixed(3)}</p>
    <h2>三、计算结果</h2>
    <p>裂缝宽度：${wmax.toFixed(3)} mm</p>
    `
    saveFormData('formB6');
}
