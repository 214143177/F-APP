function calcE3() {
    // 获取输入值
    const name = document.getElementsByTagName('h1')[0].textContent;
    const form = document.getElementById('formE3');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const numberData = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, Number(value)]));
    var { d, t, hb, ht, lh, lt, n, ls, l, μ, k, r, fc, ft, fa, fv, γ, V } = numberData;
    if (d === "", t === "", hb === "", ht === "", lh === "", lt === "", n === "", ls === "", l === "", μ === "", k === "", r === "", fc === "", ft === "", fa === "", fv === "", γ === "", V === "") {
        alert("请填写所有必填项！");
        return;
    }
    // 计算过程
    var fa = r * fa;
    var fc = r * fc;
    const Ac = Math.PI * (d - 2 * t) ** 2 / 4; // 混凝土截面面积
    const Aa = Math.PI * d ** 2 / 4 - Ac; // 钢管截面面积
    const θ = fa * Aa / (fc * Ac); // 套箍系数
    const le = l * k * μ; // 等效计算长度
    const λe = le / d; // 等效计算长度长细比
    const φ1 = (λe > 4) ? 1 - 0.115 * (λe - 4) ** 0.5 : 1; // 考虑长细比影响的承载力折减系数
    const Vu1 = Math.PI * (d + hb) * hb * fc / 1000; // 牛腿以上混凝土局部承压强度
    const Vu2 = n * lh * lt * fv / 1000; // 牛腿肋板抗剪强度
    const Vu3 = Math.PI * (d + 2 * hb) * ls * 2 * ft / 1000; // 牛腿以上混凝土抗直剪强度
    const Vu4 = Math.PI * 4 * ht * (lh + ht) * fa / 1000; // 上下加强环板康拉（压）强度
    const Vu = Math.min(Vu1, Vu2, Vu3, Vu4); // 牛腿抗剪承载力
    const β = (1 - (V * 1000 / (2 * lh * t * fv * n) ** 2)) ** 0.5; // 钢管环向抗拉能力减弱系数
    const η = (1 + (β * θ) ** 0.5 + β * θ) / (1 + θ ** 0.5 + θ); // 轴心受压短柱承载力减弱系数
    console.log({ "name": name, "d": d, "t": t, "hb": hb, "ht": ht, "lh": lh, "lt": lt, "n": n, "ls": ls, "l": l, "μ": μ, "k": k, "r": r, "fc": fc, "ft": ft, "fa": fa, "fv": fv, "γ": γ, "V": V, "Ac": Ac, "Aa": Aa, "θ": θ, "le": le, "λe": λe, "φ1": φ1, "Vu1": Vu1, "Vu2": Vu2, "Vu3": Vu3, "Vu4": Vu4, "Vu": Vu, "β": β, "η": η })
    // 输出结果  
    document.getElementById("output").innerHTML = `
    <h1>${name}</h1> 
    <h2>一、主要参数</h2>
    <p>钢管外径：${d.toFixed(0)} mm</p>
    <p>钢管壁厚：${t.toFixed(0)} mm</p>
    <p>环板宽度：${hb.toFixed(0)} mm</p>
    <p>环板厚度：${ht.toFixed(0)} mm</p>
    <p>肋板高度：${lh.toFixed(0)} mm</p>
    <p>肋板厚度：${lt.toFixed(0)} mm</p>
    <p>肋板数量：${n.toFixed(0)} 个</p>
    <p>牛腿以上混凝土高度：${ls.toFixed(0)} mm</p>
    <p>是否有侧移框架柱：${(document.querySelector('input[name="k"]:checked').getAttribute("id") === "kh") ? '是' : '否'}</p>
    <p>计算长度系数：${μ.toFixed(1)}</p>
    <p>是否人防荷载作用：${(document.querySelector('input[name="r"]:checked').getAttribute("id") === "rh") ? '是' : '否'}</p>
    <p>混凝土轴心抗压强度设计值：${fc.toFixed(1)} N/mm²</p>
    <p>混凝土轴心抗拉强度设计值：${ft.toFixed(1)} N/mm²</p>
    <p>钢材抗压、拉、弯强度设计值：${fa.toFixed(1)} N/mm²</p>
    <p>钢材抗剪强度设计值：${fv.toFixed(1)} N/mm²</p>
    <p>安全系数：${γ}</p>
    <p>牛腿剪力设计值：${V.toFixed(0)} KN</p>
    <h2>二、计算过程</h2>
    <p>等效计算长度：${le.toFixed(0)} mm</p>
    <p>等效计算长度长细比：${λe.toFixed(3)}</p>
    <p>考虑长细比影响的承载力折减系数：${φ1.toFixed(3)}</p>
    <p>牛腿以上混凝土局部承压强度：${Vu1.toFixed(0)} kN</p>
    <p>牛腿肋板抗剪强度：${Vu2.toFixed(0)} kN</p>
    <p>牛腿以上混凝土抗直剪强度：${Vu3.toFixed(0)} kN</p>
    <p>上下加强环板抗压、拉强度：${Vu4.toFixed(0)} kN</p>
    <p>牛腿抗剪承载力：${Vu.toFixed(0)} kN</p>
    <p>钢管环向抗拉能力减弱系数：${β.toFixed(3)}</p>
    <p>轴心受压短柱承载力减弱系数：${η.toFixed(3)}</p>
    <h2>三、计算结果</h2>`
    const resultE3 = [];
    if (Vu >= V * γ) {
        resultE3.push(`承载力设计值：${Vu.toFixed(0)} kN ≥ ${(V * γ).toFixed(0)} kN ：满足`);
    } else {
        resultE3.push(`承载力设计值：${Vu.toFixed(0)} kN < ${(V * γ).toFixed(0)} kN ：<span style="color: red;">不满足</span>`);
    }
    if (θ > 0.3 && θ < 3) {
        resultE3.push(`套箍系数：${θ.toFixed(3)} > 0.3 且 ${θ.toFixed(3)} < 3 ：满足`);
    } else {
        resultE3.push(`套箍系数：${θ.toFixed(3)} ≤ 0.3 或 ${θ.toFixed(3)} ≥ 3 ：<span style="color: red;">不满足</span>`);
    }
    if (η >= φ1) {
        resultE3.push(`钢管环向抗拉能力减弱系数：${β.toFixed(3)} ≥ ${φ1.toFixed(3)} ：满足`);
    } else {
        resultE3.push(`钢管环向抗拉能力减弱系数：${β.toFixed(3)} < ${φ1.toFixed(3)} ：<span style="color: red;">不满足</span>`);
    }
    document.getElementById("output").innerHTML += resultE3.join('<br>');
    saveFormData('formE3');
}
