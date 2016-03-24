function initSlider() {

	var
		mainSlider   = $("#mainSlider"),
		sliderImages = $(".main-slider__item-image img");

	sliderImages.each(function() {
		var src = $(this).attr("src");

		$(this).parent().css("background", "transparent url('" + src + "') no-repeat center");
		$(this).remove();
	});

	mainSlider.flickity({
		wrapAround     : true,
		prevNextButtons: false,
		cellSelector   : '.main-slider__item'
	});


}

function destroySlider() {
	var mainSlider = $("#mainSlider");

	mainSlider.flickity('destroy');
}