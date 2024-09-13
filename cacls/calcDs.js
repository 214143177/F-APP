// 暗挖断面深孔注浆
function calcD1() {
    let name = document.getElementsByTagName('h1')[0].textContent;
    let volume1 = parseFloat(document.getElementById("volume1").value);
    let Slurry1 = parseFloat(document.getElementById("Slurry1").value);
    let porosity1 = parseFloat(document.getElementById("porosity1").value);
    let filling1 = parseFloat(document.getElementById("filling1").value);
    let loss1 = parseFloat(document.getElementById("loss1").value);
    let result1 = volume1 * Slurry1 * porosity1 * filling1 * loss1;
    if (isNaN(volume1) || isNaN(Slurry1) || isNaN(porosity1) || isNaN(filling1) || isNaN(loss1)) {
        alert("输入数据有误，请检查！");
        return;
    }
    document.getElementById("output").innerHTML = `
    <h1>${name}<h1>
    <h2>一、主要参数</h2>
    <p>加固土体体积：${volume1} m³</p>
    <p>浆液单价：${Slurry1} 元/m³</p>
    <p>土体孔隙率：${porosity1}</p>
    <p>填充系数：${filling1}</p>
    <p>损耗率：${loss1}</p>
    <h2>二、计算结果</h2>
    <p>合计：${result1.toFixed(0)} 元</p>`;
    saveFormData('formD1');
}
// 盾构小导管径向注浆
function calcD2() {
    let name = document.getElementsByTagName('h1')[0].textContent;
    let total2 = parseFloat(document.getElementById("total2").value);
    let length2 = parseFloat(document.getElementById("length2").value);
    let pipe2 = parseFloat(document.getElementById("pipe2").value);
    let price2 = parseFloat(document.getElementById("price2").value);
    let radius2 = parseFloat(document.getElementById("radius2").value);
    let porosity2 = parseFloat(document.getElementById("porosity2").value);
    let filling2 = parseFloat(document.getElementById("filling2").value);
    let loss2 = parseFloat(document.getElementById("loss2").value);
    let result2 = (total2 * length2 * pipe2) + (Math.PI * radius2 * radius2 * length2 * total2 * price2 * porosity2 * filling2 * loss2);
    if (isNaN(total2) || isNaN(length2) || isNaN(pipe2) || isNaN(price2) || isNaN(radius2) || isNaN(porosity2) || isNaN(filling2) || isNaN(loss2)) {
        alert("输入数据有误，请检查！");
        return;
    }
    document.getElementById("output").innerHTML = `
    <h1>${name}<h1>
    <h2>一、主要参数</h2>
    <p>小导管数量：${total2} 根</p>
    <p>小导管长度：${length2} m</p>
    <p>小导管单价：${pipe2} mm</p>
    <p>浆液单价：${price2} 元/m³</p>
    <p>扩散半径：${radius2} mm</p>
    <p>土体孔隙率：${porosity2}</p>
    <p>填充系数：${filling2}</p>
    <p>损耗率：${loss2}</p>
    <h2>二、计算结果</h2>
    <p>合计：${result2.toFixed(0)} 元</p>`;
    saveFormData('formD2');
}
// 地面袖阀管注浆
function calcD3() {
    let name = document.getElementsByTagName('h1')[0].textContent;
    let length3 = parseFloat(document.getElementById("length3").value);
    let width3 = parseFloat(document.getElementById("width3").value);
    let height3 = parseFloat(document.getElementById("height3").value);
    let depth3 = parseFloat(document.getElementById("depth3").value);
    let distance3 = parseFloat(document.getElementById("distance3").value);
    let kPrice3 = parseFloat(document.getElementById("kPrice3").value);
    let sPrice3 = parseFloat(document.getElementById("sPrice3").value);
    let radius3 = parseFloat(document.getElementById("radius3").value);
    let porosity3 = parseFloat(document.getElementById("porosity3").value);
    let filling3 = parseFloat(document.getElementById("filling3").value);
    let loss3 = parseFloat(document.getElementById("loss3").value);
    let sum3 = 2 / distance3 / distance3 * length3 * width3;
    let result3 = (sum3 * depth3 * kPrice3) + (Math.PI * radius3 * radius3 * height3 * sum3 * sPrice3 * porosity3 * filling3 * loss3);
    if (isNaN(length3) || isNaN(width3) || isNaN(height3) || isNaN(depth3) || isNaN(distance3) || isNaN(kPrice3) || isNaN(sPrice3) || isNaN(radius3) || isNaN(porosity3) || isNaN(filling3) || isNaN(loss3)) {
        alert("输入数据有误，请检查！");
        return;
    }
    document.getElementById("output").innerHTML = `
    <h1>${name}<h1>
    <h2>一、主要参数</h2>
    <p>加固体长度：${length3} m</p>
    <p>加固体宽度：${width3} m</p>
    <p>加固体高度：${height3} m</p>
    <p>加固体覆土：${depth3} m</p>
    <p>注浆管间距：${distance3} m</p>
    <p>空钻单价：${kPrice3} 元/m³</p>
    <p>钻孔注浆单价：${sPrice3} 元/m³</p>
    <p>扩散半径：${radius3} m</p>
    <p>土体孔隙率：${porosity3}</p>
    <p>填充系数：${filling3}</p>
    <p>损耗率：${loss3}</p>
    <h2>二、计算结果</h2>
    <p>合计：${result3.toFixed(0)} 元</p>`;
    saveFormData('formD3');
}
// 旋喷加固注浆
function calcD4() {
    let name = document.getElementsByTagName('h1')[0].textContent;
    let length4 = parseFloat(document.getElementById("length4").value);
    let width4 = parseFloat(document.getElementById("width4").value);
    let height4 = parseFloat(document.getElementById("height4").value);
    let depth4 = parseFloat(document.getElementById("depth4").value);
    let diameter4 = parseFloat(document.getElementById("diameter4").value);
    let distance4 = parseFloat(document.getElementById("distance4").value);
    let kPrice4 = parseFloat(document.getElementById("kPrice4").value);
    let zPrice4 = parseFloat(document.getElementById("zPrice4").value);
    let sum4 = 1 / distance4 / distance4 * length4 * width4;
    let result4 = (sum4 * (depth4 + height4) * kPrice4) + (Math.PI * diameter4 * diameter4 / 4 * height4 * zPrice4 * sum4);
    if (isNaN(length4) || isNaN(width4) || isNaN(height4) || isNaN(depth4) || isNaN(diameter4) || isNaN(distance4) || isNaN(kPrice4) || isNaN(zPrice4)) {
        alert("输入数据有误，请检查！");
        return;
    }
    document.getElementById("output").innerHTML = `
    <h1>${name}<h1>
    <h2>一、主要参数</h2>
    <p>加固体长度：${length4} m</p>
    <p>加固体宽度：${width4} m</p>
    <p>加固体高度：${height4} m</p>
    <p>加固体覆土：${depth4} m</p>
    <p>旋喷桩直径：${diameter4} m</p>
    <p>旋喷桩间距：${distance4} m</p>
    <p>旋喷桩钻孔单价：${kPrice4} 元/m</p>
    <p>浆液单价：${zPrice4} 元/m</p>
    <h2>二、计算结果</h2>
    <p>合计：${result4.toFixed(0)}元</p>`;
    saveFormData('formD4');
}
// 隔离桩加固
function calcD5() {
    let name = document.getElementsByTagName('h1')[0].textContent;
    let length5 = parseFloat(document.getElementById("length5").value);
    let width5 = parseFloat(document.getElementById("width5").value);
    let height5 = parseFloat(document.getElementById("height5").value);
    let depth5 = parseFloat(document.getElementById("depth5").value);
    let diameter5 = parseFloat(document.getElementById("diameter5").value);
    let distance5 = parseFloat(document.getElementById("distance5").value);
    let kPrice5 = parseFloat(document.getElementById("kPrice5").value);
    let zPrice5 = parseFloat(document.getElementById("zPrice5").value);
    let sum5 = 1 / distance5 * width5 * length5;
    let result5 = (sum5 * (depth5 + height5) * kPrice5) + (Math.PI * diameter5 * diameter5 / 4 * height5 * zPrice5 * sum5);
    if (isNaN(length5) || isNaN(width5) || isNaN(height5) || isNaN(depth5) || isNaN(diameter5) || isNaN(distance5) || isNaN(kPrice5) || isNaN(zPrice5)) {
        alert("输入数据有误，请检查！");
        return;
    }
    document.getElementById("output").innerHTML = `
    <h1>${name}<h1>
    <h2>一、主要参数</h2>
    <p>加固体长度：${length5} m</p>
    <p>加固体宽度：${width5} m</p>
    <p>加固体高度：${height5} m</p>
    <p>加固体覆土：${depth5} m</p>
    <p>隔离桩直径：${diameter5} m</p>
    <p>隔离桩间距：${distance5} m</p>
    <p>隔离桩钻孔单价：${kPrice5} 元/m</p>
    <p>浆液单价：${zPrice5} 元/m</p>
    <h2>二、计算结果</h2>
    <p>合计：${result5.toFixed(0)}元</p>`;
    saveFormData('formD5');
}

