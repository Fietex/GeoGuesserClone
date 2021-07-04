let score = 0;
let panorama;

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
		{ city: "berlin" },
		52.43012294433922,
		52.59177094827171,
		13.252386952839123,
		13.561571886041888,
	],
];

function initialize() {
	getNewLocation();
}

function getNewLocation() {
	let currentCity = citybox[Math.floor(Math.random() * citybox.length)];
	let latMin = currentCity[1];
	let latMax = currentCity[2];
	let lngMin = currentCity[3];
	let lngMax = currentCity[4];
	let lat = Math.random() * (latMax - latMin) + latMin;
	let lng = Math.random() * (lngMax - lngMin) + lngMin;
	let cordinates = { lat: lat, lng: lng };
	
	var streetViewService = new google.maps.StreetViewService();
	var STREETVIEW_MAX_DISTANCE = 50;
	var latLng = new google.maps.LatLng(lat, lng);
	streetViewService.getPanoramaByLocation(latLng, STREETVIEW_MAX_DISTANCE, function (streetViewPanoramaData, status) {
		if (status === google.maps.StreetViewStatus.OK) {
			panorama = new google.maps.StreetViewPanorama(
				document.getElementById("street-view"),
				{
					position: cordinates,
					pov: { heading: 165, pitch: 0 },
					zoom: 1,
				}
			);
		} else {
		}
	});

	
}



https://maps.googleapis.com/maps/api/streetview/metadata?key=AIzaSyDQ6sVlXRmMu4-834cDqNrWTRvBtF8y&location=(lat,lng)




function validate(e) {
	if (e.code === "Enter") {
		//checks whether the pressed key is "Enter"
		var text = e.target.value;

		if (text.toLowerCase() == currentCity[0].city) {
			score++;
			alert("Correct! Current Scrore " + score);
			getNewLocation();
		} else guessIsWrong();
	}
	//validation of the input...
}

function guessIsRight() {
	score++;
	alert("Correct! Current Scrore " + score);
}

function guessIsWrong() {
	score = 0;
	alert("Wrong! Your score is set to 0");
	getNewLocation();
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
