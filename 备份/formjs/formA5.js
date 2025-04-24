function formA5() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("picts").innerHTML = "";
    document.getElementById("forms").innerHTML = `
        
        <form id="formA5" class="form">
        <h1>围护桩抗剪设计</h1>
        <div class="form-group">
            <label for="r0">结构重要性系数</label>
            <select id="r0" name="r0" required>
                <option value="">请选择:</option>
                <option class="option" value="0.9">普通0.9</option>
                <option class="option" value="1.0">一般1.0</option>
                <option class="option" value="1.1">重要1.1</option>
            </select>
<div class="form-group">
            <label for="lf">荷载分项系数</label>
            <input type="number" id="lf" name="lf" placeholder="1.25" required>
            </div>
<div class="form-group">
            <label for="bd">剪力标准值</label>
            <input type="number" id="bd" name="bd" placeholder="600" required>
            </div>
<div class="form-group">
            <label for="dm">围护桩直径</label>
            <select id="dm" name="dm" required>
                <option value="">请选择:</option>
                <option class="option" value="600">600</option>
                <option class="option" value="800">800</option>
                <option class="option" value="1000">1000</option>
                <option class="option" value="1200">1200</option>
            </select>
            </div>
<div class="form-group">
            <label for="ft">混凝土标号(N/mm²)</label>
            <select id="ft" name="ft" required>
                <option value="">请选择:</option>
                <option value="1.43">C30</option>
                <option value="1.57">C35</option>
                <option value="1.71">C40</option>
                <option value="1.8">C45</option>
                <option value="1.89">C50</option>
                <option value="1.96">C55</option>
                <option value="2.04">C60</option>
                <option value="2.09">C65</option>
            </select>
            </div>
<div class="form-group">
            <label for="fy">钢筋型号(N/mm²)</label>
            <select id="fy" name="fy" required>
                <option value="">请选择:</option>
                <option value="270">HPB300</option>
                <option value="300">HRB335</option>
                <option value="300">HRBF335</option>
                <option value="360">HRB400</option>
                <option value="360">HRBF400</option>
                <option value="360">RRB400</option>
                <option value="435">HRB500</option>
                <option value="435">HRBF500</option>
            </select>
            </div>
<div class="form-group">
            <label for="sp">箍筋间距</label>
            <input type="number" id="sp" name="sp" placeholder="100" required>
            </div>
            <button id="btnA5" type="button">计算</button>
        </form>
        
    `;
    loadFormData("formA5");
    document.getElementById("btnA5").addEventListener("click", calcA5);
}
