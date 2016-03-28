var isLoading = true;
var isMain = $(".main-slider").length == true;
var mainSections = ['#index', '#incubator', '#events', '#residents', '#contact'];
var currentSection = 0;

$(document).ready( function() {

	if (isMain) {

		setLinksPreload();
		initMainResSlider();
		initMenu();
		hideAllSections();

	}

});


$(window).load( function() {

	if (isMain) {

		var hash = window.location.hash;

		if (hash !== '') {
			currentSection = mainSections.indexOf(hash);
			switchToSection(hash);
		}

		else {
			mainShowSection("#index");
		}

		disablePreload();
		setSectionsScroll();

		isLoading = false;


	}

});


function setLinksPreload() {

	$('a').on('click', function(e) {

		if (!isLoading) {

			isLoading = true

			e.preventDefault();

			var link = $(this).attr("href");

			enablePreload();

			setTimeout(function() {	window.location.href = link; }, 1000);
		}

	});
}