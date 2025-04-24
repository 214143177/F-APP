document.getElementById("search").addEventListener("input", function () {
    // 当输入框的值发生变化时，执行以下代码
    let input = document.getElementById("search"); //获取输入框的值
    let filter = input.value.toUpperCase(); //将输入框的值转换为大写
    let uls = document.querySelectorAll("ul");//获取所有ul元素
    for (let i = 0; i < uls.length; i++) {
        let ul = uls[i];
        let lis = ul.querySelectorAll("li"); //获取每个ul下的所有li
        for (let j = 0; j < lis.length; j++) {
            let li = lis[j];
            let liText = li.textContent || li.innerText; //获取li的文本内容
            if (liText.toUpperCase().indexOf(filter) > -1) {
                li.style.display = ""; //如果li的文本内容包含输入框的值，则显示该li
            } else {
                li.style.display = "none"; //否则隐藏该li
            }
        }
    }
}); 
