function initTabber() {

	let
		tabItem = $(".tabber__tab"),
		tabPane = $(".tabber__panel");

	setTabActive(0);

	tabItem.on('click', function() {
		
		setTabActive( $(this).index() );
		
	});

	function setTabActive(index) {
		tabItem.removeClass("active");
		tabPane.removeClass("active");

		$(".tabber__tab:eq("   + index + ")").addClass("active");
		$(".tabber__panel:eq(" + index + ")").addClass("active");

		footerCheck();
	}

}