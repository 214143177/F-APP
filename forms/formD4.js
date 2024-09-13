function formD4() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("forms").innerHTML =`
        
        <form id="formD4" class="form">
        <h1>高压旋喷加固</h1>
            <label for="length4">加固土体长度(m)</label><br>
            <input type="number" id="length4" name="length4" placeholder="8" required><br>

            <label for="width4">加固土体宽度(m)</label><br>
            <input type="number" id="width4" name="width4" placeholder="12" required><br>

            <label for="height4">加固土体高度(m)</label><br>
            <input type="number" id="height4" name="height4" placeholder="12" required><br>

            <label for="depth4">加固土体覆土(m)</label><br>
            <input type="number" id="depth4" name="depth4" placeholder="10" required><br>

            <label for="diameter4">旋喷桩直径(m)</label><br>
            <input type="number" id="diameter4" name="diameter4" placeholder="0.6" required><br>

            <label for="distance4">旋喷桩间距(m)</label><br>
            <input type="number" id="distance4" name="distance4" placeholder="0.4" required><br>

            <label for="kPrice4">旋喷桩钻孔单价(元/m)</label><br>
            <input type="number" id="kPrice4" name="kPrice4" placeholder="43" required><br>

            <label for="zPrice4">浆液单价(元/m)</label><br>
            <input type="number" id="zPrice4" name="zPrice4" placeholder="665" required><br>

            <div class="description">
                <p>1、建议盾构始发、接收加固采用600@400地面旋喷桩加固。</p>
                <p>2、建议加固后土体应有良好的均匀性和自立性,其无侧限抗压强度控制在0.8~1MPa,渗透系数≤10cm/s。</p>
            </div>
            <button id="btnD4" type="button">计算</button>    
        </form>
    `
    loadFormData('formD4');
    document.getElementById("btnD4").addEventListener("click", calcD4);
}