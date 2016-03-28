function mainSectionsScroll(e) {
	e = e || window.event;

	var delta = e.deltaY || e.detail || e.wheelDelta;


	if (delta > 140 && !isLoading) {
		isLoading = true;
		currentSection !== mainSections.length-1 ? currentSection++ : console.log("You're at the end");
		var index = mainSections[ currentSection ];
		setMenuActive(index);
		switchToSection(index);
	}

	else if (delta < -140 && !isLoading) {
		isLoading = true;
		currentSection !== 0 ? currentSection-- : console.log("You're at the start");
		var index = mainSections[ currentSection ];
		setMenuActive(index);
		switchToSection(index);
	}

	e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}


function setSectionsScroll() {
	var sections = [].slice.call( document.querySelectorAll(".sect-main") );

	sections.forEach(function(el, i) {

		el.addEventListener("wheel", mainSectionsScroll);

	});
}


function hideAllSections() {
	$(".sect-main").hide();
}


function mainHideSection(id) {
	$(id).hide();
}


function mainShowSection(id) {

	$(id).show().addClass("showSection");

	if (id === "#index") {
		initSlider();
	}

	else {
		destroySlider();
	}

}


function switchToSection(id) {

	if (isMain) {

		isLoading = true;

		enablePreload();

		setTimeout(function() {
		
			hideAllSections();
			mainShowSection(id);
			disablePreload();

			isLoading = false;

		}, 1000);

	}
}