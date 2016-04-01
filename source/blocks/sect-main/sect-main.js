// Скролл секций на главной странице
function mainSectionsScroll(e) {
	e = e || window.event;

	var delta = e.deltaY || e.detail || e.wheelDelta;

	if (delta > 140 && !isLoading && isBottom()) {
		isLoading = true;

        if (currentSection !== mainSections.length-1) {
            currentSection++;
            var index = mainSections[ currentSection ];
            setMenuActive(index);
            switchToSection(index);
        }

        else {
            console.log("You're at the end");
        }
	}

	else if (delta < -140 && !isLoading && window.scrollY === 0) {
		isLoading = true;

		if (currentSection !== 0) {
            currentSection--;
            var index = mainSections[ currentSection ];
            setMenuActive(index);
            switchToSection(index);
        }

        else {
            console.log("You're at the start");
        }

	}

	// e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}


// Инициализация скролла на секциях
function setSectionsScroll() {
	var sections = [].slice.call( document.querySelectorAll(".sect-main") );

	sections.forEach(function(el, i) {

		el.addEventListener("wheel", mainSectionsScroll);

	});
}


// Прячем все секции
function hideAllSections() {
	$(".sect-main").hide();
}


// Прячем секцию по id
function mainHideSection(id) {
	$(id).hide();
}


// Показываем секцию по id
function mainShowSection(id) {
	$(id).show().addClass("showSection");

	if (id === "#index")
		initSlider();

	else
		destroySlider();
}


// Переключение на секцию по id
function switchToSection(id) {

	if (isMain) {

		isLoading = true;

		enablePreload();

		setTimeout(function() {

			hideAllSections();
			mainShowSection(id);
			disablePreload();

			isLoading = false;

		}, 500);

	}
}


// Проверка на скролл
function isBottom() {
    var wh  = $(window).height();
    var dh  = $(document).height()
    var scr = window.scrollY;

    console.log(wh,dh,scr);

    return dh === scr + wh;
}
