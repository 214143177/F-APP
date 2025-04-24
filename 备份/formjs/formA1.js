function formA1() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("picts").innerHTML = `
        <div class="picture" >
        <img src="../image/双筋矩形受弯承载力1.png" alt="双筋矩形受弯承载力" style="height: 200px;">
            <img src="../image/双筋矩形受弯承载力2.png" alt="双筋矩形受弯承载力" style="height: 200px;">
        </div>`;
    document.getElementById("forms").innerHTML = `
        <form id="formA1" class="form">
            <h1>钢支撑结构设计</h1>
            <div class="form-group">
                <label for="γ0">结构重要性系数</label>
                <select id="γ0" name="γ0" required>
                    <option class="option" value="">请选择:</option>
            <option class="option" value="0.9">普通0.9</option>
                    <option class="option" value="1.0">一般1.0</option>
                    <option class="option" value="1.1">重要1.1</option>
                </select>
            </div>
            <div class="form-group">
                <label for="dm">钢支撑直径(mm)</label>
                <select id="dm" name="dm" required>
                    <option class="option" value="">请选择:</option>
                    <option class="option" value="600">400</option>
                    <option class="option" value="600">580</option>
                    <option class="option" value="600">600</option>
                    <option class="option" value="609">609</option>
                    <option class="option" value="600">630</option>
                    <option class="option" value="800">800</option>
                </select>
            </div>
            <div class="form-group">
                <label for="wt">钢支撑壁厚(m)</label>
                <select id="wt" name="wt" required>
                    <option class="option" value="">请选择:</option>
                    <option class="option" value="12">12</option>
                    <option class="option" value="14">14</option>
                    <option class="option" value="16">16</option>
                    <option class="option" value="20">20</option>
                    <option class="option" value="25">25</option>
                </select>
            </div>
            <div class="form-group">
                <label for="sp">钢支撑间距(m)</label>
                <input type="number" id="sp" name="sp" placeholder="3" required>
            </div>
            <div class="form-group">
                <label for="ang">钢支撑角度(°)</label>
                <input type="number" id="ang" name="ang" placeholder="90" required>
            </div>
            <div class="form-group">
                <label for="lx">钢支撑长度(m)</label>
                <input type="number" id="lx" name="lx" placeholder="20" required>
                <label for="ol" class="checkbox">重叠</label>
                <input type="checkbox" id="ol" name="ol" value="1.5">
            </div>
            <div class="form-group">
                <label for="el">钢材弹性模量(N/mm²)</label>
                <input type="number" id="el" name="el" placeholder="206000" required>
            </div>
            <div class="form-group">
                <label for="lf">荷载分项系数</label>
                <input type="number" id="lf" name="lf"  placeholder="1.25" step="0.01" required>
            </div>
            <div class="form-group">
                <label for="st">轴力标准值(KN)</label>
                <input type="number" id="st" name="st" placeholder="1000" required>
            </div>
            <div class="form-group">
                <label for="sg">施工荷载(KN/m)</label>
                <input type="number" id="sg" name="sg" placeholder="8" required>
            </div>
            <div class="form-group">
                <label for="fi">等效弯矩系数</label>
                <input type="number" id="fi" name="fi" placeholder="1" required>
            </div>
            <button id="btnA1" type="button">计算</button>
        </form>`;

    loadFormData("formA1");
    document.getElementById("btnA1").addEventListener("click", calcA1);
}
