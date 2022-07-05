setInterval(showTime, 1000);

function showTime(){
    const date = new Date();
    var ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    var hour = date.getHours() > 12 ? date.getHours()-12 : date.getHours();

    document.getElementById("date").innerHTML = date.toLocaleDateString();
    document.getElementById("day").innerHTML = getDayName(date.getDay().toLocaleString());
    document.getElementById("am-pm").innerHTML = ampm;
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = date.getMinutes();
    document.getElementById("seconds").innerHTML = date.getSeconds();
}

function getDayName(dayNum){
    var weekDays =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekDays[dayNum];
}