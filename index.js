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
		{ city: "Berlin" },
		52.43012294433922,
		52.59177094827171,
		13.252386952839123,
		13.561571886041888,
	],
	[
		{ city: "Berlin" },
		52.43012294433922,
		52.59177094827171,
		13.252386952839123,
		13.561571886041888,
	],
];

let currentCity = citybox[Math.floor(Math.random() * citybox.length)];
let latMin = currentCity[1];
let latMax = currentCity[2];
let lngMin = currentCity[3];
let lngMax = currentCity[4];
let lat = Math.random() * (latMax - latMin) + latMin;
let lng = Math.random() * (lngMax - lngMin) + lngMin;
let cordinates = { lat: lat, lng: lng };
let city = currentCity[0];

function initialize() {
	getNewLocation();
}

function getNewLocation() {
	panorama = new google.maps.StreetViewPanorama(
		document.getElementById("street-view"),
		{
			position: cordinates,
			pov: { heading: 165, pitch: 0 },
			zoom: 1,
		}
	);
}
console.log(city);
function validate(e) {
	if (e.code === "Enter") {
		//checks whether the pressed key is "Enter"
		var text = e.target.value;
		if (text.toLowerCase() == city) {
			console.log(city);
		} else console.log("wrong");
	}
	//validation of the input...
}

//test