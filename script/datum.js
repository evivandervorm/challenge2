var today = new Date();
var maanden = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'Novembeer', 'December'];
var formatDate = today.getDate() + ' ' + maanden[today.getMonth()]  + ' ' + today.getFullYear();





document.getElementById('datum').innerHTML = formatDate;