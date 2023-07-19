$(".speiseplanFilter span").on("click", function () {
    var currentClick = this.getAttribute("data-categ");
    $(".speiseplanFilter span").removeClass('active');
    $(this).addClass('active');
    console.log("Current Click: " + currentClick);
    $(".cardsList .card").each(function (index) {
        if (currentClick == "*") {
            $(this).show();
        } else {
            if (currentClick == this.getAttribute("data-categ")) {
                $(this).slideDown();
            } else {
                $(this).slideUp();
            }
        }
    });
});

$(".card-action-plus").on("click", function () {
    $(this).parent().parent().parent().find('.card-body-description').slideDown();
});
