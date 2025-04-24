function formA2() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("picts").innerHTML = "";
    document.getElementById("forms").innerHTML = `
        <form id="formA2" class="form">
        <h1>钢围檩结构设计</h1>
        <div class="form-group">
            <label for="choose">工字钢型号</label>
            <select id="choose" name="choose" required>
                <option value="">请选择:</option>
                <option value="200">20a</option>
                <option value="200">20b</option>
                <option value="220">22a</option>
                <option value="220">22b</option>
                <option value="250">25a</option>
                <option value="250">25b</option>
                <option value="280">28a</option>
                <option value="280">28b</option>
                <option value="320">32a</option>
                <option value="320">32b</option>
                <option value="320">32c</option>
                <option value="360">36a</option>
                <option value="360">36b</option>
                <option value="360">36c</option>
                <option value="400">40a</option>
                <option value="400">40b</option>
                <option value="400">40c</option>
                <option value="450">45a</option>
                <option value="450">45b</option>
                <option value="450">45c</option>
                <option value="500">50a</option>
                <option value="500">50b</option>
                <option value="500">50c</option>
            </select>
        </div>
        <div class="form-group">
            <label for="ms">工字钢数量(个)</label>
            <input type="number" id="ms" name="ms" placeholder="2" required>
        </div>
        <div class="form-group">
            <label for="lb">连续缀板宽度(mm)</label>
            <input type="number" id="lb" name="lb" placeholder="700" required>
        </div>
        <div class="form-group">
            <label for="lt">连续缀板厚度(mm)</label>
            <input type="number" id="lt" name="lt" placeholder="12" required>
        </div>
        <div class="form-group">
            <label for="pb">单块缀板高度(mm)</label>
            <input type="number" id="pb" name="pb" placeholder="700" required>
        </div>
        <div class="form-group">
            <label for="pt">单块缀板厚度(mm)</label>
            <input type="number" id="pt" name="pt" placeholder="20" required>
        </div>
        <div class="form-group">
            <h3>组合截面(考虑两侧缀板作用)</h3>
            <label for="mm">支座弯矩设计值(KN·m)</label>
            <input type="number" id="mm" name="mm" placeholder="108" required>
        </div>
        <div class="form-group">
            <label for="mf">支座剪力设计值(KN)</label>
            <input type="number" id="mf" name="mf" placeholder="216" required>
        </div>
        <div class="form-group">
            <h3>组合截面(只考虑连续缀板作用)</h3>
            <label for="nm">跨中弯矩设计值(KN·m)</label>
            <input type="number" id="nm" name="nm" placeholder="54" required>
        </div>
        <div class="form-group">
            <label for="nf">跨中剪力设计值(KN)</label>
            <input type="number" id="nf" name="nf" placeholder="0" required>
        </div>
            <button id="btnA2" type="button">计算</button>
        </form>`;
    loadFormData("formA2");
    document.getElementById("btnA2").addEventListener("click", calcA2);
}
