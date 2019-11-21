
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
   
    //w3scool Curtain Menu
    // $("#mobile_gnb").css("width","0px");


//    //w3scool _Off-Canvas Menu1
//     $("#mobile_gnb").css("width","0px");
//     $("body").css("margin-right","0px");

//    //w3scool _Off-Canvas Menu2
    $("#mobile_gnb").css("width","0px");
    $("body").animate({"right":"0px"},500);

}); 



$("#gnb li").click(function(){
    
    // console.log(this);
    // console.log(this.id);

})


for (var i = 1; i<=7;){
$("#gnbMenu"+i).click(function(){
    console.log(this.id);
    // $("html").animate({scrollTop:$("#section1").offset().top},"slow");
})
}





}