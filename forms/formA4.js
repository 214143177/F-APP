function formA4() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("forms").innerHTML =`
        
        <form id="formA4" class="form">
        <h1>围护桩抗弯计算</h1>
            <label for="r0">结构重要性系数</label><br>
            <select id="r0" name="r0" required>
                <option value="">请选择:</option>
                <option class="option" value="0.9">普通0.9</option>
                <option class="option" value="1.0">一般1.0</option>
                <option class="option" value="1.1">重要1.1</option>
            </select><br>

            <label for="lf">荷载分项系数</label><br>
            <input type="number" id="lf" name="lf" placeholder="1.25" required><br>

            <label for="bd">弯矩标准值(KN·m)</label><br>
            <input type="number" id="bd" name="bd" placeholder="600" required><br>

            <label for="dm">围护桩直径(mm)</label><br>
            <select id="dm" name="dm" required>
                <option value="">请选择:</option>
                <option class="option" value="600">600</option>
                <option class="option" value="800">800</option>
                <option class="option" value="1000">1000</option>
                <option class="option" value="1200">1200</option>
            </select><br>

            <label for="fc">混凝土标号(N/mm²)</label><br>
            <select id="fc" name="fc" required>
                <option value="">请选择:</option>
                <option value="7.2">C15</option>
                <option value="9.6">C20</option>
                <option value="11.9">C25</option>
                <option value="14.3">C30</option>
                <option value="16.7">C35</option>
                <option value="19.1">C40</option>
                <option value="21.1">C45</option>
                <option value="23.1">C50</option>
                <option value="25.3">C55</option>
                <option value="27.5">C60</option>
                <option value="29.7">C65</option>
                <option value="31.8">C70</option>
                <option value="33.8">C75</option>
                <option value="35.9">C80</option>
            </select><br>
            
            <label for="tk">混凝土保护层(mm)</label><br>
            <input type="number" id="tk" name="tk" placeholder="70" required><br>

            <label for="fy">钢筋型号(N/mm²)</label><br>
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
            </select><br>

            <label for="gj">预估钢筋直径(mm)</label><br>
            <input type="number" id="gj" name="gj" placeholder="25" required><br>
            <button id="btnA4" type="button">计算</button>
        </form>
        
    `
    loadFormData('formA4');
    document.getElementById("btnA4").addEventListener("click", calcA4);
}