function initTeamSlider() {

	let
		teamContainer = $(".team__container"),
		teammate      = $(".teammate"),
		arNext        = $(".team__slide-arrow.right"),
		arPrev        = $(".team__slide-arrow.left");
		
	$(".teammate:eq(0)")
		.addClass("active");

	$(".teammate__desc:eq(0)")
		.addClass("active");


	let
		flickRes = teamContainer.flickity({
			cellSelector: '.teammate',
			wrapAround  : true,
			draggable   : false,
			pageDots    : false,
			prevNextButtons: false
		});


	teammate
		.on('click', function() {
			selectTeammate( $(this).index() );
		});


	arPrev
		.on('click', () => {
			teamContainer.flickity('previous');
		});


	arNext
		.on('click', () => {
			teamContainer.flickity('next');
		});



	flickRes.on( 'cellSelect', () => {

		if (flickRes) {
			$(".teammate").removeClass("active");

			flickRes.data('flickity').selectedElement.className = "teammate active";

			var ind = $(".teammate.active").index();

			$(".teammate__desc")
				.removeClass("active");

			$(".teammate__desc:eq(" + ind + ")")
				.addClass("active");
		}

	});


	// Select teammate item by index
	function selectTeammate(index) {
		teamContainer
			.flickity('select', index);

		$(".teammate")
			.removeClass("active");

		$(".teammate__desc")
			.removeClass("active");
		

		$(".teammate:eq(" + index + ")")
			.addClass("active");

		$(".teammate__desc:eq(" + index + ")")
			.addClass("active");
	}
}

