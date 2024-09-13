function formE1() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("forms").innerHTML = `
    <div class="picture">
            <h1>示意图</h1>
            <img src="../image/双筋矩形受弯承载力.png" alt="双筋矩形受弯承载力">
        </div>
        <form id="formE1" class="form">
            <h1>双筋矩形正截面受弯承载力</h1>
            <div class="form-group">
                <label>弯矩设计值(KN·m)</label><br>
                <input type="number" id="M" name="M" placeholder="1000" required><br>
            </div>
            <div class="form-group">
                <label>矩形宽度(mm)</label><br>
                <input type="number" id="b" name="b" placeholder="1000" required><br>
            </div>
            <div class="form-group">
                <label>矩形高度(mm)</label><br>
                <input type="number" id="h" name="h" placeholder="800" required><br>
            </div>
            <div class="form-group">
                <label>预估主筋直径(mm)</label><br>
                <input type="number" id="D" name="D" placeholder="25" required><br>
            </div>
            <div class="form-group">
                <label>预估箍筋直径(mm)</label><br>
                <input type="number" id="d" name="d" placeholder="14" required><br>
            </div>
            <div class="form-group">
                <label>最外层净保护层厚度(mm)</label><br>
                <input type="number" id="c" name="c" placeholder="40" required><br>
            </div>
            <div class="form-group">
                <label>混凝土标号</label><br>
                <select name="concrete" id="concrete" required>
                    <option>请选择:</option>
                    <option>C20</option>
                    <option>C25</option>
                    <option>C30</option>
                    <option>C35</option>
                    <option>C40</option>
                    <option>C45</option>
                    <option>C50</option>
                    <option>C55</option>
                    <option>C60</option>
                    <option>C65</option>
                    <option>C70</option>
                    <option>C75</option>
                    <option>C80</option>
                </select><br>
            </div>
            <div class="form-group">
                <label>钢筋型号种类</label><br>
                <select name="rebar" id="rebar" required>
                    <option>请选择:</option>
                    <option>HPB300</option>
                    <option>HRB335</option>
                    <option>HRB400</option>
                    <option>HRBF400</option>
                    <option>RRB400</option>
                    <option>HRB500</option>
                    <option>HRBF500</option>
                    <option>中强度预应力钢丝-800</option>
                    <option>中强度预应力钢丝-1000</option>
                    <option>中强度预应力钢丝-1200</option>
                    <option>预应力螺纹钢筋-980</option>
                    <option>预应力螺纹钢筋-1080</option>
                    <option>预应力螺纹钢筋-1230</option>
                    <option>消除应力钢丝-1470</option>
                    <option>消除应力钢丝-1570</option>
                    <option>消除应力钢丝-1860</option>
                    <option>钢绞线-三股1570</option>
                    <option>钢绞线-三股1860</option>
                    <option>钢绞线-三股1960</option>
                    <option>钢绞线-七股1720</option>
                    <option>钢绞线-七股1860</option>
                    <option>钢绞线-七股1960</option>
                </select><br>
            </div>
            <button id="btnE1" type="button">计算</button>
        </form>
        `
    loadFormData('formE1');
    document.getElementById("btnE1").addEventListener("click", calcE1);
}
