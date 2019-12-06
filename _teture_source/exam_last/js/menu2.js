$(function () {
    $("#menu2").hover(function () {
        console.log("hover");
        $("#subMenu2").fadeIn();
        $("#menu2>a").css("color", "#d05c54");
        $("#menu2>a").css("border-bottom", "3px solid #d05c54");
    },
        function () {
            console.log("hover out");
            $("#subMenu2").fadeOut();
            $("#menu2>a").css("color", "#333");
            $("#menu2>a").css("border-bottom", "none");
        });

    $("#menu3").hover(function () {
        console.log("hover");
        $("#subMenu3").fadeIn();
        $("#menu3>a").css("color", "#d05c54");
        $("#menu3>a").css("border-bottom", "3px solid #d05c54");
    },
        function () {
            console.log("hover out");
            $("#subMenu3").fadeOut();
            $("#menu3>a").css("color", "#333");
            $("#menu3>a").css("border-bottom", "none");
        });

    $("#menu4").hover(function () {
        console.log("hover");
        $("#subMenu4").fadeIn();
        $("#menu4>a").css("color", "#d05c54");
        $("#menu4>a").css("border-bottom", "3px solid #d05c54");
    },
        function () {
            console.log("hover out");
            $("#subMenu4").fadeOut();
            $("#menu4>a").css("color", "#333");
            $("#menu4>a").css("border-bottom", "none");
        });

    $("#menu5").hover(function () {
        console.log("hover");
        $("#subMenu5").fadeIn();
        $("#menu5>a").css("color", "#d05c54");
        $("#menu5>a").css("border-bottom", "3px solid #d05c54");
    },
        function () {
            console.log("hover out");
            $("#subMenu5").fadeOut();
            $("#menu5>a").css("color", "#333");
            $("#menu5>a").css("border-bottom", "none");
        });
});