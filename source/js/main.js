$(document).ready( function() {

	setLinksPreload();
	initMenu();
	hideAllSections();

});


$(window).load( function() {

	var hash = window.location.hash;

	if (hash !== undefined && hash !== '')
		switchToSection(hash);
	else
		mainShowSection("#index");

	disablePreload();
});


function setLinksPreload() {

	$('a').on('click', function(e) {
		e.preventDefault();

		var link = $(this).attr("href");

		enablePreload();

		setTimeout(function() {	window.location.href = link; }, 1000);
	});
}

function hideAllSections() {
	$(".sect-main").hide();
}


function mainHideSection(id) {
	$(id).hide();
}


function mainShowSection(id) {

	$(id).show().addClass("showSection");

	id !== "#index" ? destroySlider() : initSlider();

}


function switchToSection(id) {

	enablePreload();

	setTimeout(function() {
	
		hideAllSections();
		mainShowSection(id);
		disablePreload();

	}, 1000);
}