$(function() {
    var allMenuView = false;

  // 메뉴 확인 - 함수 선언
  function menuCheck() {
    if ($(window).scrollTop() < 100) {
      // 100보다 작을때
      $("header").css("display", "block");
      // header 메뉴 화이트 버전
      $("header").css("position", "static");
      $("header").css("border-bottom", "none");
      // 메뉴 화이트 변경
      $("h1 a").css("background-image", "url('img/logo_white.png')");
      $("#search").css("background-position-y", "-2px");
      $("#allMenu").css("background-position-y", "0px");
      // header 마우스 오버
      $("h1 a").mouseover(function() {
        if(allMenuView == true){
            $("h1 a").css("background-image", "url('img/logo_orange.png')");
        } else {
            $("h1 a").css("background-image", "url('img/logo_black.png')");
        }
      });
      $("h1 a").mouseout(function() {
        if(allMenuView == true){
            $("h1 a").css("background-image", "url('img/logo_black.png')");
        } else {
            $("h1 a").css("background-image", "url('img/logo_white.png')");
        }
      });
      $("#search").mouseover(function() {
        $("#search").css("background-position-y", "-52px");
      });
      $("#search").mouseout(function() {
        $("#search").css("background-position-y", "-2px");
      });
      // 100보다 작을때
      $("#allMenu").mouseover(function() {
        if(allMenuView == true){
            $("#allMenu").css("background-image", "url('img/close_orange.png')");
        } else {
            $("#allMenu").css("background-position-y", "-50px");
        }
      });
      $("#allMenu").mouseout(function() {
        if(allMenuView == true){
            $("#allMenu").css("background-image", "url('img/close.png')");
        } else {
            $("#allMenu").css("background-position-y", "0px");
        }
      });
    } else if ($(window).scrollTop() < 500) {
      // 500보다 작을때
      $("header").css("display", "none");
    } else {
      // 500보다 클때
      $("header").css("position", "fixed");
      $("header").css("background-color", "white");
      $("header").css("top", "0");
      $("header").css("left", "0");
      $("header").css("border-bottom", "2px solid #aaa");
      $("header").fadeIn(300);
      // $("header").slideDown();

      // 메뉴 블랙 변경
      $("h1 a").css("background-image", "url('img/logo_black.png')");
      $("#search").css("background-position-y", "-52px");
      $("#allMenu").css("background-position-y", "-50px");
      // header 마우스 오버
      $("h1 a").mouseover(function() {
        $("h1 a").css("background-image", "url('img/logo_orange.png')");
      });
      $("h1 a").mouseout(function() {
        $("h1 a").css("background-image", "url('img/logo_black.png')");
      });
      $("#search").mouseover(function() {
        $("#search").css("background-position-y", "-25px");
      });
      $("#search").mouseout(function() {
        $("#search").css("background-position-y", "-52px");
      });
      // 500보다 클때
      $("#allMenu").mouseover(function() {
        if(allMenuView == true){
            $("#allMenu").css("background-image", "url('img/close_orange.png')");
        } else {
            $("#allMenu").css("background-position-y", "-25px");
        }
      });
      $("#allMenu").mouseout(function() {
        if(allMenuView == true){
            $("#allMenu").css("background-image", "url('img/close.png')");
        } else {
            $("#allMenu").css("background-position-y", "-50px");
        }
      });
    }
  }
  $(window).scroll(function() {
    menuCheck();
  });
  $("#allMenu").click(function(){
    if(allMenuView == false){
        allMenuView = true;
        $("#gnb").css("display", "block");
        
        $("header").css("position", "fixed");
        $("header").css("background-color", "white");
        $("header").css("top", "0");
        $("header").css("left", "0");
        $("header").css("border-bottom", "2px solid #aaa");
        $("h1 a").css("background-image", "url('img/logo_black.png')");
        $("#search").css("display", "none");

        $("#allMenu").css("background-image", "url('img/close.png')");
        $("#allMenu").css("background-size", "contain");
        $("#allMenu").css("background-repeat", "no-repeat");
        $("#allMenu").css("background-position-x", "center");
        $("#allMenu").css("background-position-y", "0px");
    } else {
        allMenuView = false;
        $("#gnb").css("display", "none");
        
        if ($(window).scrollTop() < 100) {
            $("header").css("position", "static");
            $("header").css("background-color", "none");
            $("header").css("border-bottom", "none");
            $("h1 a").css("background-image", "url('img/logo_white.png')");
            // $("#search").css("display", "block");   
        }
        $("#allMenu").css("background-image", "url('img/ico.png')");
        $("#allMenu").css("background-size", "auto");
        $("#allMenu").css("background-position-x", "-651px");
        $("#allMenu").css("background-position-y", "0px");
        $("#search").css("display", "block");
    }
  });

  // 문서가 새로고침, 로드될때 실행 메뉴 셋팅
  menuCheck();
});
