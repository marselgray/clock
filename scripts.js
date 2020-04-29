// calculate the time
function showTime(){
	let date = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
	date = new Date(date);
	var h = date.getHours(); // 0 - 23
	var m = date.getMinutes(); // 0 - 59

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;

	var time = h + ":" + m;
	
	console.log(time);

	solarObjects(h);

	setTimeout(showTime, 1000);
}

// showTime();


// detemines the position of solar objects
function solarObjects(time){
	if (time > 4 && time < 19) {
		console.log('the sun is up');
	} else {
		console.log('the sun is down');
	}
}