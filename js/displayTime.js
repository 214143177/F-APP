function displayTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hour = ("0" + now.getHours()).slice(-2);
    const minute = ("0" + now.getMinutes()).slice(-2);
    const second = ("0" + now.getSeconds()).slice(-2);
    const timeStr = `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    // document.getElementById('time').textContent = timeStr;
    document.getElementById("time").innerHTML = timeStr; // 也可以用innerHTML   
}
displayTime(); // 第一次调用
setInterval(displayTime, 1000); // 每隔一秒调用一次 displayTime 函数
