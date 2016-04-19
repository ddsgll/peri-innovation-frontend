// .mentor scripts goes here

function initMentorSlider() {

	let isMoreThanThree = $(".mentor").length > 3;

	if (window.innerWidth > 768) {
		
		let mentorSlider = $("#mentorSlider").flickity({
			wrapAround:      isMoreThanThree,
			prevNextButtons: false,
			setGallerySize: false,
			contain: true,
			cellSelector: '.mentor'
		});

		$(".mentor__slide-arrow.left").on('click', function() {
			$("#mentorSlider").flickity('previous');
		});


		$(".mentor__slide-arrow.right").on('click', function() {
			$("#mentorSlider").flickity('next');
		});
	}

}

$(document).ready(function() {
	initMentorSlider();
});