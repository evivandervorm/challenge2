var now = new Date();
var hours = now.getHours();

// change background color
if (hours > 9 && hours < 22){
 document.write ('<body style="background-color: #6ec9f3">');
}

else {
 document.write ('<body style="background-color: #142872">');
}

//change image
		if (hours > 9 && hours < 22){
		document.getElementById("plaatje").style.backgroundImage ="url('img/zon.png')";
		}

		else {
		document.getElementById("plaatje").style.backgroundImage ="url('img/maan.png')";
		}

// klok springt omhoog elk uur 
var sec = now.getSeconds();
		var min = now.getMinutes();
		
		// //COM: seconden die nog over zijn voor de seconde wijzer 12 raakt
		var sec_left = (60 - sec) * 1000;
		 //COM: minuten die nog over zijn voor de minuten wijzer 12 raakt
		var min_left = (60 - min) * 10000;
		//COM: totale tijd die nog over is voordat het een nieuw uur is
		var total_left = min_left + sec_left;
		
		//COM:  timeout om te wachten tot het nieuwe uur
		setTimeout(function(){
		// roep hem voor de eerste keer aan
		myMove();
		//COM: set een interval om elke uur de functie aan te roepen
		setInterval(function(){
	
		//COM: roep functie aan
		 			myMove();
		
			}, 600000);
		
		},total_left);

		function myMove() {
			console.log("move");
		 var elem = document.getElementById("klok");
		 var posUp = 0;
		 var timer = 0
		 var posDown = 100;
		 var id = setInterval(frame, 5);
		 function frame() {
			timer++;
			posDown--;
			posUp++;
		    if (timer == 100) {
		      clearInterval(id);
			  timer = 0
		    }
			else if( timer < 50){
			  elem.style.bottom = posUp + "px";
			}
			else if (timer > 50 ){
		      elem.style.bottom = posDown + "px";
		    }
		  }
		}