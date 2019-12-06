$(function () {
    var moveY = 0;
    var picHeight =  550;
    var speed = 1000;

    $("#picSet").css("transition", "transform "+ speed/1000 +"s");

    setInterval(function () {
        moveY = moveY - picHeight;
        $("#picSet").css("transform", "translateY(" + moveY + "px)");
        // console.log($("#picSet").position().left);
        var movePrev = setInterval(function () {
            $("#picSet").css("top", -moveY + "px");
            $("#picSet").children("div:first").insertAfter($("#picSet").children("div:last"));
            clearInterval(movePrev);
        }, speed);
    }, 3000);
});