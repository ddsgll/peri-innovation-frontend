function setMenuActive(i) {

    $(".menu__link")
      .removeClass("menu__link--active");

    if (i >= 2) {
        var curLink = $(`.menu__link:eq(${i-2})`);

        curLink.addClass("menu__link--active");
    }

}

$(".menu__link").on('click', function() {
    var index = $(this).parent().index();
    OPSGoTo(index + 2);
});

$(".mobile-menu__link").on('click', function() {
    var index = $(this).parent().index();

    $(".mobile-menu")
      .removeClass("active")
      .find('.mobile-menu__burger')
        .removeClass('active');

    OPSGoTo(index);
});

var burger = $(".mobile-menu__burger");

burger
  .on('click', function() {

    $(this)
      .toggleClass('active')
      .parent()
        .toggleClass('active');

  });
