$(function(){
    $("#pageTop").click(function(){
        // $(window).scrollTop(0);
        $("html, body").animate({scrollTop:0},500);
    });

    // $(window).scrollTop(200);
    // console.log($(window).scrollTop());
    $(window).scroll(function(){
        console.log("scroll");
        if($(window).scrollTop() > 200){
            // $("#pageTop").css("visibility", "visible");
            $("#pageTop").css("bottom", "100px");
        } else {
            $("#pageTop").css("bottom", "-50px");
            // $("#pageTop").css("visibility", "hidden");
        }
    });
});