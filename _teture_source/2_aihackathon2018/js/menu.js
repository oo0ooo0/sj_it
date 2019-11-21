window.onload = function(){
// $(document).ready(function(){

// });
// $(function(){

// });
$("#triger").click(function(){
    // console.log("click");
    
    // $("#mobile_gnb").show();
    // $("#mobile_gnb").toggle();
    // $("#mobile_gnb").animate({width: "170px"});
    // $("#m_gnb_close").show();



//    //w3scool Curtain Menu
//     $("#mobile_gnb").css("width","170px");


    // //    //w3scool _Off-Canvas Menu_1
    // $("#mobile_gnb").css("width","170px");
    // $("body").css("marginright","170px");
   
   
   
    // //    //w3scool _Off-Canvas Menu_2
    $("#mobile_gnb").css("width","170px");
    $("body").animate({"right":"170px"},500); //

});




$("#m_gnb_close").click(function(){
    // $("#m_gnb_close").hide();
    // $("#mobile_gnb").hide();
   
    //w3school Curtain Menu
    // $("#mobile_gnb").css("width","0px");


//    //w3shcool _Off-Canvas Menu1
    $("#mobile_gnb").css("width","0px");
    $("body").css("margin-right","0px");

//    //w3shcool _Off-Canvas Menu2
    // $("#mobile_gnb").css("width","0px");
    // $("body").animate({"right":"0px"},500);

}); 





//DESK TOP 
var menuMargin =30; //이런애를 맨 위로 올려서

$("#gnb li").click(function(){
    
    // console.log(this);
    // console.log(this.id);
    var i = this.id.slice(7,8);
    
    //menu click -> go to info
    $("html").animate({scrollTop:$("#section"+i).offset().top},"slow");
    

    //"#greenBar's position"  /////if cause gnb li:first margin=0
    if(i==1){
        menuMargin = 0;
    }
    $("#greenBar").animate({left:$("#gnbMenu"+i).position().left+menuMargin},'slow');
    


    //"#greenBar" length
    $("#greenBar").css("width",$("#gnbMenu"+i).width());
})




}