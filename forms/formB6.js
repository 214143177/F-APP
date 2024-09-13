function formB6() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("forms").innerHTML =`
        
        <form id="formB6" class="form">
        <h1>偏心受拉构件裂缝验算</h1>
            <label for="b">截面宽度(mm)</label><br>
            <input type="number" id="b" name="b" placeholder="800" required><br>

            <label for="h">截面高度(mm)</label><br>
            <input type="number" id="h" name="h" placeholder="1000" required><br>

            <label for="Tk">拉力标准值(KN)</label><br>
            <input type="number" id="Tk" name="Tk" placeholder="2000" required><br>

            <label for="Mk">弯矩标准值(KN·m)</label><br>
            <input type="number" id="Mk" name="Mk" placeholder="2000" required><br>

            <label for="Dt">受拉钢筋直径(mm)</label><br>
            <select id="Dt" name="Dt" required>
                <option value="">请选择:</option>
                <option value="28.3">6</option>
                <option value="33.2">6.5</option>
                <option value="50.3">8</option>
                <option value="52.8">8.2</option>
                <option value="78.5">10</option>
                <option value="113.1">12</option>
                <option value="153.9">14</option>
                <option value="201.1">16</option>
                <option value="254.5">18</option>
                <option value="314.2">20</option>
                <option value="380.1">22</option>
                <option value="490.9">25</option>
                <option value="615.8">28</option>
                <option value="804.2">32</option>
                <option value="1017.9">36</option>
                <option value="1256.6">40</option>
                <option value="1964.0">50</option>
            </select><br>

            <label for="Nt">受拉钢筋数量(根)</label><br>
            <input type="number" id="Nt" name="Nt" placeholder="20" required><br>

            <label for="Dc">受压钢筋直径(mm)</label><br>
            <select id="Dc" name="Dc" required>
                <option value="">请选择:</option>
                <option value="28.3">6</option>
                <option value="33.2">6.5</option>
                <option value="50.3">8</option>
                <option value="52.8">8.2</option>
                <option value="78.5">10</option>
                <option value="113.1">12</option>
                <option value="153.9">14</option>
                <option value="201.1">16</option>
                <option value="254.5">18</option>
                <option value="314.2">20</option>
                <option value="380.1">22</option>
                <option value="490.9">25</option>
                <option value="615.8">28</option>
                <option value="804.2">32</option>
                <option value="1017.9">36</option>
                <option value="1256.6">40</option>
                <option value="1964.0">50</option>
            </select><br>

            <label for="Nc">受压钢筋数量(根)</label><br>
            <input type="number" id="Nc" name="Nc" placeholder="20" required><br>

            <label for="Es">钢筋弹性模量(N/mm²)</label><br>
            <input type="number" id="Es" name="Es" placeholder="200000" required><br>

            <label for="v">钢筋相对粘结特性系数</label><br>
            <input type="number" id="v" name="v" placeholder="1" required><br>

            <label for="acr">构件受力特征系数</label><br>
            <input type="number" id="acr" name="acr" placeholder="2.4" required><br>

            <label for="fc">混凝土抗压强度(N/mm²)</label><br>
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

            <label for="ft">混凝土抗拉强度</label><br>
            <select id="ft" name="ft" required>
                <option value="">请选择:</option>
                <option value="1.27">C15</option>
                <option value="1.54">C20</option>
                <option value="1.78">C25</option>
                <option value="2.01">C30</option>
                <option value="2.20">C35</option>
                <option value="2.39">C40</option>
                <option value="2.51">C45</option>
                <option value="2.64">C50</option>
                <option value="2.74">C55</option>
                <option value="2.85">C60</option>
                <option value="2.93">C65</option>
                <option value="2.99">C70</option>
                <option value="3.05">C75</option>
                <option value="3.11">C80</option>
            </select><br>

            <label for="a">保护层厚度(mm)</label><br>
            <input type="number" id="a" name="a" placeholder="70" required><br>
            <button id="btnB6" type="button">计算</button>
        </form>
        
    `
    loadFormData('formB6');
    document.getElementById("btnB6").addEventListener("click", calcB6);
}