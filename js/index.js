function myFunction() {
  var earth = document.getElementById("earth");
  var mars = document.getElementById("mars");

  var x = document.getElementById("title");
  if (x.innerHTML === "Earth") {
    x.innerHTML = "Mars";
    mars.style.display = "block";

    earth.style.display = "none";
  } else {
    x.innerHTML = "Earth";
    earth.style.display = "block";
    mars.style.display = "none";
  }
}