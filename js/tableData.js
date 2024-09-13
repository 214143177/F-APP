function addTableRow() {
    var table = document.getElementById("myTable");// 获取表格对象
    var row = table.insertRow(-1);// 在最后一行插入一行
    for (var i = 0; i < table.rows[0].cells.length; i++) {
        var cell = row.insertCell(i);// 在新行中插入单元格
        cell.innerHTML = "";// 单元格内容为序号
        if (i == 0) {
            cell.innerHTML = table.rows.length - 1;// 序号为当前行数减2
        }
    }
};
function delTableRow() {
    var table = document.getElementById("myTable"); // 获取表格对象
    if (table.rows.length > 2) { // 检查表格行数是否大于2
        var row = table.rows[table.rows.length - 1]; // 获取最后一行
        table.deleteRow(row.rowIndex); // 删除最后一行

    }
};
function saveTableData() {
    var table = document.getElementById("myTable"); // 获取表格对象
    var data = "";
    for (var i = 1; i < table.rows.length - 1; i++) { // 遍历除表头和脚注行之外的行
        for (var j = 0; j < table.rows[i].cells.length; j++) { // 遍历每行的单元格
            data += table.rows[i].cells[j].innerHTML + ","; // 将单元格内容添加到data中，用逗号分隔
        }
        data += "|"; // 用竖线分隔每行数据
    }
    localStorage.setItem("data", data); // 将data存入localStorage
};
// 读取localStorage数据
function loadTableData() {
    var data = localStorage.getItem("data"); // 获取localStorage中的数据
    if (data) { // 判断是否有数据
        var table = document.getElementById("myTable"); // 获取表格对象
        var rows = data.split("|"); // 用竖线分隔每行数据
        for (var i = 0; i < rows.length; i++) { // 遍历每行数据
            var cells = rows[i].split(","); // 用逗号分隔每行单元格数据
            var row = table.insertRow(-1); // 在最后一行插入一行
            for (var j = 0; j < cells.length; j++) { // 遍历每行单元格数据
                var cell = row.insertCell(j); // 在新行中插入单元格
                cell.innerHTML = cells[j]; // 单元格内容为数据
            }
        }
    }
};
// 页面加载完成后读取localStorage数据
window.onload = function () { readTableData(); };
document.getElementById("addTableRow").addEventListener("click", function () { addTableRow(); });
document.getElementById("delTableRow").addEventListener("click", function () { delTableRow(); });