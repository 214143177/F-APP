function formE4() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("picts").innerHTML = "";
    document.getElementById("forms").innerHTML = `
        
        <form id="formE4" class="form">
        <h1>连接件承载力计算</h1>
<div class="form-group">
            <label for="rn">
            <input type="radio" id="rn" name="r" value="0.75" checked>
            <span>局部压力不均匀分布</span>
            </label>
            <label for="rh">
            <input type="radio" id="rh" name="r" value="1.0">
            <span>局部压力均匀分布</span>
            </label>
        </div>
<div class="form-group">
            <label for="d">钢管外径(mm)</label>
            <input type="number" id="d" name="d" placeholder="800" required>
            </div>
<div class="form-group">
            <label for="t">钢管厚度(mm)</label>
            <input type="number" id="t" name="t" placeholder="16" required>
            </div>
<div class="form-group">
            <label for="b">环形隔板宽度(mm)</label>
            <input type="number" id="b" name="b" placeholder="50" required>
            </div>
<div class="form-group">
            <label for="N">上层柱荷载设计值(KN)</label>
            <input type="number" id="N" name="N" placeholder="14000" required>
            </div>
<div class="form-group">
            <label for="N0">下层柱荷载设计值(KN)</label>
            <input type="number" id="N0" name="N0" placeholder="20000" required>
            </div>
<div class="form-group">
            <label for="V">牛腿剪力设计值(KN)</label>
            <input type="number" id="V" name="V" placeholder="1500" required>
            </div>
<div class="form-group">
            <label for="γ">安全系数</label>
            <input type="number" id="γ" name="γ" placeholder="2.0" required>
            </div>
            <button id="btnE4" type="button">计算</button>
        </form>
        
    `;
    loadFormData("formE4");
    document.getElementById("btnE4").addEventListener("click", calcE4);
}
