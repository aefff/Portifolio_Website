function handleClick() {
	var value = document.querySelector('.in:checked').value;
	document.body.style.backgroundPosition = 'center';
	document.body.style.backgroundRepeat = 'no-repeat';
	document.body.style.backgroundSize = 'cover';
	document.style.backgroundAttachment = 'fixed';
	if (value == '1') {
		document.body.style.backgroundColor = '#FFB347';
		document.body.style.backgroundImage = "url('Images/AUS.jpeg')";
	} else if (value == '2') {
		document.body.style.backgroundColor = '#F7BE6D';
		document.body.style.backgroundImage = "url('Images/ARB.jpeg')";
	} else if (value == '3') {
		document.body.style.backgroundColor = '#00c04b';
		document.body.style.backgroundImage = "url('Images/JUN.jpeg')";
	}
}
