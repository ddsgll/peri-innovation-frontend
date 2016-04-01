var eventPrevImg = $(".event-preview img")

eventPrevImg.each(function() {
	var src = $(this).attr("src");

	$(this).parent().css("background", "transparent url('" + src + "') no-repeat center");
	$(this).remove();
});