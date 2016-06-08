// .mentor scripts goes here
function initMentorSlider() {

	let
		isMoreThanThree = $(".mentor").length > 3,
		isDesctop       = window.innerWidth >= 768;

	let
		slider = $("#mentorSlider"),
		next   = $(".mentor__slide-arrow.right"),
		prev   = $(".mentor__slide-arrow.left");

	if ( isDesctop ) {
		
		slider.flickity({
			wrapAround     : isMoreThanThree,
			prevNextButtons: false,
			setGallerySize : false,
			contain        : true,
			cellSelector   : '.mentor'
		});

		prev.on('click', e => slider.flickity('previous')	);
		next.on('click', e => slider.flickity('next') );

	}

	else {

		slider.flickity({
			wrapAround     : true,
			prevNextButtons: false,
			setGallerySize : false,
			contain        : true,
			pageDots			 : false,
			cellSelector   : '.mentor'
		});

		prev.on('click', e => slider.flickity('previous')	);
		next.on('click', e => slider.flickity('next') );

	}

}