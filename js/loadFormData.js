function loadFormData(formId) {
    const savedData = localStorage.getItem(formId);
    if (savedData) {
        const formData = JSON.parse(savedData);
        const form = document.getElementById(formId);
        for (const element of form.elements) {
            const name = element.name;
            const value = formData[name];
            if (value !== undefined) {
                const isRadioOrCheckbox = element.type === "radio" || element.type === "checkbox";
                const isSelectMultiple = element.type === "select-multiple";
                if (isRadioOrCheckbox) {
                    element.checked = value === element.value;
                } else if (isSelectMultiple) {
                    for (const option of element.options) {
                        option.selected = value.indexOf(option.value) > -1;
                    }
                } else {
                    element.value = value;
                }
            }
        }
    }
    console.log("表单数据已加载");
}