// run functions
showDCTime();
showLondonTime();
showSanFranTime();

// calculate the time in San Francisco
function showSanFranTime(){
	let date = new Date().toLocaleString("en-US", {timeZone: "Asia/Singapore"});
	// let date = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
	date = new Date(date);
	var h = date.getHours(); // 0 - 23
	var m = date.getMinutes(); // 0 - 59

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;

	var time = h + ":" + m;
	document.getElementById("sanfran-clock").textContent = time;

	solarObjects(h, document.getElementById('moon--west'), document.getElementById('sun--west'), document.getElementById('card--west'));
	
	setTimeout(showSanFranTime, 1000);
}

// calculate the time in DC
function showDCTime(){
	let date = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
	date = new Date(date);
	var h = date.getHours(); // 0 - 23
	var m = date.getMinutes(); // 0 - 59

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;

	var time = h + ":" + m;
	document.getElementById("dc-clock").textContent = time;

	solarObjects(h, document.getElementById('moon--dc'), document.getElementById('sun--dc'), document.getElementById('card--dc'));

	setTimeout(showDCTime, 1000);
}

// calculate the time in London
function showLondonTime(){
	let date = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
	date = new Date(date);
	var h = date.getHours(); // 0 - 23
	var m = date.getMinutes(); // 0 - 59

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;

	var time = h + ":" + m;
	document.getElementById("london-clock").textContent = time;

	solarObjects(h, document.getElementById('moon--london'), document.getElementById('sun--london'), document.getElementById('card--london'));

	setTimeout(showLondonTime, 1000);
}


// determines position of solar objects
// parameters are the current time (now) for that location
// and the 3 elements of moon, sun, and card
function solarObjects(now, el1, el2, el3) {
	hour = now;

	if (hour >= 0 && hour < 5) {
		timeofdaypercent = hour - 0;
		timeofdaypercent = (timeofdaypercent / 4) * 100;
		var moonheight = (timeofdaypercent * 2.5) + 50;

		var moon = el1;
		var sun = el2;
		moon.style.top = moonheight + "px";
		sun.style.top = "500px";
		el3.style.backgroundColor = "#002551";
	}
	if (hour >= 5 && hour < 12) {
		timeofdaypercent = hour - 5;
		timeofdaypercent = (timeofdaypercent / 7) * 100;
		var sunheight = 300 - (timeofdaypercent * 2.9);

		var sun = el2;
		var moon = el1;
		sun.style.top = sunheight + "px";
		moon.style.top = "500px";
		el3.style.backgroundColor  = "#f4c042";
	}
	if (hour >= 12 && hour < 19) {
		timeofdaypercent = hour - 12;
		timeofdaypercent = (timeofdaypercent / 7) * 100;
		var sunheight = (timeofdaypercent * 2.9) + 50;

		var sun = el2;
		var moon = el1;
		sun.style.top = sunheight + "px";
		moon.style.top = "500px";
		el3.style.backgroundColor  = "#f4c042";
	}
	if (hour >= 19 && hour <= 23) {
		timeofdaypercent = hour - 20;
		timeofdaypercent = (timeofdaypercent / 5) * 100;
		var moonheight = 200 - (timeofdaypercent * 2.5) + 50;

		var moon = el1;
		var sun = el2;
		moon.style.top = moonheight + "px";
		sun.style.top = "500px";
		el3.style.backgroundColor  = "#002551";
	}

}

