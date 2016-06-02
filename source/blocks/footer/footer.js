// .footer scripts goes here
function footerCheck() {

  let footer = $(".footer");

  if ($(".footer").length) {

    footer
      .removeClass('footer--sticked');

    let isFooterAbove = footer.offset().top + footer.height() <= $(window).height();


    isFooterAbove ? footer.addClass('footer--sticked') : '';
    
  }
  


}

footerCheck()

$(window).resize(() => {
  footerCheck();
})