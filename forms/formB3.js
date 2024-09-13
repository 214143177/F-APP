function formB3() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("forms").innerHTML =`
        
        <form id="formB3" class="form">
        <h1>矩形框架柱计算</h1>
            <label for="r0">结构重要性系数</label><br>
            <select id="r0" name="r0" required>
                <option value="">请选择:</option>
                <option class="option" value="0.9">普通0.9</option>
                <option class="option" value="1.0">一般1.0</option>
                <option class="option" value="1.1">重要1.1</option>
            </select><br>

            <label for="kz">抗震等级</label><br>
            <select id="kz" name="kz" required>
                <option value="">请选择:</option>
                <option value="0.65">一级抗震</option>
                <option value="0.75">二级抗震</option>
                <option value="0.85">三级抗震</option>
                <option value="0.9">四级抗震</option>
            </select><br>

            <label for="b">框架柱宽度(mm)</label><br>
            <input type="number" id="b" name="b" placeholder="1000" required><br>

            <label for="h">框架柱高度(mm)</label><br>
            <input type="number" id="h" name="h" placeholder="800" required><br>

            <label for="lf">荷载分项系数</label><br>
            <input type="number" id="lf" name="lf" placeholder="1.25" required><br>

            <label for="Nb">轴力标准值(KN)</label><br>
            <input type="number" id="Nb" name="Nb" placeholder="10000" required><br>

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

            <label for="rv">最小配箍特征值(查表)</label><br>
            <input type="number" id="rv" name="rv" placeholder="0.13" required><br>

            <label for="fai">箍筋直径(mm)</label><br>
            <input type="number" id="fai" name="fai" placeholder="14" required><br>

            <label for="sp">箍筋间距(mm)</label><br>
            <input type="number" id="sp" name="sp" placeholder="100" required><br>

            <label for="ls">箍筋总长(mm)</label><br>
            <input type="number" id="ls" name="ls" placeholder="10000" required>
            <input type="checkbox" id="Qg" name="Qg">全高配箍<br>

            <label for="gj">纵筋直径(mm)</label><br>
            <input type="number" id="gj" name="gj" placeholder="25" required><br>

            <label for="Qud">全部纵筋配筋率-设计值(%)</label><br>
            <input type="number" id="Qud" name="Qud" placeholder="0.9" required><br>

            <label for="Qs">全部纵筋数量(根)</label><br>
            <input type="number" id="Qs" name="Qs" placeholder="24" required><br>

            <label for="Dud">单边纵筋配筋率-设计值(%)</label><br>
            <input type="number" id="Dud" name="Dud" placeholder="0.2" required><br>

            <label for="Ds">单边纵筋数量(根)</label><br>
            <input type="number" id="Ds" name="Ds" placeholder="12" required><br>
            <button id="btnB3" type="button">计算</button>
        </form>
        
    `
    loadFormData('formB3');
    document.getElementById("btnB3").addEventListener("click", calcB3);
}