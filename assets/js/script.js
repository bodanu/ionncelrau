$("document").ready(function() {
  $("#cta")
    .delay(1000)
    .fadeIn(1000);

  $("#navbar").hide();

  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() < 100) {
        $("#navbar").fadeIn(400);
      }
      if ($(this).scrollTop() > 0) {
        $("#navbar").fadeIn(400);
      } else {
        $("#navbar").fadeOut();
      }
    });
  });

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
});
