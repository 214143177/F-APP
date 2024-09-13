document.addEventListener('DOMContentLoaded', function () {
    let uls = document.querySelectorAll('nav ul');
    for (let ul of uls) {
        ul.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                event.stopPropagation();
                let formFunctionName = event.target.getAttribute('data-form');
                if (formFunctionName) {
                    let formFunction = window[formFunctionName];
                    if (typeof formFunction === 'function') {
                        formFunction();
                    } else {
                        console.error(`函数 ${formFunctionName} 没有找到.`);
                    }
                } else {
                    console.error('data-form 属性没有找到.');
                }
            } else {
                let lis = ul.querySelectorAll('li');
                for (let li of lis) {
                    li.classList.toggle('hidden');

                }
            }
        })
    }
})
