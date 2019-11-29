$(function(){  
    // 3초 후에 이미지가 내려옴
    var move = 0;
    var currentNum = 1;
    var totalNum = 5;

    setInterval(function(){
        if(currentNum == totalNum){
            currentNum = 1;
            move = 0;
        } else {
            currentNum ++;
            move = move + 300;
        }
        console.log(currentNum);
        $("#slideSet").css("transform", "translateY(" + move + "px)");
    }, 2000);
});