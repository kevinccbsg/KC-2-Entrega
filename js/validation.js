(function () {
	/*if (Modernizr.formvalidation) {
		// supported
	} 
	else {
		// not-supported
	}*/

	var inputName = document.getElementById('contact-name'),
	howKnow = document.getElementsByName('how_know'),
	inputEmail = document.getElementById('contact-email'),
	inputPhone = document.getElementById('contact-number'),
	inputOther = document.getElementById('other_text'),
	inputMessage = document.getElementById('message');

	for (var i = 0, howKnowLength = howKnow.length; i < howKnowLength; i++) {
		howKnow[i].addEventListener('click', function (ev) {
			if (this.value === "other") {
				inputOther.style.display = 'inline-table';
			}
			else {
				inputOther.style.display = 'none';
			}
		});
	}

})($)