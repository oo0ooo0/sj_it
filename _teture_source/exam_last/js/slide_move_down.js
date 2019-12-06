$(function () {
    var moveY = 0;
    var picHeight =  550;
    var speed = 1000;

    $("#picSet").css("transition", "transform "+ speed/1000 +"s");

    setInterval(function () {
        moveY = moveY + picHeight;
        $("#picSet").children("div:last").insertBefore($("#picSet").children("div:first"));
        $("#picSet").css("top", -moveY + "px");
        $("#picSet").css("transform", "translateY(" + moveY + "px)");
    }, 3000);
});