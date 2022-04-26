var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var copy = document.querySelector(".copiar");

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
};

window.onload = setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function copy_text() {
  var copyText = document.getElementById("result");
  var input = document.createElement("textarea");
  input.value = copyText.textContent;
  document.body.appendChild(input);
  input.select();
  document.execCommand("Copy");
  input.remove();
  alert(input.value);
}
copy.addEventListener('click', copy_text);

