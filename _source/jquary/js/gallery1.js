//새로고침하면 내려가기
// $(function(){
//     $("#slideSet").css("transform", "translateY(300px)");
// });


//3초후에 스르륵
// $(function(){
//     setInterval(function(){
//         $("#slideSet").css("transform", "translateY(300px)");
//         console.log("setInterval");
//     },3000);
        
//     });


$(function(){
var moveY = 0;
var picHight = 300;
var time = 3000;


setInterval(function(){
    moveY = moveY+picHight;
    
    $("#slideSet").css("transform", "translateY("+moveY+"px)");
    var moveAfter = setInterval(function(){
        $("#slideSet").css("top", -moveY+"px");
        $("#slideSet").children("div:first").insertAfter($("#slideSet").children("div:last"));
        clearInterval(moveAfter);
    },1000);

},time);
});




// 클릭하면 내려가기

// $(function(){
//     $("#slideSet div").on("click", function(){
//     $("#slideSet").css("transform", "translateY(300px)");
//     // $("#slideSet>div").css("border","3px solid pink");
//     // $("#slideSet").css("transform", "5s ease-in-out");
// });
// });