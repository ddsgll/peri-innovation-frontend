$(document).ready( function() {

    let pageIsMain = $(".main-slider").length;
    let isThereTeamBlock = (".team__container").length;
    let isThereMentorBlock = $("#mentorSlider").length;

    setLinksPreload();

    if ( pageIsMain ) {
        initOPS();
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
