function initMainResSlider() {
	var mainResSlider = $("#mainResidentsSlider");

	var startProject = $(".main-residents__slider-item").first().data("project");
	var startName    = $(".main-residents__slider-item").first().data("name");

	setMainHeaderState("#mainResHeader", startProject, startName);

	var flickRes = mainResSlider.flickity({
		wrapAround: true,
		prevNextButtons: false,
		cellSelector: ".main-residents__slider-item"
	});

    $(".main-residents__arrow.left").on('click', function() {
        mainResSlider.flickity('previous')
    });

    $(".main-residents__arrow.right").on('click', function() {
        mainResSlider.flickity('next')
    });

	flickRes.on( 'cellSelect', function() {

		if (flickRes) {
			var curProject = flickRes.data('flickity').selectedElement.dataset.project;
			var curName    = flickRes.data('flickity').selectedElement.dataset.name;

			console.log(curProject, curName);

			setMainHeaderState("#mainResHeader", curProject, curName);
		}

	});
}

function destroyMainResSlider() {
	var mainResSlider = $("#mainResidentsSlider");

	mainResSlider.flickity('destroy');
}


var resSliderPhoto = $(".main-residents__slider-photo img")

resSliderPhoto.each(function() {
	var src = $(this).attr("src");

	$(this).parent().css("background", "transparent url('" + src + "') no-repeat center");
	$(this).remove();
});
