$(function(){
    $("#gnbMenu>li").mouseover(function(){
        // $(this).children(".subMenu").stop().fadeIn();
        $(this).children(".subMenu").stop().slideDown();
        console.log($(this).children()[0]);
       $($(this).children()[0]).css("border-bottom", "4px solid darkorchid");
    });
    $("#gnbMenu>li").mouseout(function(){
        // $(this).children(".subMenu").stop().fadeOut();
        $(this).children(".subMenu").stop().slideUp();
        $($(this).children()[0]).css("border-bottom", "none");
    });
});