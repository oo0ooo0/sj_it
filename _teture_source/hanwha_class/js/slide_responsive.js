$(function () {
    var moveX = 0;
    var picWidth;
    var speed = 1000;
    // picWidth = 900;
    $("#picSet").css("transition", "transform " + speed / 1000 + "s");

    // 모바일과 데스크탑에 따라 달라지는 이미지
    var mobileSlideImg = function () {
        $("#pic1 img").attr("src", "img/vis_1_m.jpg");
        $("#pic2 img").attr("src", "img/vis_2_m.jpg");
        $("#pic3 img").attr("src", "img/vis_3_m.jpg");
        $("#pic4 img").attr("src", "img/vis_4_m.jpg");
        $("#pic5 img").attr("src", "img/vis_5_m.jpg");

        picWidth = $(window).width();
        $("#totalSet").css("width", picWidth);
        $(".pic img").css("width", picWidth);
        $("#totalSet").css("height", $(".pic img").height());
        $(".pic").css("height", $(".pic img").height());
    }
    var desktopSlideImg = function () {
        $("#pic1 img").attr("src", "img/vis_1.jpg");
        $("#pic2 img").attr("src", "img/vis_2.jpg");
        $("#pic3 img").attr("src", "img/vis_3.jpg");
        $("#pic4 img").attr("src", "img/vis_4.jpg");
        $("#pic5 img").attr("src", "img/vis_5.jpg");

        picWidth = $(window).width();
        $("#totalSet").css("width", picWidth);
        $(".pic img").css("width", picWidth);
        $("#totalSet").css("height", $(".pic img").height());
        $(".pic").css("height", $(".pic img").height());
    }

    // 반응형을 위한 해상도 셋팅 -------------------------------------------------------------------
   $("h1").before('<div id="hyText">width: <span></span><br>height: <span></span></div>');
   $("#hyText").css("position", "absolute");
   $("#hyText").css("left", "100px");
   $("#hyText").css("top", "200px");
   $("#hyText").css("color", "white");
   $("#hyText").css("z-index", "20000000");
   $("#hyText span:nth-of-type(1)").text($(window).width());
   $("#hyText span:nth-of-type(2)").text($(window).height());
    // end -----------------------------------------------------------------------------------

    if ($(window).width() <= 768) {
        console.log("768 mode");
        mobileSlideImg();
    } else {
        console.log("desktop mode");
        desktopSlideImg();
    }
    $(window).resize(function () {
        console.log($(window).width());
        $("#hyText span:nth-of-type(1)").text($(window).width());
        $("#hyText span:nth-of-type(2)").text($(window).height());

        if ($(window).width() <= 768) {
            // console.log("768 mode");
            mobileSlideImg();
        } else {
            // console.log("desktop mode");
            desktopSlideImg();
        }
    });

    setInterval(function () {
        moveX = moveX - picWidth;
        $("#picSet").css("transform", "translateX(" + moveX + "px)");

        var movePrev = setInterval(function () {
            $("#picSet").css("left", -moveX + "px");
            $("#picSet").children("div:first").insertAfter($("#picSet").children("div:last"));
            clearInterval(movePrev);
        }, speed);
    }, 3000);


});