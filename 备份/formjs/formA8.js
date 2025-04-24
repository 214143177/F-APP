function formA8() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("picts").innerHTML = "";
    document.getElementById("forms").innerHTML = `
            <form id="formA8" class="form">
            <h1>混凝土预埋件计算</h1>
            <div class="form-group">
                <label>
                    <input type="radio" id="zm" name="choose" checked>
                    <span>直锚对称</span>
                </label>
                <label>
                    <input type="radio" id="wz" name="choose">
                    <span>直锚+弯折</span>
                </label>
            </div>
            <div class="form-group">
                <label for="M">弯矩设计值(KN·m)</label>
                <input type="number" id="M" name="M" placeholder="50" required>
            </div>
            <div class="form-group">
                <label for="V">剪力设计值(KN)</label>
                <input type="number" id="V" name="V" placeholder="100" required>
            </div>
            <div class="form-group">
                <label for="N">轴力设计值(KN)</label>
                <input type="number" id="N" name="N" placeholder="100" required>
            </div>
            <div class="form-group">
                <label for="fc">混凝土抗压强度设计值(N/mm²)</label>
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
                <label for="d">锚筋直径(mm)</label>
                <input type="number" id="d" name="d" placeholder="16" required>
            </div>
            <div class="form-group">
                <label for="s1">锚筋行数(行)</label>
                <input type="number" id="s1" name="s1" placeholder="4" required>
            </div>
            <div class="form-group">
                <label for="s">锚筋列数(列)</label>
                <input type="number" id="s" name="s" placeholder="4" required>
            </div>
            <div class="form-group">
                <label for="b">锚筋水平间距(mm)</label>
                <input type="number" id="b" name="b" placeholder="220" required>
            </div>
            <div class="form-group">
                <label for="b1">锚筋竖向间距(mm)</label>
                <input type="number" id="b1" name="b1" placeholder="220" required>
            </div>
            <div class="form-group">
                <label for="c">锚筋至砼外边缘水平距离(mm)</label>
                <input type="number" id="c" name="c" placeholder="90" required>
            </div>
            <div class="form-group">
                <label for="c1">锚筋至砼外边缘竖向距离(mm)</label>
                <input type="number" id="c1" name="c1" placeholder="90" required>
            </div>
            <div class="form-group">
                <label for="i">弯折锚筋数量(根)</label>
                <input type="number" id="i" name="i" placeholder="0" required>
            </div>
            <div class="form-group">
                <label>
                    <input type="radio" class="checkbox" id="no" name="change" checked>
                    <span>无防变形措施</span>
                </label>
                <label>
                    <input type="radio" class="checkbox" id="yes" name="change">
                    <span>有防变形措施</span>
                </label>
            </div>
            <div class="form-group">
                <label for="B">锚板宽度(mm)</label>
                <input type="number" id="B" name="B" placeholder="800" required>
            </div>
            <div class="form-group">
                <label for="H">锚板高度(mm)</label>
                <input type="number" id="H" name="H" placeholder="800" required>
            </div>
            <div class="form-group">
                <label for="t">锚板厚度(mm)</label>
                <input type="number" id="t" name="t" placeholder="16" required>
            </div>
            <button id="btnA8" type="button">计算</button>
        </form> `;

    loadFormData("formA8");
    document.getElementById("btnA8").addEventListener("click", calcA8);
}
