function calcA8() {
    let name = document.getElementsByTagName('h1')[0].textContent;
    var choose = document.querySelector('input[name="choose"]:checked').getAttribute('id');
    var M = parseFloat(document.getElementById("M").value);
    let V = parseFloat(document.getElementById("V").value);
    let N = parseFloat(document.getElementById("N").value);
    let fc = parseFloat(document.getElementById("fc").value);
    let fy = parseFloat(document.getElementById("fy").value);
    let d = parseFloat(document.getElementById("d").value);
    let s1 = parseFloat(document.getElementById("s1").value);
    let s = parseFloat(document.getElementById("s").value);
    let b = parseFloat(document.getElementById("b").value);
    let b1 = parseFloat(document.getElementById("b1").value);
    let c = parseFloat(document.getElementById("c").value);
    let c1 = parseFloat(document.getElementById("c1").value);
    let i = parseFloat(document.getElementById("i").value);
    var change = document.querySelector('input[name="change"]:checked').getAttribute('id');
    let B = parseFloat(document.getElementById("B").value);
    let H = parseFloat(document.getElementById("H").value);
    let t = parseFloat(document.getElementById("t").value);
    if (isNaN(M) || isNaN(V) || isNaN(N) || isNaN(fc) || isNaN(fy) || isNaN(d) || isNaN(s1) || isNaN(s) || isNaN(b) || isNaN(b1) || isNaN(c) || isNaN(c1) || isNaN(B) || isNaN(H) || isNaN(t)) {
        alert("输入数据有误，请检查！");
        return;
    }
    // 计算过程
    let hfmin = Math.max(6, 0.6 * d); // 最小焊缝高度
    let l = Math.max((H - (s1 - 1) * b1) / 2, ((B - (s - 1) * b) / 2)); // 锚筋中心至锚板边缘的距离
    let ar = (s1 === 2) ? 1 : ((s1 === 3) ? 0.9 : ((s1 === 4) ? 0.85 : 0.6));// 钢筋层数影响系数
    let av = ((4 - 0.08 * d) * (fc / fy) ** 0.5 > 0.7) ? 0.7 : (4 - 0.08 * d) * (fc / fy) ** 0.5; // 钢筋的受剪承载力系数
    let ab = (change === "yes") ? 1 : 0.6 + 0.25 * (t / d); // 锚板的弯曲变形折减系数
    let z = b1 * (s1 - 1); // 沿剪力作用方向最外层锚筋中心距离
    var M = (M * 10 ** 6 < 0.4 * N * 10 ** 3 * z) ? (0.4 * N * 10 ** 3 * z) / 10 ** 6 : M; // 弯矩、拉力、剪力作用下的弯矩值
    let As_a1 = (M * 10 ** 6 / (1.3 * fy * ar * ab * z)) + (V * 10 ** 3 / (fy * ar * av)) + (N * 10 ** 3 / (0.8 * fy * ab)); // 弯矩、拉力、剪力作用下的配筋面积
    let As_a2 = (M * 10 ** 6 / (0.4 * fy * ar * ab * z)) + (N * 10 ** 3 / (0.8 * fy * ab)); // 弯矩、拉力、剪力作用下的配筋面积
    let As_b1 = (V * 10 ** 3 - 0.3 * N * 10 ** 3) / (fy * ar * av) + (M * 10 ** 6 - 0.4 * N * 10 ** 3 * z) / (1.3 * fy * ar * ab * z); // 弯矩、压力、剪力作用下的配筋面积
    let As_b2 = (M * 10 ** 6 - 0.4 * N * 10 ** 3 * z) / (0.4 * fy * ar * ab * z);// 弯矩、压力、剪力作用下的配筋面积

    let As = (N >= 0) ? Math.max(As_a1, As_a2) : Math.max(As_b1, As_b2); // 计算直锚筋面积
    var Ass = s1 * s * 0.25 * Math.PI * d ** 2; // 实配直锚筋面积

    let Asb = (Ass > As) ? 1.4 * V * 10 ** 3 / fy : 1.4 * V * 10 ** 3 / fy - 1.25 * av * Ass; // 计算弯曲筋面积
    // let Asb = 1.4 * V * 10 ** 3 / fy - 1.25 * av * As; // 计算弯曲筋面积
    var Assb = i * 0.25 * Math.PI * d ** 2;        // 实配弯曲筋面积
   



    console.log({ "name": name, "choose": choose, "M": M, "V": V, "N": N, "fc": fc, "fy": fy, "d": d, "s1": s1, "s": s, "b": b, "b1": b1, "c": c, "c1": c1, "change": change, "B": B, "H": H, "t": t, "hfmin": hfmin, "ar": ar, "av": av, "ab": ab, "z": z, "As_a1": As_a1, "As_a2": As_a2, "As_b1": As_b1, "As_b2": As_b2, "As": As, "Ass": Ass, "Asb": Asb, "l": l });

    // 输出结果
    document.getElementById("output").innerHTML = `
    <h1>${name}</h1>
    <h2>一、主要参数</h2>
    <p>锚筋形式：${choose === "wz" ? "直锚+弯折" : "直锚对称"}</p>
    <p>弯矩设计值：${M.toFixed(0)} kN·m</p>
    <p>剪力设计值：${V.toFixed(0)} kN</p>
    <p>轴力设计值：${N.toFixed(0)} kN</p>
    <p>混凝土强度等级：${document.getElementById('fc').options[document.getElementById('fc').selectedIndex].text}</p>
    <p>钢筋强度等级：  ${document.getElementById('fy').options[document.getElementById('fy').selectedIndex].text}</p>
    <p>锚筋直径：${d.toFixed(0)} mm</p>
    <p>锚筋行数：${s1.toFixed(0)} 行</p>
    <p>锚筋列数：${s.toFixed(0)} 列</p>
    <p>锚筋水平间距：${b.toFixed(0)} mm</p>
    <p>锚筋竖直间距：${b1.toFixed(0)} mm</p>
    <p>锚筋至砼外边缘水平距离：${c.toFixed(0)} mm</p>
    <p>锚筋至砼外边缘竖直距离：${c1.toFixed(0)} mm</p>
    <p>防变形措施：${change === "yes" ? '是' : '否'}</p>
    <p>锚板宽度：${B.toFixed(0)} mm</p>
    <p>锚板高度：${H.toFixed(0)} mm</p>
    <p>锚板厚度：${t.toFixed(0)} mm</p>
    <h2>二、计算过程</h2>
    <p>锚筋层数影响系数：${ar.toFixed(2)}</p>
    <p>锚筋受剪承载力系数：${av.toFixed(2)}</p>
    <p>锚板弯曲变形折减系数：${ab.toFixed(2)}</p>
    <p>沿剪力方向最外层锚筋中心距离：${z.toFixed(0)} mm</p>
    <p>锚筋中心至锚板边缘的距离：${l.toFixed(0)} mm</p>
    <p>计算直锚筋面积：${As.toFixed(0)} m²</p>
    <p>实配直锚筋面积：${Ass.toFixed(0)} m²</p>
    <p>最小焊缝高度：${hfmin.toFixed(0)} mm</p>
    <h2>三、计算结果</h2>`
    let resultA8 = [];
    if (Ass >= As) {
        resultA8.push(`实配直锚筋面积：${Ass.toFixed(0)} mm² ≥ ${As.toFixed(0)} mm² ：满足`);
    } else {
        resultA8.push(`实配直锚筋面积：${Ass.toFixed(0)} mm² < ${As.toFixed(0)} mm² ：<span style="color: red;">不满足</span>`);
    }
    if (choose === "wz" && V > 0) {
        if (Assb >= Asb) {
            resultA8.push(`实配弯曲筋面积：${Assb.toFixed(0)} mm² ≥ ${Asb.toFixed(0)} mm² ：满足`);
        } else {
            resultA8.push(`实配弯曲筋面积：${Assb.toFixed(0)} mm² < ${Asb.toFixed(0)} mm² ：<span style="color: red;">不满足</span>`);
        }
    }
    if (t >= 0.6 * d) {
        resultA8.push(`锚板厚度：${t.toFixed(0)} mm ≥ ${(0.6 * d).toFixed(0)} mm ：满足`);
    } else {
        resultA8.push(`锚板厚度：${t.toFixed(0)} mm < ${(0.6 * d).toFixed(0)} mm ：<span style="color: red;">不满足</span>`);
    }
    if (l >= Math.max(2 * d, 20)) {
        resultA8.push(`锚筋中心至锚板边缘的距离：${l.toFixed(0)} mm ≥ ${Math.max(2 * d, 20).toFixed(0)} mm ：满足`);
    } else {
        resultA8.push(`锚筋中心至锚板边缘的距离：${l.toFixed(0)} mm < ${Math.max(2 * d, 20).toFixed(0)} mm ：<span style="color: red;">不满足</span>`);
    }
    // ------------------------------------------------------------------------------------------------------------------------------------------
    if (N > 0 || M > 0) {
        if (b >= Math.max(3 * d, 45) && b1 >= Math.max(3 * d, 45) && (c >= Math.max(3 * d, 45) && c1 >= Math.max(3 * d, 45))) {
            resultA8.push(`锚筋间距、锚筋至构件边缘距离：≥ ${Math.max(3 * d, 45).toFixed(0)} mm ：满足`);
        } else {
            resultA8.push(`锚筋间距、锚筋至构件边缘距离：< ${Math.max(3 * d, 45).toFixed(0)} mm ：<span style="color: red;">不满足</span>`);
        }
        if (t >= b / 8) {
            resultA8.push(`锚板厚度：${t.toFixed(0)} mm ≥ ${(b / 8).toFixed(0)} mm ：满足`);
        } else {
            resultA8.push(`锚板厚度：${t.toFixed(0)} mm < ${(b / 8).toFixed(0)} mm ：<span style="color: red;">不满足</span>`);
        }
    }
    // -----------------------------------------------------------------------------------------------------------------------------------------
    if (V > 0) {
        if (b <= 300 && b1 <= 300) {
            resultA8.push(`锚筋水平、竖直间距：≤ 300 mm：满足`);
        } else {
            resultA8.push(`锚筋水平、竖直间距：> 300 mm：<span style="color: red;">不满足</span>`);
        }
        if (b1 >= Math.max(6 * d, 70)) {
            resultA8.push(`锚筋竖直间距：${b1.toFixed(0)} mm ≥ ${Math.max(6 * d, 70).toFixed(0)} mm ：满足`);
        } else {
            resultA8.push(`锚筋竖直间距：${b1.toFixed(0)} mm < ${Math.max(6 * d, 70).toFixed(0)} mm ：<span style="color: red;">不满足</span>`);
        }
        if (c1 >= Math.max(6 * d, 70)) {
            resultA8.push(`锚筋中心至构件外边缘竖直距离：${c1.toFixed(0)} mm ≥ ${Math.max(6 * d, 70).toFixed(0)} mm ：满足`);
        } else {
            resultA8.push(`锚筋中心至构件外边缘竖直距离：${c1.toFixed(0)} mm < ${Math.max(6 * d, 70).toFixed(0)} mm ：<span style="color: red;">不满足</span>`);
        }
        if (b >= Math.max(3 * d, 45) && c >= Math.max(3 * d, 45)) {
            resultA8.push(`锚筋水平间距、锚筋中心至锚板外边缘水平距离：≥ ${Math.max(3 * d, 45).toFixed(0)} mm ：满足`);
        } else {
            resultA8.push(`锚筋水平间距、锚筋中心至锚板外边缘水平距离：< ${Math.max(3 * d, 45).toFixed(0)} mm ：<span style="color: red;">不满足</span>`);
        }
    }

    document.getElementById("output").innerHTML += resultA8.join('<br>');
    saveFormData('formA8');
}