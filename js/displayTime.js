document.addEventListener('DOMContentLoaded', function () {
    function displayTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = ("0" + (now.getMonth() + 1)).slice(-2);
        const date = now.getDate();
        const day = now.getDay();
        const weekDay = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        const hour = ("0" + now.getHours()).slice(-2);
        const minute = ("0" + now.getMinutes()).slice(-2);
        const second = ("0" + now.getSeconds()).slice(-2);
        const timeStr = `${ year }-${ month }-${ date } ${ hour }:${ minute }:${ second } ${ weekDay[day] }`;
        document.getElementById("time").textContent = timeStr;
        console.log(
            { now: now },
            { year: year },
            { month: month },
            { date: date },
            { day: day },
            { weekDay: weekDay },
            { hour: hour },
            { minute: minute },
            { second: second },
            { timeStr: timeStr }
        );
    }
    displayTime();
    setInterval(displayTime(), 1000);
});