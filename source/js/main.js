var isLoading = true;
var isMain = $(".main-slider").length == true;
var mainSections = ['#index', '#incubator', '#events', '#residents', '#contact'];
var currentSection = 0;

$(document).ready( function() {

	if (isMain) {

		setLinksPreload();
		initMenu();
		hideAllSections();

	}

});


$(window).load( function() {

	if (isMain) {

		var hash = window.location.hash;

		hash !== '' ?
			switchToSection(hash) :
			mainShowSection("#index");

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


// function hideAllSections() {
// 	$(".sect-main").hide();
// }


// function mainHideSection(id) {
// 	$(id).hide().removeClass("showSection");
// }


// function mainShowSection(id) {

// 	$(id).show().addClass("showSection");

// 	id !== "#index" ? destroySlider() : initSlider();

// }


// function switchToSection(id) {

// 	if (isMain) {

// 		isLoading = true;

// 		enablePreload();

// 		setTimeout(function() {
		
// 			hideAllSections();
// 			mainShowSection(id);
// 			disablePreload();

// 			isLoading = false;

// 		}, 1000);

// 	}
// }