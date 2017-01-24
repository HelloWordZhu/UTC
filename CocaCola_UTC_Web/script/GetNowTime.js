var getnowdate = setInterval(function () {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var Minutes = now.getMinutes();
    var Seconds = now.getSeconds();     //获取当前秒数(0-59)
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    if (Minutes < 10) {
        Minutes = "0" + Minutes;
    }
    if (Seconds < 10) {
        Seconds = "0" + Seconds;
    }
    var week = now.getDay();
    if (week == "0") {
        week = "星期日";
    }
    if (week == "1") {
        week = "星期一";
    }
    if (week == "2") {
        week = "星期二";
    }
    if (week == "3") {
        week = "星期三";
    }
    if (week == "4") {
        week = "星期四";
    }
    if (week == "5") {
        week = "星期五";
    }
    if (week == "6") {
        week = "星期六";
    }
    var time = "&nbsp;&nbsp;&nbsp;" + year + "-" + month + "-" + day + "&nbsp;&nbsp;&nbsp;&nbsp;" + hour + ":" + Minutes + ":" + Seconds + "&nbsp;&nbsp;&nbsp;&nbsp;" + week;
    document.getElementById("Nowtime").innerHTML = time;
}, 100);