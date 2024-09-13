function formD2() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("forms").innerHTML =`
        
        <form id="formD2" class="form">
        <h1>盾构小导管注浆加固</h1>
            <label for="total2">小导管数量(根)</label><br>
            <input type="number" id="total2" name="total2" placeholder="6" required><br>

            <label for="length2">小导管长度(m)</label><br>
            <input type="number" id="length2" name="length2" placeholder="3" required><br>

            <label for="pipe2">小导管单价(元/m)</label><br>
            <input type="number" id="pipe2" name="pipe2" placeholder="450" required><br>

            <label for="price2">浆液单价(元/m³)</label><br>
            <input type="number" id="price2" name="price2" placeholder="690" required><br>

            <label for="radius2">扩散半径(m)</label><br>
            <input type="number" id="radius2" name="radius2" placeholder="0.5" required><br>

            <label for="porosity2">土体孔隙率</label><br>
            <input type="number" id="porosity2" name="porosity2" placeholder="0.3" required><br>

            <label for="filling2">填充系数</label><br>
            <input type="number" id="filling2" name="filling2" placeholder="0.8" required><br>

            <label for="loss2">损耗率</label><br>
            <input type="number" id="loss2" name="loss2" placeholder="1.15" required><br>

            <div class="description">
                <p>1、建议注浆管采用DN32,t=3.25mm水煤气管,注浆浆液扩散半径设计为0.5m。</p>
                <p>2、建议浆液采用水泥浆,注浆压力为0.5~1.5Mpa,施工时应通过现场试验调整注浆压力确保注浆扩散半径,注浆后土体无侧限抗压强度为0.5~1.5MPa。</p>
            </div>
            <button id="btnD2" type="button">计算</button>
        </form>
        
        `
    loadFormData('formD2');
    document.getElementById("btnD2").addEventListener("click", calcD2);
}