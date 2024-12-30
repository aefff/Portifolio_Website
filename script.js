var thisDocument = document.title
var revealed = false;

if (document.title === 'Landing in process') {
	const landingText = document.getElementById('landing');

	function addExtra() {
		if (!revealed) {landingText.textContent += '.';}
	}

	function removeLast() {
		if (!revealed) {landingText.textContent = landingText.textContent.slice(0, -1);}
	}

	// A single cycle: add dots for 2.5s, then remove them for 2.5s
	function cycle() {
		if (!revealed) {
			for (let i = 0; i < 5; i++) {
				setTimeout(addExtra, i * 500);
			}
			for (let i = 0; i < 5; i++) {
				setTimeout(removeLast, (5 + i) * 500);
			}
		}
	}

	// Re-run the cycle every 5 seconds *by chaining* a setTimeout
	function runCycle() {
		if (!revealed) {
			cycle();
			setTimeout(runCycle, 5000);
			// Schedule the next cycle to begin 5s from now
		}
	}

	// Start the first cycle
	runCycle();
}


if (localStorage.getItem('backgroundValue')) {
	const savedValue = localStorage.getItem('backgroundValue');
	setBackground(savedValue);
}

function setBackground(value) {
	document.body.style.backgroundPosition = 'center';
	document.body.style.backgroundRepeat = 'no-repeat';
	document.body.style.backgroundSize = 'cover';
	document.body.style.backgroundAttachment = 'fixed';
	var elements = document.getElementsByClassName('cont');
	if (value === '1') {
		document.body.style.backgroundColor = '#FFB347';
		document.body.style.backgroundImage = "url('Images/AUS.jpeg')";
		const radioButton = document.getElementById('rad1');
		radioButton.checked = true;
		for(var i = 0; i < elements.length; i++) {
			elements[i].style.backgroundColor = 'rgba(255, 94, 83, 0.5)';
		}
	} else if (value === '2') {
		document.body.style.backgroundColor = '#F7BE6D';
		document.body.style.backgroundImage = "url('Images/ARB.jpeg')";
		const radioButton = document.getElementById('rad2');
		radioButton.checked = true;
		for(var i = 0; i < elements.length; i++) {
			elements[i].style.backgroundColor = 'rgba(244, 164, 96, 0.5)';
		}
	} else if (value === '3') {
		document.body.style.backgroundColor = '#00c04b';
		document.body.style.backgroundImage = "url('Images/JUN.jpeg')";
		const radioButton = document.getElementById('rad3');
		radioButton.checked = true;
		for(var i = 0; i < elements.length; i++) {
			elements[i].style.backgroundColor = 'rgba(189, 189, 189, 0.5)';
		}
	}

	// Save the background value to local storage
	localStorage.setItem('backgroundValue', value);
}

function handleClick() {
	const value = document.querySelector('.in:checked').value;
	setBackground(value);
}

function checkTitleChange() {
	if (thisDocument !== document.title) {
		handleClick();
	}
}

var lastScroll = 0;

function reveal() {
	var reveals = document.querySelectorAll(".reveal");
	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 150;

		if (elementTop < windowHeight - elementVisible) {
			if (document.body.scrollTop > lastScroll || document.documentElement.scrollTop > lastScroll) {
				reveals[i].classList.add("active");
				revealed = true;
				document.title = "Welcome to my portfolio";
				document.getElementById('landing').textContent = "Welcome to my portfolio";
			}
		} else {
			reveals[i].classList.remove("active");
		}
	}
	lastScroll = document.body.scrollTop || document.documentElement.scrollTop;
}


window.addEventListener('scroll', reveal);
reveal();

checkTitleChange();