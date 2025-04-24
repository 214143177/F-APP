function calcA3(formId) {
    // 获取表单数据
    const formData = getFormData(formId);
    if (!formData) {
        console.error('无法获取表单数据');
        return;
    }
    const name = document.querySelector(`#${ formId } h1`).textContent;
    const numberData = Object.fromEntries(Array.from(formData.entries()).map(([key, value]) => [key, Number(value)]));
    // 混凝土相关参数
    const concrete = document.getElementById('concrete');
    const index_concrete = concrete.selectedIndex - 1;
    if (index_concrete === -1) {
        console.error('请选择混凝土类型');
        return;
    }
    const specs_concrete = [
        { grade: "C20", β1: 0.80, α1: 1.0, fck: 13.4, ftk: 1.54, fc: 9.6, ft: 1.10, Ec: 25500 },
        { grade: "C25", β1: 0.80, α1: 1.0, fck: 16.7, ftk: 1.78, fc: 11.9, ft: 1.27, Ec: 28000 },
        { grade: "C30", β1: 0.80, α1: 1.0, fck: 20.1, ftk: 2.01, fc: 14.3, ft: 1.43, Ec: 30000 },
        { grade: "C35", β1: 0.80, α1: 1.0, fck: 23.4, ftk: 2.20, fc: 16.7, ft: 1.57, Ec: 31500 },
        { grade: "C40", β1: 0.80, α1: 1.0, fck: 26.8, ftk: 2.39, fc: 19.1, ft: 1.71, Ec: 32500 },
        { grade: "C45", β1: 0.80, α1: 1.0, fck: 29.6, ftk: 2.51, fc: 21.1, ft: 1.80, Ec: 33500 },
        { grade: "C50", β1: 0.80, α1: 1.0, fck: 32.4, ftk: 2.64, fc: 23.1, ft: 1.89, Ec: 34500 },
        { grade: "C55", β1: 0.79, α1: 0.99, fck: 35.5, ftk: 2.74, fc: 25.3, ft: 1.96, Ec: 35500 },
        { grade: "C60", β1: 0.78, α1: 0.98, fck: 38.5, ftk: 2.85, fc: 27.5, ft: 2.04, Ec: 36000 },
        { grade: "C65", β1: 0.77, α1: 0.97, fck: 41.5, ftk: 2.93, fc: 29.7, ft: 2.09, Ec: 36500 },
        { grade: "C70", β1: 0.76, α1: 0.96, fck: 44.5, ftk: 2.99, fc: 31.8, ft: 2.14, Ec: 37000 },
        { grade: "C75", β1: 0.75, α1: 0.95, fck: 47.4, ftk: 3.05, fc: 33.8, ft: 2.18, Ec: 37500 },
        { grade: "C80", β1: 0.74, α1: 0.94, fck: 50.2, ftk: 3.11, fc: 35.9, ft: 2.22, Ec: 38000 },
    ];
    const { grade, α1, β1, fck, ftk, fc, ft, Ec } = specs_concrete[index_concrete];
    // 钢筋相关参数
    const rebar = document.getElementById('rebar');
    const index_rebar = rebar.selectedIndex - 1;
    if (index_rebar === -1) {
        console.error('请选择钢筋类型');
        return;
    }
    const specs_rebar = [
        { level: "HPB300", fyk: 300, fstk: 420, fy: 270, fyi: 270, Es: 210000, δgt: 10 },
        { level: "HRB335", fyk: 335, fstk: 460, fy: 300, fyi: 300, Es: 200000, δgt: 7.5 },
        { level: "HRB400", fyk: 400, fstk: 540, fy: 360, fyi: 360, Es: 200000, δgt: 7.5 },
        { level: "HRBF400", fyk: 400, fstk: 540, fy: 360, fyi: 360, Es: 200000, δgt: 7.5 },
        { level: "RRB400", fyk: 400, fstk: 540, fy: 360, fyi: 360, Es: 200000, δgt: 5.0 },
        { level: "HRB500", fyk: 500, fstk: 630, fy: 435, fyi: 435, Es: 200000, δgt: 7.5 },
        { level: "HRBF500", fyk: 500, fstk: 630, fy: 435, fyi: 435, Es: 200000, δgt: 7.5 },
        { level: "中强度预应力钢丝-800", fpyk: 620, fptk: 800, fpy: 510, fpyi: 410, Es: 205000, δgt: 3.5 },
        { level: "中强度预应力钢丝-970", fpyk: 780, fptk: 970, fpy: 650, fpyi: 410, Es: 205000, δgt: 3.5 },
        { level: "中强度预应力钢丝-1270", fpyk: 980, fptk: 1270, fpy: 810, fpyi: 410, Es: 205000, δgt: 3.5 },
        { level: "预应力螺纹钢筋-980", fpyk: 785, fptk: 980, fpy: 650, fpyi: 400, Es: 200000, δgt: 3.5 },
        { level: "预应力螺纹钢筋-1080", fpyk: 930, fptk: 1080, fpy: 770, fpyi: 400, Es: 200000, δgt: 3.5 },
        { level: "预应力螺纹钢筋-1230", fpyk: 1080, fptk: 1230, fpy: 900, fpyi: 400, Es: 200000, δgt: 3.5 },
        { level: "消除应力钢丝-1470", fpyk: null, fptk: 1470, fpy: 1040, fpyi: 410, Es: 205000, δgt: 3.5 },
        { level: "消除应力钢丝-1570", fpyk: null, fptk: 1570, fpy: 1110, fpyi: 410, Es: 205000, δgt: 3.5 },
        { level: "消除应力钢丝-1860", fpyk: null, fptk: 1860, fpy: 1320, fpyi: 410, Es: 205000, δgt: 3.5 },
        { level: "钢绞线-三股1570", fpyk: null, fptk: 1570, fpy: 1110, fpyi: 390, Es: 195000, δgt: 3.5 },
        { level: "钢绞线-三股1860", fpyk: null, fptk: 1860, fpy: 1320, fpyi: 390, Es: 195000, δgt: 3.5 },
        { level: "钢绞线-三股1960", fpyk: null, fptk: 1960, fpy: 1390, fpyi: 390, Es: 195000, δgt: 3.5 },
        { level: "钢绞线-七股1720", fpyk: null, fptk: 1720, fpy: 1220, fpyi: 390, Es: 195000, δgt: 3.5 },
        { level: "钢绞线-七股1860", fpyk: null, fptk: 1860, fpy: 1320, fpyi: 390, Es: 195000, δgt: 3.5 },
        { level: "钢绞线-七股1960", fpyk: null, fptk: 1960, fpy: 1390, fpyi: 390, Es: 195000, δgt: 3.5 },
    ];
    const { level, fyk, fstk, fy, fyi, Es, δgt, fpyk, fptk, fpy, fpyi } = specs_rebar[index_rebar];
    // 钢筋面积表
    const diamArea = {
        12: 113.1,
        14: 153.9,
        16: 201.1,
        18: 254.5,
        20: 314.2,
        22: 380.1,
        25: 490.9,
        28: 615.8,
        32: 804.2
    };

    // 计算过程
    const { M, b, h, D, d, c } = numberData;
    // 有效高度
    const h0 = h - c - d - D / 2;
    // 受拉钢筋合力点至截面边缘的距离
    const as = c + d + D / 2;
    // 受压钢筋合力点至截面边缘的距离
    const asi = as;
    // 正截面的混凝土极限压应变
    const εcu = (0.0033 - (fck - 50) * 10 ** -5) > 0.0033 ? 0.0033 : (0.0033 - (fck - 50) * 10 ** -5);
    // 界限相对受压区高度
    const ξb = β1 / (1 + fy / Es / εcu);
    // 相对受压区高度
    const ξ = (1 / 2 * (1 + as / h0)) >= ξb ? ξb : (1 / 2 * (1 + as / h0));
    // 计算受压区配筋面
    const Asi = (M * 10 ** 6 - α1 * fc * b * h0 ** 2 * ξb * (1 - 0.5 * ξb)) / (fyi * (h0 - asi));
    // 计算受拉区配筋面积
    const As = (fyi * Asi + α1 * fc * b * h0 * ξb) / fy;
    // 最小配筋率
    const ρmin = Math.max(0.2, 45 * ft / fy);
    // 最大配筋率
    const ρmax = α1 * ξb * fc / fy * 100;

    // 输出结果
    let outputHtml = `<h1>${ name }</h1>`;
    outputHtml += `<h2>一、主要参数</h2>`;
    outputHtml += `<p>弯矩设计值：${ M.toFixed(0) } KN·m</p>`;
    outputHtml += `<p>矩形宽度：${ b.toFixed(0) } mm</p>`;
    outputHtml += `<p>矩形高度：${ h.toFixed(0) } mm</p>`;
    outputHtml += `<p>预估主筋直径：${ D.toFixed(0) } mm</p>`;
    outputHtml += `<p>预估箍筋直径：${ d.toFixed(0) } mm</p>`;
    outputHtml += `<p>最外层净保护层厚度：${ c.toFixed(0) } mm</p>`;
    outputHtml += `<p>混凝土抗压强度标准值：${ fck.toFixed(1) } N/mm²</p>`;
    outputHtml += `<p>混凝土抗压强度设计值：${ fc.toFixed(1) } N/mm²</p>`;
    outputHtml += `<p>混凝土抗拉强度标准值：${ ftk.toFixed(2) } N/mm²</p>`;
    outputHtml += `<p>混凝土抗拉强度设计值：${ ft.toFixed(2) } N/mm²</p>`;
    outputHtml += `<p>钢筋抗拉强度设计值：${ fy.toFixed(0) } N/mm²</p>`;
    outputHtml += `<p>钢筋抗压强度设计值：${ fyi.toFixed(0) } N/mm²</p>`;
    outputHtml += `<p>钢筋弹性模量：${ Es.toFixed(0) } N/mm²</p>`;
    outputHtml += `<h2>二、计算结果</h2>`;
    outputHtml += `<P>有效高度：${ h0.toFixed(0) } mm</P>`;
    outputHtml += `钢筋合力点至截面边缘的距离：${ as.toFixed(0) } mm mm</P>`;
    outputHtml += `<P>相对受压区高度：${ ξ.toFixed(3) }</P>`;
    outputHtml += `<P>计算受压配筋面积：${ Asi.toFixed(0) } mm²</P>`;
    outputHtml += `<P>计算受拉配筋面积：${ As.toFixed(0) } mm²</P>`;
    outputHtml += `<P>最大配筋率：${ ρmax.toFixed(3) } %</P>`;
    outputHtml += `<P>最小配筋率：${ ρmin.toFixed(3) } %</P>`;
    outputHtml += `<h2>三、配筋方案选择</h2>`;
    const diameters = Object.keys(diamArea); // 获取所有钢筋直径
    const table = document.createElement('table'); // 创建表格
    const tableHead = document.createElement('thead'); // 创建表头
    const tableBody = document.createElement('tbody'); // 创建表格体
    const headerRow = document.createElement('tr'); // 创建表头行
    headerRow.innerHTML = `
        <td>直径(mm)</td>
        <td>数量(根)</td>
        <td>面积(mm²)</td>
        <td>配筋率(%)</td>`;
    tableHead.appendChild(headerRow); // 将表头行添加到表头中
    table.appendChild(tableHead);// 将表头添加到表格中
    // 动态添加表格行
    diameters.forEach(diameter => {
        const diam = diamArea[diameter];
        const count = Math.ceil(As / diam);
        const area = count * diam;
        const U = (area / b / h0 * 100).toFixed(3);
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${ diameter }</td>
        <td>${ count }</td>
        <td>${ area.toFixed(0) }</td>
        <td>${ U }</td>`;
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);// 将表格体添加到表格中
    outputHtml += table.outerHTML;// 将表格转换为HTML字符串并添加到输出结果中
    // 将输出结果显示在页面上
    document.getElementById('output').innerHTML = outputHtml;
    // 保存表单数据
    saveFormData(formId);
}
