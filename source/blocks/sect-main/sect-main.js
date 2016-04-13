function initOPS() {
    var opsOpts = {
        easing: "cubic-bezier(.8,0,.2,1)",
        pagination: true
    };

    if ( $(window).width() < 768 ) {

        opsOpts = {
            easing: "linear",
            pagination: true
        }

    }

    onePageScroll(".mainOnePage", {
        easing: opsOpts.easing,
        animationTime: 1000,
        pagination: opsOpts.pagination,
        updateURL: false,
        beforeMove: function(index) {setMenuActive(index);},
        afterMove: function(index) {},
        loop: false,
        keyboard: true
    });
}

function OPSGoTo(index) {
    moveTo(".mainOnePage", index);
}

$(".header__logo").on('click', () => OPSGoTo(1));
