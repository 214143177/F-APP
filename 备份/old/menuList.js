export default function menuList() {
    document.addEventListener("DOMContentLoaded", function () {
        let uls = document.querySelectorAll("ul"); // 获取所有的ul元素
        for (let ul of uls) {
            ul.addEventListener("click", function (event) {
                if (event.target.tagName === "LI") {
                    event.stopPropagation(); // 阻止事件冒泡
                    let formFunctionName = event.target.getAttribute("data-form"); // 获取data-form属性的值
                    if (formFunctionName) {
                        let formFunction = window[formFunctionName]; // 获取对应的函数
                        if (typeof formFunction === "function") {
                            formFunction();
                        } else {
                            console.error(`函数 ${ formFunctionName } 没有找到.`);
                        }
                    } else {
                        console.error("data-form 属性没有找到.");
                    }
                } else {
                    console.error("点击的不是li元素.");
                }
            });
        }
    });
}