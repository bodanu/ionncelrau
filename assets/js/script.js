$("document").ready(function() {
  $("#cta")
    .delay(1500)
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
  $("document").ready(function() {
    $("#intro-text")
      .delay(50)
      .animate({ left: "210vw", opacity: "1.0" }, "slow")
      .css("display", "block");
    $("#intro-text2")
      .delay(250)
      .animate({ left: "210vw", opacity: "1.0" }, "slow")
      .css("display", "block");
    $("#intro-text3")
      .delay(400)
      .animate({ left: "140vw", opacity: "1.0" }, "slow")
      .css("display", "block");
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
  });
});
