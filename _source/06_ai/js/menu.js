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
    console.log("window.innerWidth" + window.innerWidth);
    console.log("click4");

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
  console.log(document.getElementById("greenBar").offsetTop);
  console.log(document.getElementById("greenBar").offsetLeft);
};
