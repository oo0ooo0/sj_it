$(function () {
    var currentNum = 1;
    var index = 1;
    var totalNum = 5;
    // $("#pic1").css("left", "0");
    // $("#pic2").css("left", "100px");
    // $("#pic3").css("left", "200px");
    // $("#pic4").css("left", "300px");
    // $("#pic5").css("left", "400px");

    picWidth = $(window).width();
    $("#totalSet").css("width", picWidth);
    $(".pic img").css("width", picWidth);
    $(".pic").css("width", "0");
    $("#pic" + currentNum).css("width", picWidth+ "px");

    // 모바일과 데스크탑에 따라 달라지는 이미지
    var mobileSlideImg = function () {
        $("#pic1 img").attr("src", "img/vis_1_m.jpg");
        $("#pic2 img").attr("src", "img/vis_2_m.jpg");
        $("#pic3 img").attr("src", "img/vis_3_m.jpg");
        $("#pic4 img").attr("src", "img/vis_4_m.jpg");
        $("#pic5 img").attr("src", "img/vis_5_m.jpg");
    }
    var desktopSlideImg = function () {
        $("#pic1 img").attr("src", "img/vis_1.jpg");
        $("#pic2 img").attr("src", "img/vis_2.jpg");
        $("#pic3 img").attr("src", "img/vis_3.jpg");
        $("#pic4 img").attr("src", "img/vis_4.jpg");
        $("#pic5 img").attr("src", "img/vis_5.jpg");
    }

    if ($(window).width() <= 768) {
        console.log("768 mode");
        mobileSlideImg();
    } else {
        console.log("desktop mode");
        desktopSlideImg();
    }
    $(window).resize(function () {
        picWidth = $(window).width();
        $("#totalSet").css("width", picWidth);
        $(".pic img").css("width", picWidth);
        $("#pic" + currentNum).css("width", picWidth+ "px");

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
        if (currentNum == 1) {
            $("#pic5").css("width", "0");
        } else {
            $("#pic" + (currentNum - 1)).css("width", "0");
        }
        if (currentNum == totalNum - 1) {
            currentNum = 1;
        } else {
            currentNum++;
        }
        index++;

        $("#pic" + currentNum).css("z-index", index);
        // $("#pic" + currentNum).slideDown("slow");
        $("#pic" + currentNum).animate({ width: picWidth+ "px" });
        $(".subMenu").css("z-index", (index + 1));
    }, 3000);
});