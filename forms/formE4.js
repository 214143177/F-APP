function formE4() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("forms").innerHTML = `
        
        <form id="formE4" class="form">
        <h1>连接件承载力计算</h1>
        
            <label for="rn">局部压力不均匀分布</label>
            <input type="radio" id="rn" name="r" value="0.75" checked>
            <label for="rh">局部压力均匀分布</label>
            <input type="radio" id="rh" name="r" value="1.0"><br>

            <label for="d">钢管外径(mm)</label><br>
            <input type="number" id="d" name="d" placeholder="800" required><br>

            <label for="t">钢管厚度(mm)</label><br>
            <input type="number" id="t" name="t" placeholder="16" required><br>

            <label for="b">环形隔板宽度(mm)</label><br>
            <input type="number" id="b" name="b" placeholder="50" required><br>

            <label for="N">上层柱荷载设计值(KN)</label><br>
            <input type="number" id="N" name="N" placeholder="14000" required><br>

            <label for="N0">下层柱荷载设计值(KN)</label><br>
            <input type="number" id="N0" name="N0" placeholder="20000" required><br>

            <label for="V">牛腿剪力设计值(KN)</label><br>
            <input type="number" id="V" name="V" placeholder="1500" required><br>

            <label for="γ">安全系数</label><br>
            <input type="number" id="γ" name="γ" placeholder="2.0" required><br>
            <button id="btnE4" type="button">计算</button>
        </form>
        
    `
    loadFormData('formE4');
    document.getElementById("btnE4").addEventListener("click", calcE4);
}