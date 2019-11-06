// console.log("자바스크립튼");
// console.log(document.getElementById("triger"));
// console.log(document.getElementById("m_gnb_close"));

// //객체.이벤트 = function(){하고싶은일;}
// window.onload = function() {
//   console.log(document.getElementById("triger"));
//   document.getElementById("triger").onclick = function() {
//     console.log("click");
//     document.getElementById("mobile_gnb").style.display = "block";
//     document.getElementById("m_gnb_close").style.display = "block";
//   };
// };

// window.onload = function() {
//   console.log(document.getElementById("m_gnb_close"));
//   document.getElementById("m_gnb_close").onclick = function() {
//     document.getElementById("mobile_gnb").style.display = "none";
//     document.getElementById("m_gnb_close").style.display = "none";
//   };
// };

// ---------------
// Id("demo").onclick = function()
window.onload = function() {
  var menuOpen = false;
  //triger click
  document.getElementById("triger").onclick = function() {
    console.log("click");
    document.getElementById("mobile_gnb").style.display = "block";
    document.getElementById("m_gnb_close").style.display = "block";

    //   console.log(document.getElementsByClassName("triger_span"));
    //   console.log(document.getElementsByClassName("triger_span")[0]);
    //   console.log(document.getElementsByClassName("triger_span")[1]);
    //   console.log(document.getElementsByClassName("triger_span")[2]);

    document.getElementsByClassName("triger_span")[0].style.transform =
      " translateY(6px) rotate(-45deg)";
    document.getElementsByClassName("triger_span")[1].style.opacity = "0";
    document.getElementsByClassName("triger_span")[2].style.transform =
      " translateY(-6px) rotate(45deg)";
  };

  document.getElementById("m_gnb_close").onclick = function() {
    document.getElementById("mobile_gnb").style.display = "none";
    document.getElementById("m_gnb_close").style.display = "none";
    //   document.getElementById("triger").style.display = "block";
    document.getElementsByClassName("triger_span")[0].style.transform =
      " translateY(0px) rotate(0deg)";
    document.getElementsByClassName("triger_span")[1].style.opacity = "1";
    document.getElementsByClassName("triger_span")[2].style.transform =
      " translateY(0px) rotate(0deg)";
  };
};

const title = document.querySelector("#gnb");
function handleResize() {
  console.log(document.body.offsetWidth);
  var width_browser = document.body.offsetWidth;
  console.log(width_browser);

  if (width_browser > 1080) {
    document.getElementById("mobile_gnb").style.display = "none";
    document.getElementById("m_gnb_close").style.display = "none";
    document.getElementById("triger").style.display = "none";
  } else {
    document.getElementById("mobile_gnb").style.display = "none";
    document.getElementById("m_gnb_close").style.display = "none";
    document.getElementById("triger").style.display = "block";
  }
}

//초록 바제어
console.log(document.getElementById("greenBar").offsetTop);
console.log(document.getElementById("greenBar").offsetLeft);
