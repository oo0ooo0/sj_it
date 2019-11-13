$(function(){
    var move=0;
    var hightPick=300;
    var currentNum = 1;
    var totalNum = 0;
    var time = 3000;


    setInterval(function(){

        
        if(currentNum==totalNum){
            currentNum=1;
            move=0;

        }else{
            currentNum++;
            move=move+hightPick;

        }

        console.log(currentNum);

        
        $("#slideSet").css("transform", "translateY("+move+'px)');

    },1000);
})