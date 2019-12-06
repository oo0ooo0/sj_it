$(function () {
    $("#totalSet").before('<div id="slideMenu"><div>01 . CREATIVE</div><div>02 . INNOVATIVE</div><div>03 . CHEMICAL</div><div>04 . CUSTOMERS</div><div>05 . GLOBAL</div></div>');
    $("#slideMenu").css("position", "absolute");
    $("#slideMenu").css("top", "300px");
    $("#slideMenu").css("right", "0");
    // $("#slideMenu").css("border", "3px solid yellow");
    $("#slideMenu").css("z-index", "100000003");
    $("#slideMenu").css("color", "white");
    $("#slideMenu").css("width", "200px");
    $("#slideMenu").css("font-size", "13px");
    $("#slideMenu div").css("background-color", "rgba(0,0,0,0.5)");
    $("#slideMenu div").css("padding", "15px 20px");
    $("#slideMenu div").css("margin-bottom", "10px");
    $("#slideMenu div").css("cursor", "pointer");

    $("#slideMenu div").hover(function(){
        $(this).css("background-color", "white");
        $(this).css("color", "black");
    }, function(){
        $(this).css("background-color", "rgba(0,0,0,0.5)");
        $(this).css("color", "white");
    })
});

