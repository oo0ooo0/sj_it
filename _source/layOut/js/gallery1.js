$(function() {
  
  var move = 0;

  // 5초 후에 이미지가 내려옴
  setInterval(function() {
    move = move + 300;
    $("#slideSet").css("transform", "translateY(" + move + "px)"); // 1초 걸림
    // 1초후에, 다 내려온 다음에 실행
    var moveAfter = setInterval(function() {
        $("#slideSet").css("top", -move + "px");
        $("#slideSet").children("div:first").insertAfter($("#slideSet").children("div:last"));
        clearInterval(moveAfter);
    }, 1000);
  }, 2000);
});
