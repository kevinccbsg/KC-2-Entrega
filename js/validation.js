function helperValidity(input, event) {
	if (input != null) {
		input.focus();
		input.style.borderColor = "red";
		event.preventDefault();
	}
	else {
		event.preventDefault();
	}
}
function closeError (blockError) {
	blockError.style.display = 'none';
}
function errorSubmit(message, blockError, textError) {
	blockError.style.display = 'block';
	textError.innerHTML = message;
	setTimeout(function() {
		closeError(blockError);
	}, 3000);
}
(function () {

	var inputName = document.getElementById('contact-name'),
	inputHowKnow = document.getElementsByName('how_know'),
	inputEmail = document.getElementById('contact-email'),
	inputPhone = document.getElementById('contact-number'),
	inputOther = document.getElementById('other_text'),
	inputMessage = document.getElementById('message'),
	formContact = document.getElementById('contact-form'),
	errorBlock = document.querySelector('#error-message.block-content'),
	errorText = document.getElementById('error-text');
	var patternPhone = /\b\d{3}[-.]?\d{3}[-.]?\d{3,4}\b/;
	var patternEmail = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;
	var regExpPhone = new RegExp(patternPhone);
	var regExpEmail = new RegExp(patternEmail);

	for (var i = 0, howKnowLength = inputHowKnow.length; i < howKnowLength; i++) {
		inputHowKnow[i].addEventListener('click', function (ev) {
			if (Modernizr.formvalidation) {
				if (this.value === "other") {
					inputOther.style.display = 'inline-table';
				}
				else {
					inputOther.style.display = 'none';
				}
			} 
			else {
				inputOther.style.display = 'inline-table';
			}
		});
	}

	formContact.addEventListener('submit', function (ev) {
		var textAreaText = inputMessage.value;
		var numberCaracters = textAreaText.split(" ");
		var temporaryVaribleIE = 0;
		if (Modernizr.formvalidation) {
			if (inputName.checkValidity() === false) {
				errorSubmit('Complete name field', errorBlock, errorText);
				helperValidity(inputName, ev);
				return false;
			}
			if (inputEmail.checkValidity() === false) {
				if(inputEmail.validity.typeMismatch === true || inputEmail.validity.patternMismatch == true) {
					errorSubmit('Set up a correct format email', errorBlock, errorText);
					helperValidity(inputEmail, ev);
					return false;
				}
				else {
					errorSubmit('Complete email field', errorBlock, errorText);
					helperValidity(inputEmail, ev);
					return false;
				}
			}
			if (inputPhone.checkValidity() === false) {
				if (inputPhone.validity.patternMismatch == true) {
					errorSubmit('Set up a correct format phone', errorBlock, errorText);
					helperValidity(inputPhone, ev);
					return false;
				}
				else {
					errorSubmit('Complete phone field', errorBlock, errorText);
					helperValidity(inputPhone, ev);
					return false;
				}
			}
			if (inputHowKnow[0].checkValidity() === false) {
				errorSubmit('Please choose one option', errorBlock, errorText);
				helperValidity(inputHowKnow[0], ev);
				return false;
			}
			if (inputHowKnow[3].checked === true) {
				if (inputOther.checkValidity() === false) {
					errorSubmit('Please write how', errorBlock, errorText);
					helperValidity(inputOther, ev);
					return false;
				}
			}
		} 
		else {
			for (var i = 0, howKnowLength = inputHowKnow.length; i < howKnowLength; i++) {
				if(inputHowKnow[i].checked == true) {
					temporaryVaribleIE++;
				}
			}
			if (inputName.value.length == 0) {
				console.log('validaaa');
				errorSubmit('Complete name field', errorBlock, errorText);
				helperValidity(inputName, ev);
				return false;
			}
			if(!regExpEmail.test(inputEmail.value)) {
				errorSubmit('Set up a correct format email', errorBlock, errorText);
				helperValidity(inputEmail, ev);
				return false;
			}
			if(!regExpPhone.test(inputPhone.value)) {
				errorSubmit('Set up a correct format phone', errorBlock, errorText);
				helperValidity(inputPhone, ev);
				return false;
			}
			if (temporaryVaribleIE == 0) {
				errorSubmit('Please choose one option', errorBlock, errorText);
				helperValidity(inputHowKnow[0], ev);
				return false;
			}
		}
		if (numberCaracters.length > 150 ) {
			console.log('entro');
			errorSubmit('Max 150 characters', errorBlock, errorText);
			helperValidity(inputMessage, ev);
			return false;
		}
	});
	inputEmail.addEventListener('keydown', function (ev) {
		if(!regExpEmail.test(this.value)) {
			errorBlock.style.display = 'block';
			errorText.innerHTML = 'Set up a correct format email';
			this.style.borderColor = "red";
		}
		else {
			errorBlock.style.display = 'none';
			this.style.borderColor = '#212121';
		}
	});
	inputPhone.addEventListener('keyup', function (ev) {
		if(!regExpPhone.test(this.value)) {
			errorBlock.style.display = 'block';
			errorText.innerHTML = 'Set up a correct format phone';
			this.style.borderColor = "red";
		}
		else {
			this.style.borderColor = '#212121';
			errorBlock.style.display = 'none';
		}
	});
	inputName.addEventListener('keydown', function (ev) {
		this.style.borderColor = '#212121';
	});
})($)