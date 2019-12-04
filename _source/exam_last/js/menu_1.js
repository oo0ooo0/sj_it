$(function () {
    $("#gnbMenu>li").hover(function () {
        console.log("hover");
        
        $($(this).children()[1]).fadeIn();
        $($(this).children()[0]).css("color", "#d05c54");
        $($(this).children()[0]).css("border-bottom", "3px solid #d05c54");
    },
        function () {
            console.log("hover out");
            
            $($(this).children()[1]).fadeOut();
            $($(this).children()[0]).css("color", "#333");
            $($(this).children()[0]).css("border-bottom", "none");
        });
});