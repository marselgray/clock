// run functions
showDCTime();
showLondonTime();
showSanFranTime();

// calculate the time in San Francisco
function showSanFranTime(){
	// let date = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
	let date = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
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
function solarObjects(now, el1, el2, el3, el4) {
	hour = now;


	/* new time intervals
	1. night to early morning hour (night colors)    (0, 1, 2, 3, 4)  >= 0 && hour < 5
	2. early morning hour (sunrise colors)           (5, 6, 7, 8)     >= 5 && hour < 9
	3. morning to noon (sky colors)                  (9, 10, 11)  >= 9 && hour < 12
	4. noonish to afternnon (sky colors)             (12, 13, 14, 15 )  >= 12 && hour < 16
	5. evening to sunset (sky colors)                (16, 17)  >= 16 && hour < 18
	6. sunset (sunset colors)                        (18, 19, 20)  >= 18 && hour < 21
	7. evening night (night colors)                  (21, 22, 23)  >= 21 && hour < 24
	*/

	// 0. night to early morning hour (night colors) moon is a hight
	// this is done!
	if (hour >= 0 && hour < 3) {
		timeofdaypercent =  hour;
		timeofdaypercent = (timeofdaypercent / 4) * 100;
		var moonheight = (timeofdaypercent * 2.5) + 50;

		var moon = el1;
		var sun = el2;
		moon.style.top = moonheight + "px";
		sun.style.top = "500px";
		el3.style.background = "#002551";
	}

	// 1. night to early morning hour (night colors) moon is a setting
	// this is done!
	if (hour >= 3 && hour < 5) {
		timeofdaypercent = hour;
		timeofdaypercent = (timeofdaypercent / 4) * 100;
		var moonheight = (timeofdaypercent * 2) + 50;

		var moon = el1;
		var sun = el2;
		moon.style.top = moonheight + "px";
		sun.style.top = "500px";
		el3.style.background = "#002551";
	}

	// 2. early morning hour (sunrise colors) sun is rising
	// this is done!
	if (hour >= 5 && hour < 9) {
		timeofdaypercent = hour;
		timeofdaypercent = 200 - (timeofdaypercent / 5) * 100;
		var sunheight = (timeofdaypercent * 2.9);

		var moon = el1;
		var sun = el2;
		moon.style.top = "500px";
		sun.style.top = sunheight + "px";
		el3.style.background = `linear-gradient(to top, yellow ${hour}0%, red)`;
	}

	// 3. morning to noon (sky colors)
	// this is done
	if (hour >= 9 && hour < 12) {
		timeofdaypercent = hour - 5;
		timeofdaypercent = (timeofdaypercent / 7) * 100;
		var sunheight = 300 - (timeofdaypercent * 2.9);

		var sun = el2;
		var moon = el1;
		sun.style.top = sunheight + "px";
		moon.style.top = "500px";
		el3.style.background  = "#87CEEB";
	}

	// 4. noonish to afternnon (sky colors)
	// this is done
	if (hour >= 12 && hour < 15) {
		timeofdaypercent = hour - 12;
		timeofdaypercent = (timeofdaypercent / 7) * 100;
		var sunheight = (timeofdaypercent * 2.9) + 50;

		var sun = el2;
		var moon = el1;
		sun.style.top = sunheight + "px";
		moon.style.top = "500px";
		el3.style.background  = "#87CEEB";
	}

	// 5. evening to sunset (sky colors)
	// this is done
	if (hour >= 15 && hour < 18) {
		timeofdaypercent = hour - 12;
		timeofdaypercent = (timeofdaypercent / 7) * 100;
		var sunheight = (timeofdaypercent * 2.9);

		var sun = el2;
		var moon = el1;
		sun.style.top = sunheight + "px";
		moon.style.top = "500px";
		el3.style.background  = "#87CEEB";
	}

	// 6. sunset (sunset colors)
	// this is done
	if (hour >= 18 && hour < 20) {
		timeofdaypercent = hour - 12;
		timeofdaypercent = (timeofdaypercent / 7) * 100;
		var sunheight = (timeofdaypercent * 2.9);

		var sun = el2;
		var moon = el1;
		sun.style.top = sunheight + "px";
		moon.style.top = "500px";
		el3.style.background  = "linear-gradient(to top, #58151A, #BC2909, #BA6D09, #71A8EE, #3072EB, #002551, #002551)";
	}

	// 7. early night (night colors)
	// this is done!
	if (hour >= 20 && hour < 22) {
		timeofdaypercent = hour - 20;
		timeofdaypercent = (timeofdaypercent / 5) * 100;
		var moonheight = 200 - (timeofdaypercent * 2.5);

		var moon = el1;
		var sun = el2;
		moon.style.top = moonheight + "px";
		sun.style.top = "500px";
		el3.style.background  = "#002551";
	}

	// 8. night (night colors)
	if (hour >= 22 && hour < 24) {
		// this is done
		timeofdaypercent = hour - 20;
		timeofdaypercent = (timeofdaypercent / 5) * 100;
		var moonheight = 200 - (timeofdaypercent * 2.5) + 50;

		var moon = el1;
		var sun = el2;
		moon.style.top = moonheight + "px";
		sun.style.top = "500px";
		el3.style.background  = "#002551";
	}

}



// only puts stars into solar object container if sun is hidden aka night
let sun = document.getElementsByClassName('solarcontainer--sun');
for (let i = 0; i < sun.length; i++){
	if (sun[i].style.top === '500px'){
		makeStars(sun[i].parentElement);
	}
}


////makes random stars in night sky
function makeStars(element){

	let skyContainer = element;
	let fullWidth = element.clientWidth;
	let fullHeight = element.clientHeight;

	let numOfStars = ~~(Math.random()*50)+20;
	let size = 0;
	let posX = 0;
	let posY = 0;

	for( let i=0; i<numOfStars; i++ ){
		size = ~~(Math.random()*10);
		posX = ~~(Math.random()*fullWidth);
		posY = ~~(Math.random()*fullHeight);
		skyContainer.innerHTML += `<span class="star" style="width: ${size}px; height: ${size}px; top: ${posY}px; left: ${posX}px"></span>`   
	}
}