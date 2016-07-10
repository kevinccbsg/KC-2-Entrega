(function () {
	var a = $('.navbar-list .navbar-item');
	var sectionAboutMe = $('#about');
	var navbar = $('.navbar');
	a.on('click', function(ev) {
		var hashIdGo = this.children[0].hash;

		var targetToGo = hashIdGo.length != null ? $(hashIdGo) : "no hash";
		ev.preventDefault();
		a.each(function (i, value) {
			value.className = 'navbar-item';
		});
		this.className += ' active';

		$('html, body').animate({
			scrollTop: targetToGo[0].offsetTop
		});
	});
	$(document).on('scroll', function (ev) {
		console.log($(document).position().top);
	});
})($)