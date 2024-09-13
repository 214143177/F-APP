function saveFormData(formId) {
    var formData = {};
    var form = document.getElementById(formId);
    var elements = form.elements; // 获取表单中的所有元素

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var name = element.name;
        var value = element.value;

        // 检查元素类型并相应地处理值
        if (element.type === 'radio' || element.type === 'checkbox') {
            // 仅当单选按钮或复选框被选中时才存储
            if (element.checked) {
                formData[name] = value;
            }
        } else if (element.type === 'select-multiple') {
            // 处理多选下拉框
            formData[name] = [];
            for (var j = 0; j < element.options.length; j++) {
                if (element.options[j].selected) {
                    formData[name].push(element.options[j].value);
                }
            }
        } else {
            // 处理其他类型的输入
            formData[name] = value;
        }
    }

    // 将表单数据转换为JSON字符串并存储到localStorage
    localStorage.setItem(formId, JSON.stringify(formData));
    console.log('表单数据已保存');
}
// ----------------------------------------------------------------------------------------------------------------------------
function loadFormData(formId) {
    var savedData = localStorage.getItem(formId);
    if (savedData) {
        var formData = JSON.parse(savedData);
        var form = document.getElementById(formId);
        var elements = form.elements;

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var name = element.name;
            var value = formData[name];

            if (value) {
                if (element.type === 'radio' || element.type === 'checkbox') {
                    element.checked = (value === element.value);
                } else if (element.type === 'select-multiple') {
                    // 处理多选下拉框
                    for (var j = 0; j < element.options.length; j++) {
                        element.options[j].selected = (value.indexOf(element.options[j].value) > -1);
                    }
                } else {
                    element.value = value;
                }
            }
        }
    }
    console.log('表单数据已加载');
}
//----------------------------------------------------------------------------------------------------------------------------------
function getFormData(formId) {
    var form = document.getElementById(formId);
    var formData = new FormData(form);
    var data = Object.fromEntries(formData.entries());
    var numberData = Object.fromEntries(Object.entries(data).map(([key, value]) => [key, Number(value)]));
    //数据是否有空值
    for (var key in numberData) {
        if (numberData[key] === '') {
            console.log('数据有空值');
            alert('数据有空值');
            return false;
        }
    }
    return numberData;
}