//获取前端formdata数据
function getFormData(formId) {
    const form = document.getElementById(formId);
    if (!form) {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = `${ formId } 表单元素不存在，请检查页面是否正确加载。`;
        errorMessage.style.color = 'red';
        document.body.appendChild(errorMessage);
        return;
    }
    const formData = new FormData(form);
    return formData;
}

