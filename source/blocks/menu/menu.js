function initMenu() {
	var menuItems = $(".menu__link");




	menuItems.on('click', function(e) {

		if (isMain) {
			e.preventDefault();

			var link = $(this).data("name");

			menuItems.removeClass("menu__link--active");

			$(this).addClass("menu__link--active");

			switchToSection(link);

			document.title = $(this).text() + " | Пери инновации";
		}
	});




	$(".header__logo").on('click', function(e) {

		if (isMain) {

			e.preventDefault();

			menuItems.removeClass("menu__link--active");

			var link = $(this).children("a").data("name");

			switchToSection(link);

			document.title = "Пери инновации"
		}

	});
}