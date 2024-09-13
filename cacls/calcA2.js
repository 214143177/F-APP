function calcA2() {
    // 获取输入值 
    let choose = document.getElementById('choose');
    let index = choose.selectedIndex - 1;
    let specs = [
        { UB: "20a", h: 200, t1: 7.0, A: 35.50, Ix: 2370, Sx: 137.79, q: 27.9, ixsx: 17.2 },
        { UB: "20b", h: 200, t1: 9.0, A: 39.50, Ix: 2500, Sx: 147.93, q: 31.1, ixsx: 16.9 },
        { UB: "22a", h: 220, t1: 7.5, A: 42.00, Ix: 3400, Sx: 179.89, q: 33.0, ixsx: 18.9 },
        { UB: "22b", h: 220, t1: 9.5, A: 46.40, Ix: 3570, Sx: 190.91, q: 36.4, ixsx: 18.7 },
        { UB: "25a", h: 250, t1: 8.0, A: 48.50, Ix: 5024, Sx: 232.59, q: 38.1, ixsx: 21.6 },
        { UB: "25b", h: 250, t1: 10.0, A: 53.50, Ix: 5284, Sx: 248.08, q: 42.0, ixsx: 21.3 },
        { UB: "28a", h: 280, t1: 8.5, A: 55.50, Ix: 7114, Sx: 289.19, q: 43.4, ixsx: 24.6 },
        { UB: "28b", h: 280, t1: 10.5, A: 61.05, Ix: 7480, Sx: 309.09, q: 47.9, ixsx: 24.2 },
        { UB: "32a", h: 320, t1: 9.5, A: 67.05, Ix: 11076, Sx: 402.76, q: 52.7, ixsx: 27.5 },
        { UB: "32b", h: 320, t1: 11.5, A: 73.45, Ix: 11621, Sx: 428.82, q: 57.7, ixsx: 27.1 },
        { UB: "32c", h: 320, t1: 13.5, A: 79.95, Ix: 12168, Sx: 454.03, q: 62.8, ixsx: 26.8 },
        { UB: "36a", h: 360, t1: 10.0, A: 76.30, Ix: 15760, Sx: 513.36, q: 59.9, ixsx: 30.7 },
        { UB: "36b", h: 360, t1: 12.0, A: 83.50, Ix: 16530, Sx: 545.54, q: 65.6, ixsx: 30.3 },
        { UB: "36c", h: 360, t1: 14.0, A: 90.70, Ix: 17310, Sx: 578.93, q: 71.2, ixsx: 29.9 },
        { UB: "40a", h: 400, t1: 10.5, A: 86.10, Ix: 21720, Sx: 636.95, q: 67.6, ixsx: 34.1 },
        { UB: "40b", h: 400, t1: 12.5, A: 94.10, Ix: 22780, Sx: 677.98, q: 73.8, ixsx: 33.6 },
        { UB: "40c", h: 400, t1: 14.5, A: 102.00, Ix: 23850, Sx: 718.38, q: 80.1, ixsx: 33.2 },
        { UB: "45a", h: 450, t1: 11.5, A: 102.00, Ix: 32240, Sx: 835.23, q: 80.4, ixsx: 38.6 },
        { UB: "45b", h: 450, t1: 13.5, A: 111.00, Ix: 33760, Sx: 888.42, q: 87.4, ixsx: 38.0 },
        { UB: "45c", h: 450, t1: 15.5, A: 120.00, Ix: 35280, Sx: 938.30, q: 94.5, ixsx: 37.6 },
        { UB: "50a", h: 500, t1: 12.0, A: 119.00, Ix: 46470, Sx: 1085.75, q: 93.6, ixsx: 42.8 },
        { UB: "50b", h: 500, t1: 14.0, A: 129.00, Ix: 48560, Sx: 1145.28, q: 101.0, ixsx: 42.4 },
        { UB: "50c", h: 500, t1: 16.0, A: 139.00, Ix: 50640, Sx: 1211.48, q: 109.0, ixsx: 41.8 },
    ];

    // 获取表单数据
    const name = document.getElementsByTagName('h1')[0].textContent;
    const form = document.getElementById('formA2');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const numberData = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, Number(value)]));
    var { lb, lt, pb, pt, ms, mm, mf, nm, nf, γ0, dm, wt, sp, ang, lx, ol, lf, st, sg, fi, el } = numberData;
    if (name === "", lb === "", lt === "", pb === "", pt === "", ms === "", mm === "", mf === "", nm === "", nf === "", γ0 === "", dm === "", wt === "", sp === "", ang === "", lx === "", ol === "", lf === "", st === "", sg === "", fi === "", el === "") {
        alert("请填写所有必填项！");
        return;
    }


    // 计算过程
    let { UB, h, t1, A, Ix, Sx, q, ixsx } = specs[index];
    let lA = lb * lt / 100;
    let lIx = lb * lt ** 3 / 12 / 1000;
    let pA = pb * pt / 100;
    let pIx = pb * pt ** 3 / 12 / 1000;
    let mA = A * ms + lA + pA;
    let mzb = (lA * (-lt / 2 - h / 2) + pA * (pt / 2 + h / 2)) / mA;
    let mIx = (Ix + A * mzb * mzb / 100) * ms + lA * (lt / 2 + h / 2 + mzb) ** 2 / 100 + lIx + pA * (pt / 2 + h / 2 - mzb) ** 2 / 100 + pIx;
    let mSx = ((Sx - A / 2 * mzb / 10) + t1 * mzb * mzb / 2 / 1000) * ms + pA * (pt / 2 + h / 2 - mzb) / 10;
    let mw = mIx / (Math.max(pt / 2 + h / 2 - mzb, lt / 2 + h / 2 + mzb) / 10);
    let nA = A * ms + lA;
    let nzb = lA * (-lt / 2 - h / 2) / nA;
    let nIx = (Ix + A * nzb * nzb / 100) * ms + (lIx + lA * (lt / 2 + h / 2 + nzb) ** 2 / 100);
    let nSx = ((Sx - A / 2 * nzb / 10) + t1 * nzb * nzb / 2 / 1000) * ms;
    let nw = nIx / (Math.max(h / 2 - nzb, h / 2 + nzb + lt / 2) / 10);
    let mt = mm * 1000000 / (mw * 1000);
    let mq = mf * 1000 * mSx * 1000 / (mIx * 10000 * t1 * ms);
    let nt = nm * 1000000 / (nw * 1000);
    let nq = nf * 1000 * nSx * 1000 / (nIx * 10000 * t1 * ms);
    // 结果输出
    document.getElementById("output").innerHTML = `
    <h1>${name}</h1>
    <h2>一、主要参数</h2>
    <p>工字钢型号：${choose.options[index + 1].text}</p>
    <p>工字钢数量：${ms.toFixed(0)} 个</p>
    <p>连续缀板宽度：${lb.toFixed(0)} mm</p>
    <p>连续缀板厚度：${lt.toFixed(0)} mm</p>
    <p>单块缀板宽度：${pb.toFixed(0)} mm</p>
    <p>单块缀板厚度：${pt.toFixed(0)} mm</p>
    <p>支座弯矩设计值：${mm.toFixed(0)} kN·m</p>
    <p>支座剪力设计值：${mf.toFixed(0)} kN</p>
    <p>跨中弯矩设计值：${nm.toFixed(0)} kN·m</p>
    <p>跨中剪力设计值：${nf.toFixed(0)} kN</p>
    <h2>二、计算过程</h2>
    <h3>1.工字钢</h3>
    <p>高度：${h.toFixed(0)} mm</p>
    <p>厚度：${t1.toFixed(1)} mm</p>
    <p>截面积：${A.toFixed(1)} cm²</p>
    <p>惯性矩：${Ix.toFixed(1)} cm⁴</p>
    <p>半截面面积矩：${Sx.toFixed(1)} cm³</p>
    <h3>2.连续缀板</h3>
    <p>截面积：${lA.toFixed(1)} cm²</p>
    <p>惯性矩：${lIx.toFixed(1)} cm⁴</p>
    <h3>3.单块缀板</h3>
    <p>截面积：${pA.toFixed(1)} cm²</p>
    <p>惯性矩：${pIx.toFixed(1)} cm⁴</p>
    <h3>4.组合截面(考虑两侧缀板作用)</h3>
    <p>截面积：${mA.toFixed(1)} cm²</p>
    <p>中和轴y坐标：${mzb.toFixed(1)} cm</p>
    <p>惯性矩：${mIx.toFixed(1)} cm⁴</p>
    <p>半截面面积矩：${mSx.toFixed(1)} cm³</p>
    <p>抗弯截面模量：${mw.toFixed(1)} cm³</p>
    <h3>5.组合截面(只考虑连续缀板作用)</h3>
    <p>截面积：${nA.toFixed(1)} cm²</p>
    <p>中和轴y坐标：${nzb.toFixed(1)} cm</p>
    <p>惯性矩：${nIx.toFixed(1)} cm⁴</p>
    <p>半截面面积矩：${nSx.toFixed(1)} cm³</p>
    <p>抗弯截面模量：${nw.toFixed(1)} cm³</p>
    <h2>三、计算结果</h2>`
    let resultA2 = [];
    if (mt <= 215) {
        resultA2.push(`支座最大拉应力：${mt.toFixed(0)} ≤ 215 ：满足`);
    } else {
        resultA2.push(`支座最大拉应力：${mt.toFixed(0)} > 215 ：<span style="color: red;">不满足</span>`);
    }
    if (mq <= 215) {
        resultA2.push(`支座最大剪应力：${mq.toFixed(0)} ≤  215：满足`);
    } else {
        resultA2.push(`支座最大剪应力：${mq.toFixed(0)} > 215：<span style="color: red;">不满足</span>`);
    }
    if (nt <= 215) {
        resultA2.push(`跨中最大拉应力：${nt.toFixed(0)} ≤  215：满足`);
    } else {
        resultA2.push(`跨中最大拉应力：${nt.toFixed(0)} > 215：<span style="color: red;">不满足</span>`);
    }
    if (nq <= 215) {
        resultA2.push(`跨中最大剪应力：${nq.toFixed(0)} ≤  215：满足`);
    } else {
        resultA2.push(`跨中最大剪应力：${nq.toFixed(0)} > 215：<span style="color: red;">不满足</span>`);
    }
    document.getElementById("output").innerHTML += resultA2.join("<br>");
    saveFormData('formA2');
};



