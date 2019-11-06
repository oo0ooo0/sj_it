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
  // console.log(document.getElementById("#greenBar").offsetTop);
  // console.log(document.getElementById("#greenBar").offsetLeft);



//clear
$("#gnb1 a").css("color","#009070");
$("#greenBar").css("width",$("#gnb1").width());

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

$("#gnb2").on("click", function(){
  $("#greenBar").css("width",$("#gnb2").width());
  $("#gnb1 a").css("color", "#000");
  $("#gnb2 a").css("color", "#009070");
});
  


//practice
// $("html").animate({scrollTop:800}, "slow");
console.log("sec2  "+$("#section_schedule").offset().top);
};


