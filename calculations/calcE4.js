function calcE4(formId) {
    // 获取表单数据
    const formData = getFormData(formId);
    const name = document.querySelector(`#${ formId } h1`).textContent;
    const numberData = Object.fromEntries(Array.from(formData.entries()).map(([key, value]) => [key, Number(value)]));

    // 计算过程
    const { d, t, b, N, N0, V, γ, r } = numberData;
    const Ac = Math.PI * (d - 2 * t) ** 2 / 4; // 核心混凝土面积
    const A1 = Ac - Math.PI * (d - 2 * t - 2 * b) ** 2 / 4; // 局部受压面积
    const Nul = (N0 - N) * r * ((A1 / Ac) >= 1 / 3 ? (A1 / Ac) ** 0.5 : 3 ** 0.5 * A1 / Ac); // 组合界面局部受压承载力
    // 输出结果  
    let outputHtml = `<h1>${ name }</h1>`;
    outputHtml += `<h2>一、主要参数</h2>`;
    outputHtml += `<p>局部压力是否均匀分布：${ (document.querySelector('input[name="r"]:checked').getAttribute("id") === "rh") ? '是' : '否' }</p>`;
    outputHtml += `<p>钢管外径：${ d.toFixed(0) } mm</p>`;
    outputHtml += `<p>钢管壁厚：${ t.toFixed(0) } mm</p>`;
    outputHtml += `<p>环板宽度：${ b.toFixed(0) } mm</p>`;
    outputHtml += `<p>上层柱荷载设计值：${ N.toFixed(0) } kN</p>`;
    outputHtml += `<p>下层柱荷载设计值：${ N0.toFixed(0) } kN</p>`;
    outputHtml += `<p>牛腿剪力设计值：${ V.toFixed(0) } kN</p>`;
    outputHtml += `<p>安全系数：${ γ.toFixed(2) }</p>`;
    outputHtml += `<h2>二、计算过程</h2>`;
    outputHtml += `<p>核心混凝土面积：${ Ac.toFixed(0) } mm²</p>`;
    outputHtml += `<p>局部受压面积：${ A1.toFixed(0) } mm²</p>`;
    outputHtml += `<p>组合界面局部受压承载力：${ Nul.toFixed(0) } kN</p>`;
    outputHtml += `<h2>三、计算结果</h2>`;
    outputHtml += `<p>承载力设计值：${ Nul.toFixed(0) } kN ≥ ${ (V * γ).toFixed(0) } kN ：${ Nul >= V * γ ? '满足' : '<span style="color: red;">不满足</span>' }</p>`;
    // 输出结果到页面
    document.getElementById("output").innerHTML = outputHtml;
    saveFormData(formId);

}
