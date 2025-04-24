document.addEventListener('DOMContentLoaded', function () {
    const ul = document.querySelector('ul.nav-links');
    ul.addEventListener('click', function (event) {
        if (event.target.tagName === 'A' && event.target.parentElement.dataset.form) {
            const formId = event.target.parentElement.dataset.form;
            fetch(`../forms/${ formId }.html`)
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const form = doc.getElementById(formId);
                    const formContainer = document.getElementById('formContainer');
                    const output = document.getElementById('output');
                    output.innerHTML = '';
                    formContainer.innerHTML = '';
                    formContainer.appendChild(form);
                    loadFormData(formId);
                })
                .catch(error => {
                    // 处理错误
                    console.error('Error:', error);
                });
        }
    });
});