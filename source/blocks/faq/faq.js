// .faq scripts goes here
function initFAQ() {
	let faq = $(".faq")

	faq.on('click', function() {
		faq.removeClass('active');

		$(this)
			.addClass('active');
	})
}

initFAQ();