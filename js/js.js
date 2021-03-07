$(window).scroll(function () {

    if ($(this).scrollTop() >= 700) {

        $("#navbar").addClass("noTransparrent");
    }
    else {
        $("#navbar").removeClass("noTransparrent");
    }

});

$(document).ready(function () {
    $("a.scroll").on("click", function (event) {

        var hash = this.hash;

        $("html,body").animate({ scrollTop: $(hash).offset().top }, 800, function () { });
    });

    $(".timer").countTo();
    $("#commentForm").validate();

});
