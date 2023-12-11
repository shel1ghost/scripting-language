function displayDate(){
    var today = new Date();
    //document.getElementById("result").innerHTML = today.toString();
    var year = today.getFullYear();
    var month = today.toLocaleString('default', { month: 'long' });
    var date = today.getDate();
    var day = today.toLocaleString('default', { weekday: 'long' });
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    document.getElementById("result").innerHTML = `${year} ${month} ${date}, ${day} ${hour}:${minutes}:${seconds}`;   //setTimeout(displayDate,1000);
    setTimeout(displayDate, 1000);
}

displayDate();