function initMainResSlider() {

	var
        mainResSlider = $("#mainResidentsSlider"),
        startProject  = $(".main-residents__slider-item").first().data("project"),
        startName     = $(".main-residents__slider-item").first().data("name");

	setMainHeaderState("#mainResHeader", startProject, startName);

	var flickRes = mainResSlider.flickity({
		wrapAround:      true,
		prevNextButtons: false,

		cellSelector:    ".main-residents__slider-item"
	});

    $(".main-residents__arrow.left").on('click', () => {
        mainResSlider.flickity('previous');
    });

    $(".main-residents__arrow.right").on('click', () => {
        mainResSlider.flickity('next');
    });

	flickRes.on( 'cellSelect', () => {

		if (flickRes) {
			var curProject = flickRes.data('flickity').selectedElement.dataset.project;
			var curName    = flickRes.data('flickity').selectedElement.dataset.name;

			setMainHeaderState("#mainResHeader", curProject, curName);
		}

	});
}


var resSliderPhoto = $(".main-residents__slider-photo img")

resSliderPhoto.each( () => {
	var src = $(this).attr("src");

	$(this).parent().css("background", `transparent url('${src}') no-repeat center`);
	$(this).remove();
});
