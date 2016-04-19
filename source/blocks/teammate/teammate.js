$(".teammate:eq(0)")
	.addClass("active");

$(".teammate__desc:eq(0)")
	.addClass("active");


$(".teammate")
	.on('click', function() {


		$(".teammate")
			.removeClass("active");
		
		$(this)
			.addClass("active");

		let index = $(this).index();

		$(".teammate__desc")
			.removeClass("active");

		$(".teammate__desc:eq(" + index + ")")
			.addClass("active");

		var scrollSpeed = window.innerWidth > 768 ? 0 : 400;


		$("body,html")
			.animate({
				scrollTop: $(".teammate__desc").offset().top
				}, scrollSpeed);
	});