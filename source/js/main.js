$(document).ready( function() {

    setLinksPreload();

    if ( $(".main-slider").length ) {

        if ( $(window).width() > 600 ) {

            onePageScroll(".mainOnePage", {
                easing: "cubic-bezier(.8,0,.2,1)",
                animationTime: 1000,
                pagination: false,
                updateURL: false,
                beforeMove: function(index) {},
                afterMove: function(index) {},
                loop: false,
                keyboard: true
            });

        }

        initMainResSlider();
        initSlider();
    }

});


$(window).load( function() {

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
