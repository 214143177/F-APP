function calcB3() {
    // 获取输入值
    let name = document.getElementsByTagName('h1')[0].textContent;
    let r0 = parseFloat(document.getElementById("r0").value);// 重要系数
    let lf = parseFloat(document.getElementById("lf").value);// 分项系数
    let b = parseFloat(document.getElementById("b").value);// 框架柱宽度
    let h = parseFloat(document.getElementById("h").value);// 框架柱高度
    let Nb = parseFloat(document.getElementById("Nb").value);// 框架柱轴力标准值
    let kz = parseFloat(document.getElementById("kz").value);// 抗震等级
    let fc = parseFloat(document.getElementById("fc").value);// 混凝土强度
    let fy = parseFloat(document.getElementById("fy").value);// 钢筋强度
    let rv = parseFloat(document.getElementById("rv").value);// 最小配箍特征值
    let fai = parseFloat(document.getElementById("fai").value);// 箍筋直径
    let sp = parseFloat(document.getElementById("sp").value);// 箍筋间距
    let ls = parseFloat(document.getElementById("ls").value);// 箍筋总长度
    let gj = parseFloat(document.getElementById("gj").value);// 纵筋直径
    let Qud = parseFloat(document.getElementById("Qud").value);// 全部纵筋配筋率-设计值
    let Dud = parseFloat(document.getElementById("Dud").value);// 单边纵筋配筋率-设计值
    let Qs = parseFloat(document.getElementById("Qs").value);// 全部纵筋数量
    let Ds = parseFloat(document.getElementById("Ds").value);// 单边纵筋数量
    let Qg = document.getElementById("Qg").checked; //全高配箍
    if (isNaN(r0) || isNaN(lf) || isNaN(b) || isNaN(h) || isNaN(Nb) || isNaN(kz) || isNaN(fc) || isNaN(fy) || isNaN(rv) || isNaN(fai) || isNaN(sp) || isNaN(ls) || isNaN(gj) || isNaN(Qud) || isNaN(Dud) || isNaN(Qs) || isNaN(Ds)) {
        alert("输入数据有误，请检查！");
        return;
    }
    // 计算过程
    kz = Qg ? kz + 0.1 : kz;
    let Ns = r0 * lf * Nb;
    let zyb = Ns * 1000 / (fc * b * h);
    let Gud = rv * fc / fy * 100;
    let Gus = Math.PI * fai * fai * ls * 0.25 / (b * h * sp) * 100;
    let Qus = Math.PI * gj * gj * Qs * 0.25 / (b * h) * 100;
    let Dus = Math.PI * gj * gj * Ds * 0.25 / (b * h) * 100;
    // 输出结果
    document.getElementById("output").innerHTML = `
    <h1>${name}</h1> 
    <h2>一、主要参数</h2>
    <p>结构重要性系数：${r0}</p>
    <p>荷载分项系数：${lf}</p>
    <p>框架柱宽度：${b} mm</p>
    <p>框架柱高度：${h} mm</p>
    <p>框架柱轴力标准值：${Nb} kN</p>
    <p>抗震等级：${document.getElementById('kz').options[document.getElementById('kz').selectedIndex].text}</p>
    <p>混凝土强度等级：${document.getElementById('fc').options[document.getElementById('fc').selectedIndex].text}</p>
    <p>钢筋型号种类：${document.getElementById('fy').options[document.getElementById('fy').selectedIndex].text}</p>
    <p>最小配箍特征值：${rv} mm</p>
    <p>箍筋直径：${fai} mm</p>
    <p>箍筋间距：${sp} mm</p>
    <p>箍筋总长度：${ls} mm</p>
    <p>纵筋直径：${gj} mm</p>
    <p>全部纵筋配筋率设计值：${Qud} %</p>
    <p>全部纵筋数量：${Qs} 根</p>
    <p>单边纵筋配筋率设计值：${Dud} %</p>
    <p>单边纵筋数量：${Ds} 根</p>
    <h2>二、计算过程</h2>
    <p>框架柱轴力设计值：${Ns} kN</p>
    <p>框架柱轴压比：${zyb.toFixed(3)} </p>
    <p>全部箍筋配筋率设计值：${Gud.toFixed(2)} %</p>
    <h2>三、计算结果</h2>`
    if (zyb <= kz) {
        document.getElementById("output").innerHTML += `框架柱轴压比：${zyb.toFixed(3)} ≤${kz.toFixed(3)} ：满足<br>`;
    } else {
        document.getElementById("output").innerHTML += `框架柱轴压比：${zyb.toFixed(3)} >${kz.toFixed(3)} ：<span style="color: red;">不满足</span><br>`;
    }
    if (Gus >= Gud) {
        document.getElementById("output").innerHTML += `体积箍筋配筋率-实配值：${Gus.toFixed(2)}% ≥${Gud.toFixed(2)}% ：满足<br>`;
    } else {
        document.getElementById("output").innerHTML += `体积箍筋配筋率-实配值：${Gus.toFixed(2)}% <${Gud.toFixed(2)}% ：<span style="color: red;">不满足</span><br>`;
    }
    if (Qus >= Qud) {
        document.getElementById("output").innerHTML += `全部纵向钢筋配筋率-实配值：${Qus.toFixed(2)}% ≥${Qud.toFixed(2)}% ：满足<br>`;
    } else {
        document.getElementById("output").innerHTML += `全部纵向钢筋配筋率-实配值：${Qus.toFixed(2)}% <${Qud.toFixed(2)}% ：<span style="color: red;">不满足</span><br>`;
    }
    if (Dus >= Dud) {
        document.getElementById("output").innerHTML += `单边纵向钢筋配筋率-实配值：${Dus.toFixed(2)}% ≥${Dud.toFixed(2)}% ：满足<br>`;
    } else {
        document.getElementById("output").innerHTML += `单边纵向钢筋配筋率-实配值：${Dus.toFixed(2)}% <${Dud.toFixed(2)}% ：<span style="color: red;">不满足</span><br>`;
    }
    saveFormData('formB3');
}
