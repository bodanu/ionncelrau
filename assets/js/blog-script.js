$("document").ready(function() {
  $("#cta")
    .delay(1000)
    .fadeIn(1000);

  $("#navbar").hide();

  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
  });

  $(".nav-item").on("click", function() {
    $(this).addClass("active");
    $(this)
      .siblings()
      .removeClass("active");
  });
  $("#inchide").on("click", function() {
    $("#cta").fadeOut(500);
    $(".page-background").addClass("page-background-clicked");
    $("#titlu").css("display", "block");
  });

  var div = $("#sticky-nav").offset().top; // get top offset of your div

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= div) {
      $("#sticky-nav").addClass("sticky");
    } else {
      $("#sticky-nav").removeClass("sticky");
    }
  });
  console.log(div);
});
