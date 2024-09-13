function calcB5() {
    // 获取输入值
    let name = document.getElementsByTagName('h1')[0].textContent;
    let b = parseFloat(document.getElementById("b").value); // 截面宽度
    let h = parseFloat(document.getElementById("h").value); // 截面高度
    let Tk = parseFloat(document.getElementById("Tk").value); // 拉力标准值
    let Dt = parseFloat(document.getElementById("Dt").value); // 受拉钢筋直径
    let Nt = parseFloat(document.getElementById("Nt").value); // 受拉钢筋根数
    let Es = parseFloat(document.getElementById("Es").value); // 钢筋弹性模量
    let a = parseFloat(document.getElementById("a").value); // 保护层厚度
    let v = parseFloat(document.getElementById("v").value); // 钢筋相对粘结特性系数
    let acr = parseFloat(document.getElementById("acr").value); // 构件受力特征系数
    let ft = parseFloat(document.getElementById("ft").value); // 混凝土抗拉强度
    if (isNaN(b) || isNaN(h) || isNaN(Tk) || isNaN(Dt) || isNaN(Nt) || isNaN(Es) || isNaN(a) || isNaN(v) || isNaN(acr) || isNaN(ft)) {
        alert("输入数据有误，请检查！");
        return;
    }
    // 计算过程
    let c = Math.min(Math.max(20, h - a), 65); // 最外层纵向受拉钢筋外边缘至受拉区底边的距离
    let Ate = h * b; // 有效受拉截面面积
    let As = Dt * Nt; // 受拉钢筋面积
    let pte = Math.max(0.01, As / Ate); // 受拉钢筋配筋率
    let deq = document.getElementById('Dt').options[document.getElementById('Dt').selectedIndex].text; // 等效钢筋直径
    let osk = (Tk * 1000) / As; // 受拉钢筋应力
    let yi = 1.1 - 0.65 * ft / (pte * osk); // 受拉钢筋不均匀系数
    let wmax = acr * yi * osk / Es * (1.9 * c + 0.08 * deq / pte); // 裂缝宽度
    // 输出结果 
    document.getElementById("output").innerHTML =
        `
    <h1>${name}</h1> 
    <h2>一、主要参数</h2>
    <p>截面高度：${h} mm</p>
    <p>截面宽度：${b} mm</p>
    <p>拉力标准值：${Tk} kN</p>
    <p>受拉钢筋直径：${document.getElementById('Dt').options[document.getElementById('Dt').selectedIndex].text} mm</p>
    <p>受拉钢筋根数：${Nt} 根</p>
    <p>钢筋弹性模量：${Es} N/mm²</p>
    <p>保护层厚度：${a} mm</p>
    <p>钢筋相对粘结特性系数：${v}</p>
    <p>构件受力特征系数：${acr}</p>
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
    saveFormData('formB5');
}
