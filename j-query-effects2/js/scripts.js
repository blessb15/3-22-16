$(function() {
  $(".clickable1").click(function() {
    $(".ghost").fadeToggle();
  });
  $(".clickable1").click(function() {
    $(".chest").hide();
  });

  $(".clickable2").click(function() {
    $(".cat").fadeToggle();
  });
  $(".clickable2").click(function() {
    $(".bag").hide();
  });

  $(".clickable3").click(function() {
    $(".jib").slideToggle();
  });
  $(".clickable3").click(function() {
    $(".box").hide();
  });

  $(".reset-btn").click(function() {
    $(".initially-hidden").hide();
  });

  $(".reset-btn").click(function() {
    $(".reset-show").show();
  });



});
