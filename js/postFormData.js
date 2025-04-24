function postFormData(formId) {
    const form = document.getElementById(formId);
    if (!form) {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = `${ formId } 表单元素不存在，请检查页面是否正确加载。`;
        errorMessage.style.color = 'red';
        document.body.appendChild(errorMessage);
        return;
    }
    const formData = new FormData(form);
    const output = document.getElementById('output');
    const calcId = `calc${ formId.slice(4) }`;
    fetch(`../calculations/${ calcId }.js`, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.text())
     .then(result => {
            output.textContent = result;
     })
     .catch(error => {
            // 处理错误
            console.error('Error:', error);
     });
}


