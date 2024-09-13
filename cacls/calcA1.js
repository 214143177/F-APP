function calcA1() {
    // 获取表单数据
    const name = document.getElementsByTagName('h1')[0].textContent;
    const form = document.getElementById('formA1');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const numberData = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, Number(value)]));
    var { γ0, dm, wt, sp, ang, lx, ol, lf, st, sg, fi, el } = numberData;// 重要性系数，外径，壁厚，间距，角度，竖向长度，重叠，荷载分项数，标准值，施工荷载，等效弯矩系数，弹性模量
    if (name === "", γ0 === "", dm === "", wt === "", sp === "", ang === "", lx === "", ol === "", lf === "", st === "", sg === "", fi === "", el === "") {
        alert("请填写所有必填项！");
        return;
    }

    // 计算过程
    let ly = (ol) ? 1.5 * lx : lx; //水平长度
    let Nd = st * γ0 * lf * sp / Math.sin(ang * Math.PI / 180);// 轴力设计值
    let F = wt <= 16 ? 215 : 205; // 钢材抗拉、压、弯强度设计值
    let Fv = wt <= 16 ? 125 : 120;// 钢材抗剪强度
    let Fy = wt <= 16 ? 235 : 225;// 钢材屈服强度
    let Ek = Math.sqrt(235 / Fy);// 钢号修正系数
    let Dtd = 100 * Ek ** 2;// 修正直径厚度比值系数
    let X = (dm - 2 * wt) / dm; // 内径外径比例系数
    let An = Math.PI * dm ** 2 / 4 * (1 - X ** 2); // 净截面面积
    let Wn = Math.PI * dm ** 3 / 32 * (1 - X ** 4);//净截面抗弯模量
    let Uw = An / 10 ** 6 * 7850 * 10 / 1000;// 单位质量
    let I = 0.25 * dm * Math.sqrt(1 + X ** 2);// 回转半径
    let Dt = dm / wt;// 直径厚度比值系数
    let Rm = Dt < An ? 1.15 : 1;// 圆管截面构件的塑性发展系数
    let Mx = γ0 * lf * ((7850 * An / 1000 / 100000) + sg) * (lx ** 2 / 8);// 由自重、施工荷载引起的竖向平面内弯矩值
    let E0 = Math.max(ly / 1000, 0.04);// 偏心距
    let Mxe = E0 * Nd;// 由施工误差引起的水平、竖向平面内附加弯矩值
    let MABx = Mx + Mxe;// 构件AB两端关于x轴弯矩
    let MABy = Mxe;// 构件AB两端关于y轴弯矩
    let M = Math.sqrt(MABx ** 2 + MABy ** 2);// 计算双向压弯圆管构件整体稳定时的M值
    let Rx = lx / I * 1000;// X方向长细比
    let Ry = ly / I * 1000;// Y方向长细比
    let R = Math.max(Rx, Ry);// 长细比取大值
    let Rn = R * Math.sqrt(Fy / el) / Math.PI;// 钢管长细比稳定系数
    let YT = Rn > 0.215 ? ((0.965 + 0.3 * Rn + Rn ** 2) - ((0.965 + 0.3 * Rn + Rn ** 2) ** 2 - 4 * Rn ** 2) ** 0.5) / (2 * Rn ** 2) : 1 - 0.65 * Rn ** 2;// 轴心受压构件的整体稳定系数φ
    let Fg = (Nd * 1000 / An) + (M * 1000000 / Wn / Rm);// 钢管的强度验算值于215比较
    let Ne = Math.PI ** 2 * el * 0.001 * An / R ** 2;// 最大长细比的欧拉力
    let Nex = Ne / 1.1;// 欧拉临界力
    let ztwdx = ((Nd * 1000 / An / YT) + ((fi * M * 1000 * 1000) / (Wn * Rm * (1 - 0.8 * (Nd / Nex))))) / F;// 整体稳定性验算
    // 输出结果
    document.getElementById("output").innerHTML = `
    <h1>${name}</h1>
    <h2>一、主要参数</h2>
    <p>结构重要性系数：${γ0}</p>
    <p>荷载分项系数：${lf}</p>
    <p>钢支撑长度：${lx.toFixed(0) } m&nbsp&nbsp重叠：${ol ? '是' : '否'}</p>
    <p>钢支撑角度：${ang.toFixed(0) }°</p>
    <p>钢支撑直径：${dm.toFixed(0) } mm</p>
    <p>钢支撑壁厚：${wt.toFixed(0) } mm</p>
    <p>钢支撑间距：${sp.toFixed(0) } m</p>
    <p>钢材弹性模量：${el} N/mm²</p>
    <p>轴力标准值：${st.toFixed(0) } KN</p>
    <p>施工荷载：${sg.toFixed(0) } KN/m</p>
    <p>等效弯矩系数：${fi}</p>
    <h2>二、计算过程</h2>
    <p>轴力设计值：${Nd.toFixed(0)} KN</p>
    <p>钢材的屈服强度：${Fy} N/mm²</p>
    <p>钢号修正系数：${Ek.toFixed(2)}</p>
    <p>由自重、施工荷载引起的竖向平面内弯矩值：${Mx.toFixed(0)} KN·m</p>
    <p>钢支撑偏心距：${(E0 * 1000).toFixed(0)} mm</p>
    <p>施工误差引起的竖向平面内附加弯矩值：${Mxe.toFixed(0)} KN·m</p>
    <p>构件AB两端关于x轴弯矩：${MABx.toFixed(0)} KN·m</p>
    <p>构件AB两端关于y轴弯矩：${MABy.toFixed(0)} KN·m</p>
    <p>构件双向压弯整体稳定时的弯矩值：${M.toFixed(0)} KN·m</p>
    <p>b类型截面：${Rn.toFixed(3)}</p>
    <p>轴心受压构件的整体稳定系数：${YT.toFixed(3)}</p>
    <p>构件最大长细比计算的欧拉力：${Ne.toFixed(0)} KN</p>
    <p>构件最大长细比计算的欧拉临界力：${Nex.toFixed(0)} KN</p>
    <h2>三、计算结果</h2>`
    let resultA1 = [];
    if (ztwdx <= 1) {
        resultA1.push(`整体稳定性验算：${ztwdx.toFixed(3)} < 1.0 ：满足`);
    } else {
        resultA1.push(`整体稳定性验算：${ztwdx.toFixed(3)} > 1.0 ：<span style="color: red;">不满足</span>`);
    }
    if (Fg <= 215) {
        resultA1.push(`钢管的强度验算：${Fg.toFixed(1)} < 215 ：满足`);
    } else {
        resultA1.push(`钢管的强度验算：${Fg.toFixed(1)} > 215 ：<span style="color: red;">不满足</span>`);
    }
    if (R <= 150) {
        resultA1.push(`长细比：${R.toFixed(1)} < 150 ：满足`);
    } else {
        resultA1.push(`长细比：${R.toFixed(1)} > 150 ：<span style="color: red;">不满足</span>`);
    }
    if (Dt <= Dtd) {
        resultA1.push(`径厚比：${Dt.toFixed(1)} < ${Dtd.toFixed(0)} ：满足`);
    } else {
        resultA1.push(`径厚比：${Dt.toFixed(1)} > ${Dtd.toFixed(0)} ：<span style="color: red;">不满足</span>`);
    }
    document.getElementById("output").innerHTML += resultA1.join("<br>");
    saveFormData('formA1');
}


