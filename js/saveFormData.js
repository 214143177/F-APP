function saveFormData(formId) {
    const form = document.getElementById(formId);
    const savedFormData = {};
    for (const element of form.elements) {
        const name = element.name;
        let value;
        if (element.type === "radio" || element.type === "checkbox") {
            if (element.checked) {
                value = element.value;
            } else {
                continue;
            }
        } else if (element.type === "select-multiple") {
            value = [];
            for (const option of element.options) {
                if (option.selected) {
                    value.push(option.value);
                }
            }
        } else {
            value = element.value;
        }
        savedFormData[name] = value;
    }
    localStorage.setItem(formId, JSON.stringify(savedFormData));
    console.log("表单数据已保存");
}