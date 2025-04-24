function formE3() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("picts").innerHTML = "";
    document.getElementById("forms").innerHTML = `
    
        <form id="formE3" class="form">
        <h1>环形牛腿承载力</h1>
        <div class="form-group">
            <label for="d">钢管外径(mm)</label>
            <input type="number" id="d" name="d" placeholder="800" required>
        </div>
<div class="form-group">
            <label for="t">钢管厚度(mm)</label>
            <input type="number" id="t" name="t" placeholder="16" required>
</div>
<div class="form-group">
            <label for="hb">环板宽度(mm)</label>
            <input type="number" id="hb" name="hb" placeholder="400" required>
</div>
<div class="form-group">
            <label for="ht">环板厚度(mm)</label>
            <input type="number" id="ht" name="ht" placeholder="20" required>
</div>
<div class="form-group">
            <label for="lh">肋板高度(mm)</label>
            <input type="number" id="lh" name="lh" placeholder="500" required>
</div>
<div class="form-group">
            <label for="lt">环板厚度(mm)</label>
            <input type="number" id="lt" name="lt" placeholder="20" required>
</div>
<div class="form-group">
            <label for="n">环板数量(个)</label>
            <input type="number" id="n" name="n" placeholder="24" required>
</div>
<div class="form-group">
            <label for="ls">牛腿以上混凝土高度(mm)</label>
            <input type="number" id="ls" name="ls" placeholder="1400" required>
</div>
<div class="form-group">
            <label for="l">钢管长度(mm)</label>
            <input type="number" id="l" name="l" placeholder="10000" required>
</div>
<div class="form-group">
            <label for="kn">
            <input type="radio" id="kn" name="k" value="1.0" checked>
            <span>无侧移框架柱</span>
            </label>
            <label for="kg">
            <input type="radio" id="kg" name="k" value="1.0">
            <span>轴心受压柱、杆件</span>
            </label>
            <label for="kh">
            <input type="radio" id="kh" name="k" value="0.967">
            <span>有侧移框架柱</span>
            </label>

            </div>
<div class="form-group">
            <label for="μ">计算长度系数</label>
            <input type="number" id="μ" name="μ" placeholder="1" required>
</div>
<div class="form-group">
            <label for="rn">
            <input type="radio" id="rn" name="r" value="1.0" checked>
            <span>无人防荷载</span>
            </label>
            <label for="rh">
            <input type="radio" id="rh" name="r" value="1.5">
            <span>有人防荷载</span>
            </label>
            </div>
<div class="form-group">
            <label for="fc">混凝土轴心抗压强度设计值(N/mm²)</label>
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
            </select>
</div>
<div class="form-group">
            <label for="ft">混凝土轴心抗拉强度设计值(N/mm²)</label>
            <select name="ft" id="ft" required>
                <option value="">请选择:</option>
                <option value="0.91">C15</option>
                <option value="1.10">C20</option>
                <option value="1.27">C25</option>
                <option value="1.43">C30</option>
                <option value="1.57">C35</option>
                <option value="1.71">C40</option>
                <option value="1.80">C45</option>
                <option value="1.89">C50</option>
                <option value="1.96">C55</option>
                <option value="2.04">C60</option>
                <option value="2.09">C65</option>
                <option value="2.14">C70</option>
                <option value="2.18">C75</option>
                <option value="2.22">C80</option>
            </select>
</div>
<div class="form-group">
            <label for="fa">钢材抗压、拉、弯强度设计值(N/mm²)</label>
            <input type="number" id="fa" name="fa" placeholder="215" required>
</div>
<div class="form-group">
            <label for="fv">钢材抗剪强度设计值(N/mm²)</label>
            <input type="number" id="fv" name="fv" placeholder="125" required>
</div>
<div class="form-group">
            <label for="γ">安全系数</label>
            <input type="number" id="γ" name="γ" placeholder="1.5" required>
</div>
<div class="form-group">
            <label for="V">牛腿剪力设计值(KN)</label>
            <input type="number" id="V" name="V" placeholder="14000" required>
</div>
            <button id="btnE3" type="button">计算</button>
        </form>`;
    loadFormData("formE3");
    document.getElementById("btnE3").addEventListener("click", calcE3);
}
