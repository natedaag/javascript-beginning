	function getRandomColor(){
		var color = "#";
		var letters = '0123456789ABCDEF'.split("");
		for (var i = 0; i < 6; i++){
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	var start = new Date().getTime();

	function makeShapeAppear(){
		var top = Math.random() * 300;
		var left = Math.random() * 400;
		var width = (Math.random() * 300) + 100; 
		if(Math.random() > 0.5){
			document.getElementById("shape").style.borderRadius = "50%";
		} else {
			document.getElementById("shape").style.borderRadius = 0;
		}
		document.getElementById("shape").style.backgroundColor = getRandomColor();
		document.getElementById("shape").style.width = width + "px";
		document.getElementById("shape").style.height = width + "px";
		document.getElementById("shape").style.left = left + "px";
		document.getElementById("shape").style.top = top + "px";
		document.getElementById("shape").style.display = "block";
		start = new Date().getTime();
		}
		function appearAfterDelay(){
			setTimeout(makeShapeAppear, Math.random() * 1000);
		}
		appearAfterDelay();
		var timeElapsedLog = [];
		document.getElementById("shape").onclick = function(){
			document.getElementById("shape").style.display = "none";
			var end = new Date().getTime();
			var timeTaken = (end - start) / 1000;
			document.getElementById("timeTaken").innerHTML = timeTaken + "secs";
			appearAfterDelay();
			timeElapsedLog.push(timeTaken);
			document.getElementById("bestTime").innerHTML = timeElapsedLog.sort()[0] + "s";
		}
					
		