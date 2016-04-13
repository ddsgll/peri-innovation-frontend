var sectHeaderImg = $(".sect-header img")

sectHeaderImg.each( function() {
    var src = $(this).attr("src");

    $(this).parent().css("background", `transparent url('${src}') no-repeat center`);
    $(this).remove();
});

// Устанавливаем заголовок и описание у выбранной шапки
function setMainHeaderState(selector, title, description) {

    var
        curHead  = $(selector),
        curTitle = curHead.find("h1"),
        curDesc  = curHead.find("span");


    curTitle.fadeOut(400, function () {
        title !== undefined ? $(this).text(title).fadeIn(400) : '';
    });


    curDesc.fadeOut(600, function () {
        description !== undefined ? $(this).text(description).fadeIn(600) : '';
    });

}
