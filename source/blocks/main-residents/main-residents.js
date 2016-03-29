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
