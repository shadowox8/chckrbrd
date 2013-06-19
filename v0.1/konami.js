// 100% Sure-Proof.
// Also just really atrocious code.



window.document.onkeyup = func;

var a = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
var i = 0;

// function to collect the key presses:
function func(e) {
	e.keyCode == a[i] ? i++ : i = 0;
	i == 11 ? setInterval("rave()", 25) : null;
}

// function to do crazy shit:
function rave() {
	var color = "#" + Math.floor(Math.random() * 16777216).toString(16);
	document.body.style.backgroundColor = color;
}