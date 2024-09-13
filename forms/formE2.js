function formE2() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("forms").innerHTML = `
    
        <form id="formE2" class="form">
        <h1>钢管混凝土柱承载力</h1>
        <div class="form-group">
            <label for="γ0">结构重要性系数</label><br>
            <select id="γ0" name="γ0" required>
                <option value="">请选择:</option>
                <option class="option" value="0.9">普通0.9</option>
                <option class="option" value="1.0">一般1.0</option>
                <option class="option" value="1.1">重要1.1</option>
            </select><br>
            </div>
<div class="form-group">
            <label for="d">钢管外径(mm)</label><br>
            <input type="number" id="d" name="d" placeholder="800" required><br>
            </div>
<div class="form-group">
            <label for="t">钢管厚度(mm)</label><br>
            <input type="number" id="t" name="t" placeholder="20" required><br>
            </div>
<div class="form-group">
            <label for="l">钢管长度(mm)</label><br>
            <input type="number" id="l" name="l" placeholder="10000" required><br>
            </div>
<div class="form-group">
            <label for="kn">无侧移框架柱</label>
            <input type="radio" id="kn" name="k" value="1.0" checked>
            <label for="kg">轴心受压柱、杆件</label>
            <input type="radio" id="kg" name="k" value="1.0">
            <label for="kh">有侧移框架柱</label>
            <input type="radio" id="kh" name="k" value="0.967"><br>
            </div>
<div class="form-group">
            <label for="μ">计算长度系数</label><br>
            <input type="number" id="μ" name="μ" placeholder="1" required><br>
            </div>
<div class="form-group">
            <label for="rn">无人防荷载</label>
            <input type="radio" id="rn" name="r" value="1.0" checked>
            <label for="rh">有人防荷载</label>
            <input type="radio" id="rh" name="r" value="1.5"><br>
            </div>
<div class="form-group">
            <label for="fc">混凝土轴心抗压强度设计值(N/mm²)</label><br>
            <select name="fc" id="fc" required>
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
            </div>
<div class="form-group">
            <label for="fa">钢材抗压强度设计值(N/mm²)</label><br>
            <input type="number" id="fa" name="fa" placeholder="215" required><br>
            </div>
<div class="form-group">
            <label for="N">轴向压力设计值(KN)</label><br>
            <input type="number" id="N" name="N" placeholder="16000" required><br>
            </div>
<div class="form-group">
            <label for="M1">柱顶弯设计值(KN·m)</label><br>
            <input type="number" id="M1" name="M1" placeholder="320" required><br>
            </div>
<div class="form-group">
            <label for="M2">柱底弯设计值(KN·m)</label><br>
            <input type="number" id="M2" name="M2" placeholder="320" required><br>
            <button id="btnE2" type="button">计算</button>
        </form>
        
    `
    loadFormData('formE2');
    document.getElementById("btnE2").addEventListener("click", calcE2);
}