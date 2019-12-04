$(function () {
    $("#gnbMenu>li").mouseover(function () {
        console.log("mouseover");
        $(this).children(".subMenu").stop().slideDown();
        // $(this).children(".subMenu").stop().fadeIn();

        $($(this).children()[0]).css("color", "#d05c54");
        $($(this).children()[0]).css("border-bottom", "3px solid #d05c54");
    });
    $("#gnbMenu>li").mouseout(function () {
        console.log("mouseout");
        $(this).children(".subMenu").stop().slideUp();
        // $(this).children(".subMenu").stop().fadeOut();
        
        $($(this).children()[0]).css("color", "#333");
        $($(this).children()[0]).css("border-bottom", "none");
    });
});