function teamSliderInit() {
	
	$(".teammate:eq(0)")
		.addClass("active");

	$(".teammate__desc:eq(0)")
		.addClass("active");


	$(".team__container").flickity({
		cellSelector: '.teammate',
		wrapAround: true
	});


	$(".teammate")
		.on('click', function() {

			var tmi = $(this).index();
			$(".team__container").flickity('select', tmi);

			$(".teammate")
				.removeClass("active");
			
			$(this)
				.addClass("active");

			let index = $(this).index();

			$(".teammate__desc")
				.removeClass("active");

			$(".teammate__desc:eq(" + index + ")")
				.addClass("active");

		});

}