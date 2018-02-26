var curr = 0;
var planet = [
	"placeholder",
	{
		name: "Earth",
		url:
			"https://blogs.agu.org/wildwildscience/files/2012/03/VIIRS.8Feb2012.30S145E-web.png",
		mass: 5.972 * Math.pow(10, 24),
		info:
			"One thing that makes Earth habitable and that many other planets don't have is water. Water is essential to life, without it we'd (all earth species) would be dead"
	},
	{
		name: "Mars",
		url: "https://openclipart.org/image/2400px/svg_to_png/247374/Mars.png",
		mass: 6.39 * Math.pow(10, 23),
		info: ""
	},

	{
		name: "Kepler 20F",
		url: "http://www.exoplanetkyoto.org/exohtml/Planets/HotEarth.bmp",
		mass: 1.0152723 * Math.pow(10, 25),
		info:"Kepler 20f is the most similar to earth in terms of size, however it is too close to it's host star to be habitable."
	},
	{
		name: "Gliese 581g",
		url:
			"https://upload.wikimedia.org/wikipedia/commons/6/6e/TerraformedMarsGlobeRealistic.jpg",
		info:
			"Gliese 581g, a potentially habitable planet, shares many things in common with the earth. It has 37 days in  a month, quite close to 30, as well as being the right distance from the sun, possibly allowing for water",
		mass: 5.972 * 3.5 * Math.pow(10, 24) + "<i> approx.</i>"
	}
];

window.addEventListener('click', function (evt) {
    if (evt.detail === 3) {
	content.style="visibility: hidden";
attrb.innerHTML="<b>Sources</b> <br> NASA <br> Space.org <br> Solar System Quick"
		}
});
var title = document.getElementById("title");
var info = document.getElementById("info");
var mass = document.getElementById("mass");
var content = document.getElementById("text");
var attrb = document.getElementById("attrb");

function changePlanet() {
	var activePlanet = planet[next(planet)];
	document.getElementById("planet").src = activePlanet.url;
	info.innerHTML = activePlanet.info;

	title.innerHTML = activePlanet.name;
	mass.innerHTML = "Mass: " + activePlanet.mass;
}
function next(x) {
	if (curr >= x.length) {
		curr = 1;
		return curr;
	} else {
		curr = curr + 1;
		return curr;
	}
}

//Moves from placeholder to 1st planet
changePlanet();