setInterval(function(){
	var date = new Date();
	updateKlok(date);
}, 1000);

function updateKlok(date){
	var hrsWijzer =
	document.getElementById("hrs-wijzer").style;
	var minWijzer =
	document.getElementById("min-wijzer").style;
	var secWijzer =
	document.getElementById("sec-wijzer").style;

	hrsWijzer.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
	secWijzer.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
	minWijzer.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
	
}
