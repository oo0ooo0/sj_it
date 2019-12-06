$(function(){
    // $("#gnbMenu>li>a").on("click", function(){
    //     console.log("click");
    // });
    $("#gnbMenu>li").on("mouseover", function(){
        // console.log("mouseover");
        // console.log(this);
        // console.log($(this));
        // console.log($(this).children(".subMenu"));
        // $(this).children(".subMenu").css("display", "block");
        $(this).children(".subMenu").stop().fadeIn();
    });
    $("#gnbMenu>li").on("mouseout", function(){
        // $(this).children(".subMenu").css("display", "none");
        $(this).children(".subMenu").stop().fadeOut();
    });
    // $("#menu1").on("mouseover", function(){
    //     $("#menu1>.subMenu").stop().fadeIn();
    // });
    // $("#menu1").on("mouseout", function(){
    //     $("#menu1>.subMenu").stop().fadeOut();
    // });
});