// let darkmode = localStorage.getItem("darkmode");
// let themeSwitch = document.getElementById("switch");
// let enableDarkMode = () => {
//     document.body.classList.add("darkmode");
//     localStorage.setItem("darkmode", "active");
// }
// let disableDarkMode = () => {
//     document.body.classList.remove("darkmode");
//     localStorage.setItem("darkmode", "");
// }

// if (darkmode === "active") {
//     enableDarkMode();
// }

// themeSwitch.addEventListener("click", () => {
//     darkmode = localStorage.getItem("darkmode");
//     darkmode !== "active" ? enableDarkMode() : disableDarkMode();
// });

function initDarkMode() {
    // 获取存储在localStorage中的darkmode值
    let darkmode = localStorage.getItem("darkmode");

    // 获取主题切换按钮
    let themeSwitch = document.querySelector('.menu-item#switch');

    // 定义切换黑暗模式的函数
    const toggleDarkMode = () => {
        // 切换body的类名
        document.body.classList.toggle("darkmode");

        // 更新按钮内的图标
        if (document.body.classList.contains("darkmode")) {
            // 如果是黑暗模式，显示月亮图标
            themeSwitch.querySelector('img').src = "../png/月亮.png";
            localStorage.setItem("darkmode", "active");
        } else {
            // 如果不是黑暗模式，显示太阳图标
            themeSwitch.querySelector('img').src = "../png/太阳.png";
            localStorage.removeItem("darkmode");
        }
    };

    // 初始化黑暗模式状态
    if (darkmode === "active") {
        document.body.classList.add("darkmode");
        // 显示月亮图标
        themeSwitch.querySelector('img').src = "../png/月亮.png";
    } else {
        // 显示太阳图标
        themeSwitch.querySelector('img').src = "../png/太阳.png";
    }

    // 添加点击事件监听器以切换黑暗模式
    themeSwitch.addEventListener("click", toggleDarkMode);
}

// 调用初始化函数
initDarkMode();
