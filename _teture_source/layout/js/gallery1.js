$(function(){  
    var moveY = 0
    var picHeight = 300;
    var time = 3000; // 밀리세컨드 단위
    
    setInterval(function(){
        moveY = moveY + picHeight;
       
        $("#slideSet").css("transform", "translateY(" + moveY + "px)");
        var moveAfter = setInterval(function(){
            $("#slideSet").css("top", -moveY +"px");
            $("#slideSet").children("div:first").insertAfter($("#slideSet").children("div:last"));
            clearInterval(moveAfter);
        }, 1000);
    }, 3000);
});