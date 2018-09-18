$("document").ready(function() {
  $("#cta")
    .delay(1000)
    .fadeIn(1000);

  $(".navbar").hide();

  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() < 100) {
        $(".navbar").fadeIn(400);
      }
      if ($(this).scrollTop() > 0) {
        $(".navbar").fadeIn(400);
      } else {
        $(".navbar").fadeOut();
      }
    });
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

  var usefull = [];
  $(".nav-item").each(function(index, obj) {
    usefull.push($(this).text());
  });
  var values = [];
  $("a").each(function() {
    var el = $(this);
    values.push({
      tinta: el.attr("href"),
      nume: el.attr("title")
    });
  });
  var linkSection = new Vue({
    el: "#links-link",
    data: {
      links: values
    }
  });

  var titles = [];
  $("a").each(function(index, obj) {
    titles.push($(this).text());
  });
  $("#inchide").on("click", function() {
    $("#cta").fadeOut(500);
  });

  var firstLink = {
    title: titles,
    value: values
  };
  console.log(values);
  // console.log(usefull.length);
  //   for (var i in usefull) {
  //      console.log("row " + i);
  //      for (var j in usefull[i]) {
  //        console.log(" " + usefull[i][j]);
  //      }
  //    }
});
