$("#top").css("cursor", "pointer");

$("#top").on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

var num = $(window).scrollTop();
console.log(num);
if (300 < num && num < 1100) {
  $("#top").css("display", "block");
} else {
  $("#top").css("display", "none");
}

$(window).on("scroll", function() {
  // console.log($(window).scrollTop());
  num = $(window).scrollTop();
  console.log(num);
  if (300 < num && num < 1100) {
    $("#top").css("display", "block");
  } else {
    $("#top").css("display", "none");
  }
});
