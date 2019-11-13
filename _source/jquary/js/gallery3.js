$(function(){
    var move=0;
    var hightPick=300;
    var currentNum = 1;
    var totalNum = 0;
    var time = 3000;


    setInterval(function(){

        move=move+hightPick;    

        $("#slideSet").css("transform", "translateY("+move+'px)');

        var moveAfter = setInterval(function(){
            $("#slideSet").css("top", -move +"px");
            $("#slideSet").children("img:first").insertAfter($("#slideSet").children("img:last"));
            clearInterval(moveAfter);
        },1000);
      
    },2000);
})