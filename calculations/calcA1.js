function calcA1(formId) {
    const formData = getFormData(formId);
    if (!formData) {
        console.error('无法获取表单数据');
        return;
    }
    const name = document.querySelector(`#${ formId } h1`).textContent;
    const numberData = Object.fromEntries(Array.from(formData.entries()).map(([key, value]) => [key, Number(value)]));

    // 计算过程
    const { γ0, dm, wt, sp, ang, lx, ol, lf, st, sg, fi, el } = numberData;
    // 水平长度计算
    const ly = ol ? 1.5 * lx : lx;
    // 轴力设计值
    const Nd = st * γ0 * lf * sp / Math.sin(ang * Math.PI / 180);
    // 钢材强度设计值
    const F = wt <= 16 ? 215 : 205;
    const Fv = wt <= 16 ? 125 : 120;
    const Fy = wt <= 16 ? 235 : 225;
    // 钢号修正系数
    const Ek = Math.sqrt(235 / Fy);
    // 修正直径厚度比值系数
    const Dtd = 100 * Ek ** 2;
    // 内径外径比例系数
    const X = (dm - 2 * wt) / dm;
    // 净截面面积
    const An = Math.PI * dm ** 2 / 4 * (1 - X ** 2);
    // 净截面抗弯模量
    const Wn = Math.PI * dm ** 3 / 32 * (1 - X ** 4);
    // 单位质量
    const Uw = An / 10 ** 6 * 7850 * 10 / 1000;
    // 回转半径
    const I = 0.25 * dm * Math.sqrt(1 + X ** 2);
    // 直径厚度比值系数
    const Dt = dm / wt;
    // 圆管截面构件的塑性发展系数
    const Rm = Dt < An ? 1.15 : 1;
    // 由自重、施工荷载引起的竖向平面内弯矩值
    const Mx = γ0 * lf * ((7850 * An / 1000 / 100000) + sg) * (lx ** 2 / 8);
    // 偏心距
    const E0 = Math.max(ly / 1000, 0.04);
    // 由施工误差引起的水平、竖向平面内附加弯矩值
    const Mxe = E0 * Nd;
    // 构件 AB 两端关于 x 轴弯矩
    const MABx = Mx + Mxe;
    // 构件 AB 两端关于 y 轴弯矩
    const MABy = Mxe;
    // 计算双向压弯圆管构件整体稳定时的 M 值
    const M = Math.sqrt(MABx ** 2 + MABy ** 2);
    // X 方向长细比
    const Rx = lx / I * 1000;
    // Y 方向长细比
    const Ry = ly / I * 1000;
    // 长细比取大值
    const R = Math.max(Rx, Ry);
    // 钢管长细比稳定系数
    const Rn = R * Math.sqrt(Fy / el) / Math.PI;
    // 轴心受压构件的整体稳定系数φ
    const YT = Rn > 0.215 ? ((0.965 + 0.3 * Rn + Rn ** 2) - ((0.965 + 0.3 * Rn + Rn ** 2) ** 2 - 4 * Rn ** 2) ** 0.5) / (2 * Rn ** 2) : 1 - 0.65 * Rn ** 2;
    // 钢管的强度验算值
    const Fg = (Nd * 1000 / An) + (M * 1000000 / Wn / Rm);
    // 最大长细比的欧拉力
    const Ne = Math.PI ** 2 * el * 0.001 * An / R ** 2;
    // 欧拉临界力
    const Nex = Ne / 1.1;
    // 整体稳定性验算值
    const ztwdx = ((Nd * 1000 / An / YT) + ((fi * M * 1000 * 1000) / (Wn * Rm * (1 - 0.8 * (Nd / Nex))))) / F;

    // 输出结果
    let outputHtml = `<h1>${ name }</h1>`;
    outputHtml += `<h2>一、主要参数</h2>`;
    outputHtml += `<p>结构重要性系数：${ γ0 }</p>`;
    outputHtml += `<p>荷载分项系数：${ lf }</p>`;
    outputHtml += `<p>钢支撑长度：${ lx.toFixed(0) } m&nbsp&nbsp重叠：${ ol ? '是' : '否' }</p>`;
    outputHtml += `<p>钢支撑角度：${ ang.toFixed(0) }°</p>`;
    outputHtml += `<p>钢支撑直径：${ dm.toFixed(0) } mm</p>`;
    outputHtml += `<p>钢支撑壁厚：${ wt.toFixed(0) } mm</p>`;
    outputHtml += `<p>钢支撑间距：${ sp.toFixed(0) } m</p>`;
    outputHtml += `<p>钢材弹性模量：${ el } N/mm²</p>`;
    outputHtml += `<p>轴力标准值：${ st.toFixed(0) } KN</p>`;
    outputHtml += `<p>施工荷载：${ sg.toFixed(0) } KN/m</p>`;
    outputHtml += `<p>等效弯矩系数：${ fi }</p>`;
    outputHtml += `<h2>二、计算过程</h2>`;
    outputHtml += `<p>轴力设计值：${ Nd.toFixed(0) } KN</p>`;
    outputHtml += `<p>钢材的屈服强度：${ Fy } N/mm²</p>`;
    outputHtml += `<p>钢号修正系数：${ Ek.toFixed(2) }</p>`;
    outputHtml += `<p>由自重、施工荷载引起的竖向平面内弯矩值：${ Mx.toFixed(0) } KN·m</p>`;
    outputHtml += `<p>钢支撑偏心距：${ (E0 * 1000).toFixed(0) } mm</p>`;
    outputHtml += `<p>施工误差引起的竖向平面内附加弯矩值：${ Mxe.toFixed(0) } KN·m</p>`;
    outputHtml += `<p>构件 AB 两端关于 x 轴弯矩：${ MABx.toFixed(0) } KN·m</p>`;
    outputHtml += `<p>构件 AB 两端关于 y 轴弯矩：${ MABy.toFixed(0) } KN·m</p>`;
    outputHtml += `<p>构件双向压弯整体稳定时的弯矩值：${ M.toFixed(0) } KN·m</p>`;
    outputHtml += `<p>b类型截面：${ Rn.toFixed(3) }</p>`;
    outputHtml += `<p>轴心受压构件的整体稳定系数：${ YT.toFixed(3) }</p>`;
    outputHtml += `<p>构件最大长细比计算的欧拉力：${ Ne.toFixed(0) } KN</p>`;
    outputHtml += `<p>构件最大长细比计算的欧拉临界力：${ Nex.toFixed(0) } KN</p>`;
    outputHtml += `<h2>三、计算结果</h2>`;
    outputHtml += ztwdx <= 1 ? `<p>整体稳定性验算：${ ztwdx.toFixed(3) } < 1.0 ：满足</p>` : `<p>整体稳定性验算：${ ztwdx.toFixed(3) } > 1.0 ：<span style="color: red;">不满足</span></p>`;
    outputHtml += Fg <= 215 ? `<p>钢管的强度验算：${ Fg.toFixed(1) } < 215 ：满足</p>` : `<p>钢管的强度验算：${ Fg.toFixed(1) } > 215 ：<span style="color: red;">不满足</span></p>`;
    outputHtml += R <= 150 ? `<p>长细比：${ R.toFixed(1) } < 150 ：满足</p>` : `<p>长细比：${ R.toFixed(1) } > 150 ：<span style="color: red;">不满足</span></p>`;
    outputHtml += Dt <= Dtd ? `<p>径厚比：${ Dt.toFixed(1) } < ${ Dtd.toFixed(0) } ：满足</p>` : `<p>径厚比：${ Dt.toFixed(1) } > ${ Dtd.toFixed(0) } ：<span style="color: red;">不满足</span></p>`;
    document.getElementById('output').innerHTML = outputHtml;

    // 保存表单数据
    saveFormData(formId);
}