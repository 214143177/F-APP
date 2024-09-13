function formD3() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("forms").innerHTML =`
        
        <form id="formD3" class="form">
        <h1>地面袖阀管注浆加固</h1>
            <label for="length3">加固土体长度(m)</label><br>
            <input type="number" id="length3" name="length3" placeholder="10" required><br>

            <label for="width3">加固土体宽度(m)</label><br>
            <input type="number" id="width3" name="width3" placeholder="10" required><br>

            <label for="height3">加固土体高度(m)</label><br>
            <input type="number" id="height3" name="height3" placeholder="3" required><br>

            <label for="depth3">加固土体覆土(m)</label><br>
            <input type="number" id="depth3" name="depth3" placeholder="10" required><br>

            <label for="distance3">注浆管间距(m)</label><br>
            <input type="number" id="distance3" name="distance3" placeholder="0.8" required><br>

            <label for="kPrice3">空钻单价(元/m)</label><br>
            <input type="number" id="kPrice3" name="kPrice3" placeholder="70" required><br>

            <label for="sPrice3">钻孔注浆单价(元/m)</label><br>
            <input type="number" id="sPrice3" name="sPrice3" placeholder="260" required><br>

            <label for="radius3">扩散半径(m)</label><br>
            <input type="number" id="radius3" name="radius3" placeholder="0.5" required><br>

            <label for="porosity3">土体孔隙率</label><br>
            <input type="number" id="porosity3" name="porosity3" placeholder="0.3" required><br>

            <label for="filling3">填充系数</label><br>
            <input type="number" id="filling3" name="filling3" placeholder="0.8" required><br>

            <label for="loss3">损耗率</label><br>
            <input type="number" id="loss3" name="loss3" placeholder="1.15" required><br>

            <div class="description">
                <p>1、建议袖阀管注浆由地表采用800×800梅花型布置,直径89mm布孔,注浆方式为分层后退式注浆加固。</p>
                <p>2、建议浆液采用水泥浆,注浆压力逐步提高,注浆终压0.5~1.0MPa,达到注浆终压并继续注浆10min以上。</p>
                <p>3、建议注浆浆液扩散半径宜为0.5m,加固体28天龄期的单轴无侧限抗压强度为1~1.2MPa,抗渗系数10<sup>-7</sup>m/s。</p>
            </div>
            <button id="btnD3" type="button">计算</button>    
        </form>

        `
    loadFormData('formD3');
    document.getElementById("btnD3").addEventListener("click", calcD3);
}