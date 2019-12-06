$(function () {
    var selectMenu = 0;

    function menuWhite() {
        $("nav").css("background-color", "white");
        $("header nav h1 a").css("background-position-y", "-48px");
        $("#allMenu").css("background-position-y", "-50px");
        $(".gnbMenu>a").css("color", "black");
        $("#quick>a").css("color", "black");
        $("#quick>a>span").css("background-position-y", "-50px");
        $("#kor").css("background-position-y", "-50px");
        $("#search").css("color", "black");
        $("#search span").css("background-position-y", "-52px");

        $("#gnb" + selectMenu + ">a").css("color", "#f37321");
    }
    function menuBlack() {
        $("nav").css("background-color", "rgba(0,0,0,0.5)");
        $("header nav h1 a").css("background-position-y", "0px");
        $("#allMenu").css("background-position-y", "0px");
        $(".gnbMenu>a").css("color", "white");
        $("#quick>a").css("color", "white");
        $("#quick>a>span").css("background-position-y", "0px");
        $("#kor").css("background-position-y", "0px");
        $("#search").css("color", "white");
        $("#search span").css("background-position-y", "0px");
    }

    $("nav").mouseover(function () {
        console.log("nav over");
        menuWhite();
    });
    $("nav").mouseout(function () {
        menuBlack();
    });
    $(".gnbMenu").mouseover(function () {
        selectMenu = this.id.slice(4, 5);
        $($(this).children()[1]).css("display", "block");
    });
    $(".gnbMenu").mouseout(function () {
        selectMenu = 0;
        $($(this).children()[1]).css("display", "none");

    });

    $("#totalSet").mouseover(function () {
        $("#hyText span").text("dddd");
        $(".subMenu").css("display", "none");
        $("#searc").css("background-color", "transparent");
        $("#searc").css("border", "1px solid #aaa");
        menuBlack();
    });

    $("h1").focusin(function () {
        menuWhite();
    });
    $(".gnbMenu").focusin(function () {
        menuWhite();
        $($(this).children()[0]).css("color", "#f37321");
        $($(this).children()[1]).css("display", "block");
    });
    $(".subMenu li").focusin(function () {
        $($(this).children()[0]).css("color", "#f37321");
    });

    $(".subMenu li a").blur(function () {
        $(".subMenu li a").css("color", "white");
    });
    $("#quick a").focus(function () {
        menuWhite();
        $(".subMenu").css("display", "none");
        $(this).css("color", "#f37321");
        $($(this).children()).css("background-position-y", "-25px");
    });
    $("#quick a").blur(function () {
        $(this).css("color", "black");
        $($(this).children()).css("background-position-y", "-50px");
    });
    $("#kor").focus(function () {
        menuWhite();
        $(this).css("background-position-y", "-25px");
    });
    $("#kor").blur(function () {
        $(this).css("background-position-y", "-50px");
    });
    $("#search").focus(function () {
        menuWhite();
        $(this).css("background-color", "#f37321");
        $(this).css("border", "none");
        $(this).css("color", "white");
        $($(this).children()).css("background-position-y", "0px");
    });
    $("#search").blur(function () {
        $(this).css("background-color", "transparent");
        $(this).css("border", "1px solid #aaa");
        menuBlack();
    });
});