function formA1() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("forms").innerHTML =
        `
        <form id="formA1" class="form">
        <h1>超前深孔注浆加固</h1>
        <label><input type="number" id="volume1"   placeholder="200" value="200">加固土体体积(m³)</label>
        <label><input type="number" id="Slurry1"   placeholder="820" value="820">浆液单价(元/m³)</label>
        <label><input type="number" id="porosity1" placeholder="0.8" value="0.8">土体孔隙率</label>
        <label><input type="number" id="filling1"  placeholder="0.3" value="0.3">填充系数</label>
        <label><input type="number" id="loss1"     placeholder="1.15"value="1.15">损耗率</label>
        <div class="description">
            <p>1、建议暗挖断面拱顶120º~150º范围内、初支内0.5m、初支外1.5m。注浆浆液采用单液浆。</p>
            <p>2、建议深孔注浆的初压为0.7~1.0MPa,终压为为1.5MPa,注浆后土体无侧限抗压强度不低于0.5MPa,渗透系数不大于1X10<sup>-7</sup>cm/s。</p>
        </div>
        <button id="submitA1" type="button">计算</button>
        </form>
        `
    document.getElementById("submitA1").addEventListener("click", calculateA1);
}