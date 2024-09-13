function calcE2() {
    // 获取表单数据
    const name = document.getElementsByTagName('h1')[0].textContent;
    const form = document.getElementById('formE2');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const numberData = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, Number(value)]));
    var { γ0, d, t, l, μ, fa, fc, k, r, N, M1, M2 } = numberData;
    if (name==="", γ0==="", d==="", t==="", l==="", μ==="", fa==="", fc==="", k==="", r==="", N==="", M1==="", M2==="") {
        alert("请填写所有必填项！");
        return;
    }
    // 计算过程
    var fa = r * fa;
    var fc = r * fc;
    const e0 = Math.max(M1, M2) / N * 1000; // 截面偏心距
    const Ac = Math.PI * (d - 2 * t) ** 2 / 4; // 混凝土截面面积
    const Aa = Math.PI * d ** 2 / 4 - Ac; // 钢管截面面积
    const θ = fa * Aa / (fc * Ac); // 套箍系数
    const dt = d / t; // 计算厚径比
    const λ = l / d; // 计算长细比
    const le = l * k * μ; // 等效计算长度
    const λe = le / d; // 等效计算长度长细比
    const el = e0 / (d / 2 - t); // 计算偏心率
    const φ0 = (μ + l / d) > 4 ? 1 - 0.115 * (μ * l / d - 4) ** 0.5 : 1; // 按轴心受压柱考虑的φ1
    const φ1 = (λe > 4) ? 1 - 0.115 * (λe - 4) ** 0.5 : 1; // 考虑长细比影响的承载力折减系数
    const φe = (el <= 1.55) ? 1 / (1 + 1.85 * el) : 0.4 / el; // 考虑偏心率影响的承载力折减系数
    const N0 = fc * Ac * (1 + θ ** 0.5 + θ) / 1000; // 轴心受压短柱承载力设计值
    const Nu = φ1 * φe * N0; // 钢管混凝土单肢柱承载力设计值

    console.log({ "name": name, "γ0": γ0, "d": d, "t": t, "l": l, "μ": μ, "fa": fa, "fc": fc, "k": k, "N": N, "M1": M1, "M2": M2, "e0": e0, "Ac": Ac, "Aa": Aa, "θ": θ, "dt": dt, "λ": λ, "le": le, "λe": λe, "el": el, "φ0": φ0, "φ1": φ1, "φe": φe, "N0": N0, "Nu": Nu })

    // 输出结果  
    document.getElementById("output").innerHTML = `
    <h1>${name}</h1> 
    <h2>一、主要参数</h2>
    <p>结构重要性系数：${γ0}</p>
    <p>钢管外径：${d.toFixed(0)} mm</p>
    <p>钢管壁厚：${t.toFixed(0)} mm</p>
    <p>钢管长度：${l.toFixed(0)} mm</p>
    <p>计算长度系数：${μ}</p>
    <p>是否人防荷载作用：${(document.querySelector('input[name="r"]:checked').getAttribute("id") === "rh") ? '是' : '否'}</p>
    <p>是否有侧移框架柱：${(document.querySelector('input[name="k"]:checked').getAttribute("id") === "kh") ? '是' : '否'}</p>
    <p>钢材抗压强度设计值：${fa.toFixed(1)} N/mm²</p>
    <p>混凝土轴心抗压强度设计值：${fc.toFixed(1)} N/mm²</p>
    <p>轴向压力设计值：${N.toFixed(0)} kN</p>
    <p>柱顶弯设计值：${M1.toFixed(0)} KN·m</p>
    <p>柱底弯设计值：${M2.toFixed(0)} KN·m</p>
    <h2>二、计算过程</h2>
    <p>截面偏心距：${e0.toFixed(0)} mm</p>
    <p>混凝土截面面积：${Ac.toFixed(0)} mm²</p>
    <p>钢管截面面积：${Aa.toFixed(0)} mm²</p>
    <p>套箍系数：${θ.toFixed(3)}</p>
    <p>长细比：${λ.toFixed(1)}</p>
    <p>等效计算长度：${le.toFixed(0)} m</p>
    <p>等效计算长度长细比：${λe.toFixed(1)}</p>
    <p>偏心率：${el.toFixed(3)}</p>
    <p>按轴心受压柱考虑的φ1：${φ0.toFixed(3)}</p>
    <p>考虑长细比影响的承载力折减系数：${φ1.toFixed(3)}</p>
    <p>考虑偏心率影响的承载力折减系数：${φe.toFixed(3)}</p>
    <p>轴心受压短柱承载力设计值：${N0.toFixed(0)} kN</p>
    <p>钢管混凝土单肢柱承载力设计值：${Nu.toFixed(0)} kN</p>
    <h2>三、计算结果</h2>
    `
    const resultE2 = [];
    if (Nu >= N * γ0) {
        resultE2.push(`承载力设计值：${Nu.toFixed(0)} kN ≥ ${(N * γ0).toFixed(1)} kN ：满足`);
    } else {
        resultE2.push(`承载力设计值：${Nu.toFixed(0)} kN < ${(N * γ0).toFixed(1)} kN ：<span style="color: red;">不满足</span>`);
    }
    if (θ > 0.3 && θ < 3) {
        resultE2.push(`套箍系数：${θ.toFixed(3)} > 0.3 且 ${θ.toFixed(3)} < 3 ：满足`);
    } else {
        resultE2.push(`套箍系数：${θ.toFixed(3)} ≤ 0.3 或 ${θ.toFixed(3)} ≥ 3 ：<span style="color: red;">不满足</span>`);
    }
    if (dt > 20 && dt < 85 * (235 / fa) ** 0.5) {
        resultE2.push(`厚径比：${dt.toFixed(1)} > 20 且 ${dt.toFixed(1)} < ${(85 * 235 / fa).toFixed(1)} ：满足`);
    } else {
        resultE2.push(`厚径比：${dt.toFixed(1)} ≤ 20 或 ${dt.toFixed(1)} ≥ ${(85 * 235 / fa).toFixed(1)} ：<span style="color: red;">不满足</span>`);
    }
    if (λ <= 20) {
        resultE2.push(`长细比：${λ.toFixed(1)} < 20 ：满足`);
    } else {
        resultE2.push(`长细比：${λ.toFixed(1)} > 20 ：<span style="color: red;">不满足</span>`);
    }
    if (φ1 * φe <= φ0) {
        resultE2.push(`考虑偏心影响的承载力折减系数：${(φ1 * φe).toFixed(3)} ≤ ${φ0.toFixed(3)} ：满足`);
    } else {
        resultE2.push(`考虑偏心影响的承载力折减系数：${(φ1 * φe).toFixed(3)} > ${φ0.toFixed(3)} ：<span style="color: red;">不满足</span>`);
    }

    document.getElementById("output").innerHTML += resultE2.join('<br>');
    saveFormData('formE2');
}