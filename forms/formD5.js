function formD5() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("forms").innerHTML =`
        
        <form id="formD5" class="form">
        <h1>多排旋喷加固</h1>
            <label for="width5">旋喷桩排数(m)</label><br>
            <input type="number" id="width5" name="width5" placeholder="2" required><br>
        
            <label for="length5">加固土体长度(m)</label><br>
            <input type="number" id="length5" name="length5" placeholder="20" required><br>
        
            <label for="height5">加固土体高度(m)</label><br>
            <input type="number" id="height5" name="height5" placeholder="10" required><br>
        
            <label for="depth5">旋喷桩孔深(m)</label><br>
            <input type="number" id="depth5" name="depth5" placeholder="5" required><br>
        
            <label for="diameter5">旋喷桩直径(m)</label><br>
            <input type="number" id="diameter5" name="diameter5" placeholder="0.6" required><br>
        
            <label for="distance5">旋喷桩间距(m)</label><br>
            <input type="number" id="distance5" name="distance5" placeholder="0.4" required><br>
        
            <label for="kPrice5">旋喷桩钻孔单价(元/m)</label><br>
            <input type="number" id="kPrice5" name="kPrice5" placeholder="43" required><br>
        
            <label for="zPrice5">浆液单价(元/m)</label><br>
            <input type="number" id="zPrice5" name="zPrice5" placeholder="665" required><br>
        
            <div class="description">
                <p>1、建议双排直径600@400高压旋喷桩,加固后土体强度不小于0.8MPa,渗透系数≥10m/s。</p>
            </div>
            <button id="btnD5" type="button">计算</button>
        </form>
            
        `
    loadFormData('formD5');
    document.getElementById("btnD5").addEventListener("click", calcD5);
}