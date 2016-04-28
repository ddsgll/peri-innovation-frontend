$(document).ready( function() {

    setLinksPreload();

    if ( $(".main-slider").length ) {

        initOPS();
        initMainResSlider();
        initSlider();
    }

    if ( $(".team__container").length ) {
        teamSliderInit();
    }

    initTabber();

});


$(window).load(disablePreload);


function setLinksPreload() {

	$('a:not(.ops_link)').on('click', function(e) {

		e.preventDefault();

		var link = $(this).attr("href");

		enablePreload();

		setTimeout( function() { window.location.href = link }, 1000);
    });
}
