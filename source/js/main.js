$(document).ready( function() {

    let isMainPage         = $(".main-slider").length;
    let isThereTeamBlock   = (".team__container").length;
    let isThereMentorBlock = $("#mentorSlider").length;
    let isNotMobile        = $(window).width() > 767;

    setLinksPreload();

    if ( isMainPage ) {
        isNotMobile ? initOPS() : '';
        initMainResSlider();
        initSlider();
    }

    isThereTeamBlock   ? initTeamSlider()   : '';
    isThereMentorBlock ? initMentorSlider() : '';

    initTabber();

});


$(window).load(disablePreload);


function setLinksPreload() {

	$('a:not(.ops_link)').on('click', function(e) {

		e.preventDefault();

		let link = $(this).attr("href");

		enablePreload();

		setTimeout( function() { window.location.href = link }, 1000);
    });
}
