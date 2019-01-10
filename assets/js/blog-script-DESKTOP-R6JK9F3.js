$("document").ready(function () {
  // $("#cta")
  //   .delay(1000)
  //   .fadeIn(1000);

  // $("#navbar").hide();

  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });

  $(".nav-item").on("click", function () {
    $(this).addClass("active");
    $(this)
      .siblings()
      .removeClass("active");
  });
  $("#inchide").on("click", function () {
    $("#cta").fadeOut(500);
    $(".page-background").addClass("page-background-clicked");
    $("#titlu").css("display", "block");
  });

  var div = $("#sticky-nav").offset().top; // get top offset of your div

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var height = $("#sticky-nav").css("height");
    if (scroll >= div) {
      $("#sticky-nav").addClass("sticky");
      $("body").css("padding-top", height);
    } else {
      $("#sticky-nav").removeClass("sticky");
      $("body").css("padding-top", "");
    }
    console.log(height);
  });
  console.log(div);
});
$("document").ready(function () {
  // $("body").addClass("slide-in-right");
  // setTimeout(function () {
  //   $("body").removeClass("slide-in-right")
  // }, 500);
  $("a").on("click", function () {
    $("body").addClass("slide-out-left");
    console.log("sadsa");
  });
});
