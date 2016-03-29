function initMenu() {
	var menuItems = $(".menu__link");




	menuItems.on('click', function(e) {
        var index = $(this).parent().index() + 1;

		if (isMain) {
			e.preventDefault();

            currentSection = index;

			var link = $(this).data("name");

			menuItems.removeClass("menu__link--active");

			$(this).addClass("menu__link--active");

			switchToSection(link);
		}
	});




	$(".header__logo").on('click', function(e) {

		if (isMain) {

			e.preventDefault();

			menuItems.removeClass("menu__link--active");

			var link = $(this).children("a").data("name");

			switchToSection(link);
		}

	});
}

function setMenuActive(id) {
	var menuItems = $(".menu__link");

	var curMenuItem = $(".menu__link[data-name='" + id + "']");

	menuItems.removeClass("menu__link--active");

	curMenuItem.addClass("menu__link--active");
}
