// 100% Sure-Proof.
// Also just really atrocious code.



// event listening...
document.addEventListener('keyup', konami_collect);

// ordered key codes that represent the Konami Code
// UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A
var a = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

// index of progress of Konami Code entry
var i = 0;

// function to collect key presses for the Konami Code:
function konami_collect(e) {
	// pressing the correct key updates progress
	// an incorrect key resets progress
	e.keyCode == a[i] ? i++ : i = 0;
	
	// upon completion of Konami Code entry, do something
	i == 10 && konami_execute();
}

// function run when the Konami Code is entered:
function konami_execute() {
	setInterval(rave, 25);
}

// function to do crazy shit:
function rave() {
	// color defined with HSL rather than RGB so that "intensity" (or whatever
	// the appropriate term is) appears more consistant
	var color = 'hsl(' + Math.floor(Math.random() * 360) + ', 100%, 50%)';
	document.body.style.backgroundColor = color;
}
