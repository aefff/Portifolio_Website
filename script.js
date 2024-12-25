var thisDocument = document.title

if (document.title === 'Landing in process') {
	var landingText = document.getElementById('landing');
	
	function addExtra(htmlComp=landingText, extra='.') {
		htmlComp.textContent = htmlComp.textContent.concat(extra);
	}
	
	function removeLast(htmlComp=landingText) {
		htmlComp.textContent = htmlComp.textContent.slice(0, -1);
	}
	
	function repeat(func, times, delay) {
	    for(let i = 0; i < times; i++) {
	        setTimeout(func, i * delay);
	    }
	}
	
	
	repeat(addExtra, 6, 500);
	setTimeout(function() {
		repeat(removeLast, 6, 500);
	}, 3500);
	// Run the functions in a loop every 4 seconds
	setInterval(function() {
	    repeat(addExtra, 6, 500);
	    setTimeout(function() {
	        repeat(removeLast, 6, 500);
	    }, 3500); // Start removing periods after 3.5 seconds
	}, 8000);
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