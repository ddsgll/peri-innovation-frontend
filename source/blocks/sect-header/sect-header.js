var sectHeaderImg = $(".sect-header img")

sectHeaderImg.each(function() {
	var src = $(this).attr("src");

	$(this).parent().css("background", "transparent url('" + src + "') no-repeat center");
	$(this).remove();
});