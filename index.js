const color = 300;
const color2 = "300";
let secondColor = "pink";
console.log("secondColor: ", secondColor);

secondColor = "blue";
console.log("after resassign secondColor: ", secondColor);

console.log(document);

const section = document.querySelectorAll(".section");
console.log(section);

const li1 = document.getElementById("listItem1");
li1.innerHTML = "Whatever we want";

const sections = document.getElementsByClassName("section");

sections[0].style.backgroundColor = "red";

sections[0].onclick = function () {
	console.log("inside the click handler");
};

sections[0].onmouseleave = function () {
	sections[0].style.backgroundColor = "green";
};

document.addEventListener(
	"keydown",
	function (event) {
		console.log(event);
		const name = event.key;
		// console.log("key pressed: ", name);
		// var code = event.code;
		if (name === "Escape") {
			sections[0].style.backgroundColor = "pink";
		}
	},
	false
);

const newElement = document.createElement("blockquote");

const newParagraph = document.createElement("p");

newParagraph.innerHTML = "Hello all -Wade";

newElement.appendChild(newParagraph);
document.body.appendChild(newElement);
