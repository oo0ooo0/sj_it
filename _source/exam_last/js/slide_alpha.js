$(function () {
    var currentNum = 0;
    var totalNum = 3;
    var index = 0;

    $(".pic").css("display", "none");
    $("#pic0").css("display", "block");

    setInterval(function () {
        if (currentNum == 0) {
            $("#pic2").css("display", "none");
        } else {
            $("#pic" + (currentNum - 1)).css("display", "none");
        }
        if (currentNum == totalNum - 1) {
            currentNum = 0;
        } else {
            currentNum++;
        }
        console.log(currentNum);
        index++;
        $("#pic" + currentNum).css("z-index", index);
        $("#pic" + currentNum).fadeIn();
    }, 2000);
});