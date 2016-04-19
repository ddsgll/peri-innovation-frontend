//======================================================================
//
// Инициализация библиотеки OnePageScroll
function initOPS() {

    // Настраиваемые параметры плагина
    var opsOpts = {
        easing: "cubic-bezier(.8,0,.2,1)",
        pagination: true
    };


    // Меняем параметры плагина для оптимизации на мобильных
    if ( $(window).width() < 768 ) {

        opsOpts = {
            easing: "linear",
            pagination: true
        }

    }


    // Запуск плагина с настройками
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


// Переход к указанному слайду
function OPSGoTo(index) {
    moveTo(".mainOnePage", index);
}


// При клике по логотипу скроллим в начало страницы
$(".header__logo").on('click', () => OPSGoTo(1));

//
//======================================================================