function setDisabledNavbarItem(elem) {
	elem.each(function (i, value) {
		value.className = 'navbar-item';
	});
}
function initialCompare (offset, about, navbar) {
	var initialScrollToCompare = $(window).scrollTop() + offset;
	if (initialScrollToCompare <= about.offset().top) {
		navbar.css({
			'position': 'absolute',
			'bottom': 0,
			'top': 'auto',
			'background-color': 'rgba(0, 0, 0, 0)'
		});
	}
	else {
		navbar.css({
			'position': 'fixed',
			'bottom': 'auto',
			'z-index': '2',
			'top': 0,
			'background-color': 'rgba(0, 0, 0, 0.75)'
		});
	}
}
(function () {
	var a = $('.navbar-list .navbar-item'),
	sectionAboutMe = $('#about'), 
	sectionStudies = $('#studies'),
	sectionSkills = $('#skills'),
	sectionExperience = $('#experience'),
	sectionHobbies = $('#hobbies'),
	sectionContact = $('#contact'),
	navbar = $('.navbar'),
	barStatus = $('.skills-list .bar > span'),
	offsetScrollSpy = 65,
	hobbieIcon = $('#music-hobbie, #basketball-hobbie'),
	hobbieModalMusic = $('#hobbie-modal-music'),
	hobbieModalBasketball = $('#hobbie-modal-basketball'),
	closeModal = $('#hobbie-modal-basketball .close, #hobbie-modal-music .close')
	sectionTitleModal = $('.modal .section-titles');
	a.on('click', function(ev) {
		var hashIdGo = this.children[0].hash;
		var targetToGo = hashIdGo.length != null ? $(hashIdGo) : "no hash";
		ev.preventDefault();
		setDisabledNavbarItem(a);
		this.className += ' active';

		$('html, body').animate({
			scrollTop: targetToGo[0].offsetTop - 56
		});
	});
	$(document).on('scroll', function (ev) {
		var scrollToCompare = $(window).scrollTop() + offsetScrollSpy;
		if (scrollToCompare <= sectionAboutMe.offset().top) {
			navbar.css({
				'position': 'absolute',
				'bottom': 0,
				'top': 'auto',
				'background-color': 'rgba(0, 0, 0, 0)'
			});
			setDisabledNavbarItem(a);
			a[0].className += ' active';
			sectionAboutMe.addClass('fade-in');
		}
		else if (scrollToCompare <= sectionStudies.offset().top) {
			navbar.css({
				'position': 'fixed',
				'bottom': 'auto',
				'z-index': '2',
				'top': 0,
				'background-color': 'rgba(0, 0, 0, 0.75)'
			});
			setDisabledNavbarItem(a);
			a[1].className += ' active';
			sectionStudies.addClass('fade-in');
		}
		else if (scrollToCompare <= sectionSkills.offset().top) {
			setDisabledNavbarItem(a);
			a[2].className += ' active';
			sectionSkills.addClass('fade-in');
			barStatus.addClass('animate');
		}
		else if (scrollToCompare <= sectionExperience.offset().top) {
			setDisabledNavbarItem(a);
			a[3].className += ' active';
			sectionExperience.addClass('fade-in');
		}
		else if (scrollToCompare <= sectionHobbies.offset().top) {
			setDisabledNavbarItem(a);
			a[4].className += ' active';
			sectionHobbies.addClass('fade-in');
		}
		else if (scrollToCompare <= sectionContact.offset().top) {
			setDisabledNavbarItem(a);
			a[5].className += ' active';
			sectionContact.addClass('fade-in');
		}
		else {
			setDisabledNavbarItem(a);
			a[6].className += ' active';
		}
	});
	hobbieIcon.on('click', function (ev) {
		var currentIdTarget = ev.currentTarget.id;
		if (currentIdTarget === "basketball-hobbie") {
			hobbieModalBasketball.css({
				'display': 'block'
			});
			hobbieModalBasketball.find('video').attr({
				'tric': '.mp4'
			});
			sectionTitleModal.text('My team Pumas Chamartin');
		}
		if (currentIdTarget === "music-hobbie") {
			hobbieModalMusic.css({
				'display': 'block'
			});
			hobbieModalMusic.find('video').attr({
				'src-das': 'v.mp4'
			});
			sectionTitleModal.text('Playing with my band Go The Distance');
		}
	});
	closeModal.on('click', function (ev) {
		hobbieModalBasketball.css({
			'display': 'none'
		});
		hobbieModalMusic.css({
			'display': 'none'
		});
	});
	$(document).keyup(function (ev) {
		if (hobbieModalBasketball.css('display') === 'block' || hobbieModalMusic.css('display')){
			if (ev.keyCode == 27) {
				hobbieModalBasketball.css({
					'display': 'none'
				});
				hobbieModalMusic.css({
					'display': 'none'
				});
			}
		}
	});
	initialCompare (offsetScrollSpy, sectionAboutMe, navbar);
})($)