let score = 0;
let panorama;
let currentCity;
let latMin;
let latMax;
let lngMin;
let lngMax;
let lat;
let lng;
let cordinates;

/*
var places = [
	[{ lat: 52.516303277302335, lng: 13.409019160976294 }, { city: "Berlin" }],
	[{ lat: 52.52063068631438, lng: 13.40064259425929 }, { city: "Berlin" }],
];

let currentPlace = places[Math.floor(Math.random() * places.length)]; //1. get rnd place
let cordinates = currentPlace[0]; //2. get (latlng) of rnd Place
let city = currentPlace[1]; //3. get Name of the rnd City

*/

var citybox = [
	[
		{ city: "berlin" },
		52.43012294433922,
		52.59177094827171,
		13.252386952839123,
		13.561571886041888,
	],
	[
		{ city: "hamburg" },
		53.527744673655484,
		53.60551505626493,
		9.90090844394884,
		10.060337067735812,
	],
];

function initialize() {
	getNewLocation();
}

function getNewLocation() {
	document.getElementById("falseortrueresponse").style.display = "none";
	currentCity = citybox[Math.floor(Math.random() * citybox.length)];
	latMin = currentCity[1];
	latMax = currentCity[2];
	lngMin = currentCity[3];
	lngMax = currentCity[4];
	lat = Math.random() * (latMax - latMin) + latMin;
	lng = Math.random() * (lngMax - lngMin) + lngMin;
	cordinates = { lat: lat, lng: lng };

	var streetViewService = new google.maps.StreetViewService();
	var STREETVIEW_MAX_DISTANCE = 50;
	var latLng = new google.maps.LatLng(lat, lng);
	streetViewService.getPanoramaByLocation(
		latLng,
		STREETVIEW_MAX_DISTANCE,
		function (streetViewPanoramaData, status) {
			if (status === google.maps.StreetViewStatus.OK) {
				panoramaOk = true;
				panorama = new google.maps.StreetViewPanorama(
					document.getElementById("street-view"),
					{
						position: cordinates,
						pov: { heading: 165, pitch: 0 },
						zoom: 1,
					}
				);
			} else {
				console.log("again");
				getNewLocation();
			}
		}
	);
}

function validate(e) {
	if (e.code === "Enter") {
		//checks whether the pressed key is "Enter"
		var text = e.target.value;

		if (text.toLowerCase() == currentCity[0].city) {
			score++;
			document.getElementById("score").innerHTML = "score: " + score;
			trueResponse();
			toggleFalseOrTrueResponseOn();
		} else {
			score = 0;
			falseResponse();
			toggleFalseOrTrueResponseOn();
		}
	}
	//validation of the input...
}

function toggleFalseOrTrueResponseOn() {
	document.getElementById("falseortrueresponse").style.display = "flex";
}
function toggleFalseOrTrueResponseOff() {
	document.getElementById("falseortrueresponse").style.display = "none";
	getNewLocation();
}

function falseResponse() {
	document.getElementById("h3").innerHTML = "Wrong!!!";
	document.getElementById("p").innerHTML = "Your score is set to 0.";
}

function trueResponse() {
	document.getElementById("h3").innerHTML = "Correct!!!";
	document.getElementById("p").innerHTML = "Current Scrore " + score + ".";
}

/*
======================
	How To Play
======================
*/

function toggleHowToPlay() {
	var x = document.getElementById("howtoplay");
	if (x.style.display === "none") {
		x.style.display = "flex";
	} else {
		x.style.display = "none";
	}
}
