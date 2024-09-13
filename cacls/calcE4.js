function calcE4() {
    // 获取表单数据
    const name = document.getElementsByTagName('h1')[0].textContent;
    const numberData = getFormData('formE4');
    const { d, t, b, N, N0, V, γ, r } = numberData;
    // 计算过程
    const Ac = Math.PI * (d - 2 * t) ** 2 / 4; // 核心混凝土面积
    const A1 = Ac - Math.PI * (d - 2 * t - 2 * b) ** 2 / 4; // 局部受压面积
    const Nul = (N0 - N) * r * ((A1 / Ac) >= 1 / 3 ? (A1 / Ac) ** 0.5 : 3 ** 0.5 * A1 / Ac); // 组合界面局部受压承载力
    // 输出结果  
    document.getElementById("output").innerHTML = `
    <h1>${name}</h1> 
    <h2>一、主要参数</h2>
    <p>局部压力是否均匀分布：${(document.querySelector('input[name="r"]:checked').getAttribute("id") === "rh") ? '是' : '否'}</p>
    <p>钢管外径：${d.toFixed(0)} mm</p>
    <p>钢管壁厚：${t.toFixed(0)} mm</p>
    <p>环板宽度：${b.toFixed(0)} mm</p>
    <p>上层柱荷载设计值：${N.toFixed(0)} kN</p>
    <p>下层柱荷载设计值：${N0.toFixed(0)} kN</p>
    <p>牛腿剪力设计值：${V.toFixed(0)} kN</p>
    <p>安全系数：${γ.toFixed(2)}</p>
    <h2>二、计算过程</h2>
    <p>核心混凝土面积：${Ac.toFixed(0)} mm²</p>
    <p>局部受压面积：${A1.toFixed(0)} mm²</p>
    <p>组合界面局部受压承载力：${Nul.toFixed(0)} kN</p>
    <h2>三、计算结果</h2>`
    const resultE4 = [];
    if (Nul >= V * γ) {
        resultE4.push(`承载力设计值：${Nul.toFixed(0)} kN ≥ ${(V * γ).toFixed(0)} kN ：满足`);
    } else {
        resultE4.push(`承载力设计值：${Nul.toFixed(0)} kN < ${(V * γ).toFixed(0)} kN ：<span style="color: red;">不满足</span>`);
    }
    document.getElementById("output").innerHTML += resultE4.join('<br>');
    saveFormData('formE4');
}
