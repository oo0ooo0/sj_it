$(function () {
    var totalNum = 5;
    var picWidth = $(window).width();
    var slideMenuWidth;

    if ($(window).width() <= 900) {
        slideMenuWidth = 50;
        for (var i = 1; i <= totalNum; i++) {
            $("#pic" + i + " img").attr("src", "img/vis_" + i + "_m.jpg");
        }
    } else {
        slideMenuWidth = 200;
        for (var i = 1; i <= totalNum; i++) {
            $("#pic" + i + " img").attr("src", "img/vis_" + i + "_d.jpg");
        }
    }
    $(".slideMenu").css("right", -picWidth + slideMenuWidth);
});



window.onload = function () {
    var currentNum = 1;
    var index = 0;
    var totalNum = 5;
    var picWidth;
    var slideMenuWidth;

    function picSetting() {
        picWidth = $(window).width();
        $("#totalSet").css("width", picWidth);
        $(".pic img").css("width", picWidth);
        $("#picSet").css("width", picWidth);
        $("#picSet").css("height", $(".pic").height());
        $("#totalSet").css("height", $(".pic").height());
        $(".slideMenu").css("right", -picWidth + slideMenuWidth);
    }
    picSetting();

    $(window).resize(function () {
        console.log($(window).width());
        picWidth = $(window).width();
        $(".text").css("width", picWidth);
        if ($(window).width() <= 900) {
            slideMenuWidth = 50;
            for (var i = 1; i <= totalNum; i++) {
                $("#pic" + i + " img").attr("src", "img/vis_" + i + "_m.jpg");
            }
        } else {
            slideMenuWidth = 200;
            for (var i = 1; i <= totalNum; i++) {
                $("#pic" + i + " img").attr("src", "img/vis_" + i + "_d.jpg");
            }
        }
        picSetting();
    });

    $(".pic").css("width", "0px");
    $(".pic").css("display", "none");

    $("#pic" + currentNum).css("display", "block");
    $("#pic" + currentNum).css("width", picWidth);

    $("#slideMenu" + currentNum).css("background-color", "white");
    $("#slideMenu" + currentNum).css("color", "orangered");

    var prevNum = null;

    function slideImageDown() {
        console.log("ing");
        console.log(prevNum);
        if (prevNum != null) {
            console.log("ok");
            $(".pic").css("width", "0px");
            $(".pic").css("display", "none");
            prevNum = null;
        }
        if (currentNum == 1) {
            $("#pic5").css("width", "0px");
            $("#pic5").css("display", "none");
        } else {
            $("#pic" + (currentNum - 1)).css("width", "0px");
            $("#pic" + (currentNum - 1)).css("display", "none");
        }
        if (currentNum == totalNum) {
            currentNum = 1;
        } else {
            currentNum++;
        }

        index++;
        $("#pic" + currentNum).css("display", "block");
        $("#pic" + currentNum).css("z-index", index);
        $("#pic" + currentNum).animate({ width: picWidth+ "px" });

        $(".slideMenu").css("background-color", "rgba(0,0,0,0.5)");
        $(".slideMenu").css("color", "white");

        $("#slideMenu" + currentNum).css("background-color", "white");
        $("#slideMenu" + currentNum).css("color", "orangered");
    }
    var slideSetInterval = setInterval(slideImageDown, 5000);

    for (var i = 1; i <= totalNum; i++) {
        $("#slideMenu" + i).mouseover(function () {
            $(this).css("border-left", "15px solid #f37321");
        });
        $("#slideMenu" + i).mouseout(function () {
            $(this).css("border", "none");
        });
        $("#slideMenu" + i).click(function () {
            clearInterval(slideSetInterval);
            
            $(".pic").css("width", "0px");
            $(".pic").css("display", "none");
            $("#pic" + currentNum).css("display", "block");
            $("#pic" + currentNum).css("width", picWidth);

            prevNum = currentNum;
            currentNum = this.id.slice(9, 10);
            console.log("현재번호" + currentNum);
            console.log("이전번호" + prevNum);

            index++;
            $("#pic" + currentNum).css("display", "block");
            $("#pic" + currentNum).css("z-index", index);
            $("#pic" + currentNum).animate({ width: picWidth+ "px" });

            $(".slideMenu").css("background-color", "rgba(0,0,0,0.5)");
            $(".slideMenu").css("color", "white");
            $("#slideMenu" + currentNum).css("background-color", "white");
            $("#slideMenu" + currentNum).css("color", "orangered");
            slideSetInterval = setInterval(slideImageDown, 5000);
        });
    }
};