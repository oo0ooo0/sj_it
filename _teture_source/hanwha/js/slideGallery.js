$(function () {
    var productNum = 0
    var tatalNum = 3;
    var moveX = 0;
    var btnEnabled = true;

    var productH3 = ["CPVC", "Title2", "Title3"]
    $("#productSetA h3").text(productH3[productNum]);

    var productMainText = [];
    productMainText[0] = "1한화케미칼은 국내에서 처음으로 자체 기술로 CPVC를 생산하는데 성공하고 2017년 울산 2공장에 연간 3만톤 규모의 공장을 건설해 생산 중입니다."
    productMainText[1] = "2CPVC를 생산하는데 성공하고 2017년 울산 2공장에 연간 3만톤 규모의 공장을 건설해 생산 중입니다."
    productMainText[2] = "32017년 울산 2공장에 연간 3만톤 규모의 공장을 건설해 생산 중입니다. 한화케미칼은 국내에서 처음으로 자체 기술로 CPVC를 생산하는데 성공하고 "
    $("#productMainText").text(productMainText[productNum]);

    $("#productBt1").css("display", "none");
    $("#productBt2").css("display", "none");

    $("#pli"+productNum).css("background", "yellow");

    var picWidth = $("#picSet").width();
    console.log("그림너비--"+picWidth);
    $("#picSet").css("left", -picWidth);
    $("#picSet").css("transition", "transform 1s");

    $("#prev").css("cursor", "pointer");
    $("#next").css("cursor", "pointer");

    for (i = 0; i <= tatalNum; i++) {
        $("#pic" + i).css("background", "url('images/product_" + i + ".jpg')");
        $("#pic" + i).css("background-size", "cover");
    }

    $(window).on("resize", function () {
        picWidth = $("#picSet").width();
        $("#picSet").css("left", -moveX - picWidth);
    });


    function slideLeft() {
        $("#picSet").css("transform", "translateX(" + moveX + "px)");
        productText();

        checkLeft = setInterval(function () {
            $("#picSet").children("div:first").insertAfter($("#picSet").children("div:last"));
            console.log("movX:"+moveX);
            $("#picSet").css("left", -moveX-picWidth);
            btnEnabled = true;
            clearInterval(checkLeft);
        }, 500);
    }
    function slideRight() {
        console.log(moveX);
        $("#picSet").children("div:last").insertBefore($("#picSet").children("div:first"));
        $("#picSet").css("transform", "translateX(" + moveX + "px)");
        $("#picSet").css("left", -moveX-picWidth);
        productText();

        checkRight = setInterval(function () {
            btnEnabled = true;
            clearInterval(checkRight);
        }, 500);
    }

    function productText(){
        $("#productSetA h3").text(productH3[productNum]);
        $("#productMainText").text(productMainText[productNum]);

        $("#productBt0").slideUp();
        $("#productBt1").slideUp();
        $("#productBt2").slideUp();
        $("#productBt" + productNum).slideDown();

        for(i=0; i<tatalNum; i++){
            $("#pli"+i).css("background", "white");
        }
        $("#pli"+productNum).css("background", "yellow");
    }
    // 0, 1, 2
    $("#prev").on("click", function () {
        if(productNum == tatalNum-1){
            productNum = 0;
        } else {
            productNum ++;
        }
        if (btnEnabled) {
            btnEnabled = false;
            moveX = moveX - picWidth;
            slideLeft();
        }
    });
    // 0, 1, 2
    $("#next").on("click", function () {
        if(productNum==0){
            productNum = tatalNum-1;
        } else {
            productNum --;
        }
        if (btnEnabled) {
            btnEnabled = false;
            moveX = moveX + picWidth;
            slideRight();
        }
    });
});