//This is jquery;;

window.onload = function() {
  var menuOpen = false;
  document.getElementById("triger").onclick = function() {
    // console.log("click1");

    if (menuOpen == false) {
      // console.log("click2");
      menuOpen = true;
      document.getElementById("mobile_gnb").style.display = "block";
      document.getElementById("m_gnb_close").style.display = "block";

      document.getElementsByClassName("triger_span")[0].style.transform =
        " translateY(6px) rotate(-45deg)";
      document.getElementsByClassName("triger_span")[1].style.opacity = "0";
      document.getElementsByClassName("triger_span")[2].style.transform =
        " translateY(-6px) rotate(45deg)";
    } else {
      // console.log("click3");
      menuOpen = false;
      document.getElementById("mobile_gnb").style.display = "none";
      document.getElementById("m_gnb_close").style.display = "none";
      document.getElementsByClassName("triger_span")[0].style.transform =
        " translateY(0px) rotate(0deg)";
      document.getElementsByClassName("triger_span")[1].style.opacity = "1";
      document.getElementsByClassName("triger_span")[2].style.transform =
        " translateY(0px) rotate(0deg)";
    }
  };

  document.getElementById("m_gnb_close").onclick = function() {
    menuOpen = false;
    document.getElementById("mobile_gnb").style.display = "none";
    document.getElementById("m_gnb_close").style.display = "none";
    //   document.getElementById("triger").style.display = "block";
    document.getElementsByClassName("triger_span")[0].style.transform =
      " translateY(0px) rotate(0deg)";
    document.getElementsByClassName("triger_span")[1].style.opacity = "1";
    document.getElementsByClassName("triger_span")[2].style.transform =
      " translateY(0px) rotate(0deg)";
  };
 
  //d윈도우 리사이즈

  window.onresize = function() {
    // console.log("window.innerWidth" + window.innerWidth);
    // console.log("click4");

    if (window.innerWidth > 1080) {
      document.getElementById("mobile_gnb").style.display = "none";
      document.getElementById("m_gnb_close").style.display = "none";
    } else {
      menuOpen = false;
      document.getElementsByClassName("triger_span")[0].style.transform =
        " translateY(0px) rotate(0deg)";
      document.getElementsByClassName("triger_span")[1].style.opacity = "1";
      document.getElementsByClassName("triger_span")[2].style.transform =
        " translateY(0px) rotate(0deg)";
    }
  };

  //초록 바제어
        //js
  // console.log(document.getElementById("#greenBar").offsetTop);
  // console.log(document.getElementById("#greenBar").offsetLeft);
      //jq
// console.log("greenBarTob" +$("#greenBar").offset().top);
// console.log("greenBarL" +$("#greenBar").offset().left);
// console.log("greenBarTop::" +$("#greenBar").position().top);
// console.log("greenBarLeft::" +$("#greenBar").position().left);
// console.log ("height");


//clear
$("#gnb1 a").css("color","#009070");
$("#greenBar").css("width",$("#gnb1").width());
console.log("#gnb1 width:" + $("#gnb1").width());
console.log("#gnb2 width:" + $("#gnb2").width());
var menu1X = $("#gnb1").position().left;
var menu2X = $("#gnb2").position().left;
var menu3X = $("#gnb3").position().left;
var menu4X = $("#gnb4").position().left;
var menu5X = $("#gnb5").position().left;
var menu6X = $("#gnb6").position().left;
var menu7X = $("#gnb7").position().left;
var menu8X = $("#gnb8").position().left;
console.log("#gnb1 위치:" + $("#gnb1").position().left);
console.log("#gnb2 위치:" + $("#gnb2").position().left);
console.log("#gnb3 위치:" + $("#gnb3").position().left);
console.log("#gnb4 위치:" + $("#gnb4").position().left);
// $("header #desktopMenu li:first-child a").css("color","#00970");
// console.log("#gnb li:first-child").width;
// console.log("#gnb li:last-child").width;
// console.log($("#gnb2").width());
// console.log($("#gnb1").position().left);
// console.log($("#gnb2").position().left);



//menu control

// js //  document.getElementById("gnb").style.border ="2px solid red";
// jq // $("#gnb").css("border","2px solid pink");

// $("gnb li").on("click", function(){
//   console.log("click");
// });

$("#gnb1").on("click", function(){
  $("#greenBar").css("width",$("#gnb1").width());
  $("#greenBar").css("left",menu1X);
  // $("#gnb1 li a").css("color", "#000");

  $("#gnb1 a").css("color", "#009070");
});

$("#gnb2").on("click", function(){
  $("#greenBar").css("width",$("#gnb2").width());
  // $("#greenBar").css("left",menu2X);
  $("#greenBar").animate({left: menu2X});
  $("#gnb1 a").css("color", "black");
  $("#gnb2 a").css("color", "#009070");
});

$("#gnb3").on("click", function(){
  $("#greenBar").css("width",$("#gnb3").width());
  $("#greenBar").css("left",menu3X);
  $("#gnb2 a").css("color", "black");
  $("#gnb3 a").css("color", "#009070");
});

$("#gnb4").on("click", function(){
  $("#greenBar").css("width",$("#gnb4").width());
  $("#greenBar").css("left",menu4X);
  $("#gnb2 a").css("color", "black");
  $("#gnb4 a").css("color", "#009070");
});

$("#gnb5").on("click", function(){
  $("#greenBar").css("width",$("#gnb5").width());
  $("#greenBar").css("left",menu5X);
  $("#gnb4 a").css("color", "black");
  $("#gnb5 a").css("color", "#009070");
});

$("#gnb6").on("click", function(){
  $("#greenBar").css("width",$("#gnb6").width());
  $("#greenBar").css("left",menu6X);
  $("#gnb5 a").css("color", "black");
  $("#gnb6 a").css("color", "#009070");
});
  
$("#gnb7").on("click", function(){
  $("#greenBar").css("width",$("#gnb7").width());
  $("#greenBar").css("left",menu7X);
  $("#gnb6 a").css("color", "black");
  $("#gnb7 a").css("color", "#009070");
});
  
$("#gnb8").on("click", function(){
  $("#greenBar").css("width",$("#gnb8").width());
  $("#greenBar").css("left",menu8X);
  $("#gnb7 a").css("color", "black");
  $("#gnb8 a").css("color", "#009070");
});
  


//practice
// $("html").animate({scrollTop:800}, "slow");
// console.log("sec2  "+$("#section_schedule").offset().top);
};


