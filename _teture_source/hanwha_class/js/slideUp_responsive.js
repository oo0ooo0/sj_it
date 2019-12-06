$(function () {
    var totalNum = 5;
    if ($(window).width() < 900) {
        for (var i = 1; i <= totalNum; i++) {
            $("#pic" + i + " img").attr("src", "img/vis_" + i + "_m.jpg");
        }
    } else {
        for (var i = 1; i <= totalNum; i++) {
            $("#pic" + i + " img").attr("src", "img/vis_" + i + "_d.jpg");
        }
    }
});


window.onload = function () {
    var currentNum = 1;
    var index = 0;
    var totalNum = 5;
    var picWidth = $(window).width();
    var slideMenuWidth;

    function slideMenuSetting(){
        if ($(window).width() < 900) {
            slideMenuWidth = 50;
            $(".slideMenu").css("width", "50px")
            $(".slideList").css("display", "none")
        } else {
            slideMenuWidth = 200;
            $(".slideMenu").css("width", "200px")
            $(".slideList").css("display", "inline-block")
        }
        $(".slideMenu").css("right", -picWidth + slideMenuWidth);
    }
    slideMenuSetting();

    function picSetting() {
        $("h2").text("윈도우: " + picWidth + "/슬라이드메뉴: " + slideMenuWidth );
        $("#totalSet").css("width", picWidth);
        $(".pic img").css("width", picWidth);
        $("#picSet").css("width", picWidth);
        $("#picSet").css("height", $(".pic").height());
        $("#totalSet").css("height", $(".pic").height());
    }
    picSetting();

    $(window).resize(function () {
        console.log($(window).width());
        if ($(window).width() < 900) {
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
        picWidth = $(window).width();
        slideMenuSetting();
        picSetting();
    });

    $(".pic").css("display", "none");
    $("#pic" + currentNum).css("display", "block");

    $("#slideMenu" + currentNum).css("background-color", "white");
    $("#slideMenu" + currentNum).css("color", "orangered");

    var prevNum = null;

    function slideImageDown() {
        console.log("ing");
        console.log(prevNum);
        if (prevNum != null) {
            console.log("ok");
            $("#pic" + prevNum).css("display", "none");
            prevNum = null;
        }
        if (currentNum == 1) {
            $("#pic5").css("display", "none");
        } else {
            $("#pic" + (currentNum - 1)).css("display", "none");
        }
        if (currentNum == totalNum) {
            currentNum = 1;
        } else {
            currentNum++;
        }

        index++;
        $("#pic" + currentNum).css("z-index", index);
        $("#pic" + currentNum).slideDown("slow");

        // $(".slideMenu").css("z-index", ++index);
        // $(".slideMenu").css("border", "1px solid rgba(0, 0, 0, 0.5)");
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
            $(".pic").css("display", "none");
            $("#pic" + currentNum).css("display", "block");

            prevNum = currentNum;
            currentNum = this.id.slice(9, 10);
            console.log("현재번호" + currentNum);
            console.log("이전번호" + prevNum);

            index++;
            $("#pic" + currentNum).css("z-index", index);
            $("#pic" + currentNum).slideDown("slow");

            $(".slideMenu").css("background-color", "rgba(0,0,0,0.5)");
            $(".slideMenu").css("color", "white");
            $("#slideMenu" + currentNum).css("background-color", "white");
            $("#slideMenu" + currentNum).css("color", "orangered");
            slideSetInterval = setInterval(slideImageDown, 5000);
        });
    }
};