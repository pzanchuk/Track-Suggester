$(document).ready(function() {





  $("button#php").click(function() {
    $(".csharp").hide();
    $(".java").hide();
    $(".css").hide();
    $(".php").fadeToggle();
  });

  $("button#csharp").click(function() {
    $(".php").hide();
    $(".java").hide();
    $(".css").hide();
    $(".csharp").fadeToggle();
  });

  $("button#java").click(function() {
    $(".csharp").hide();
    $(".php").hide();
    $(".css").hide();
    $(".java").fadeToggle();
  });

  $("button#css").click(function() {
    $(".csharp").hide();
    $(".java").hide();
    $(".php").hide();
    $(".css").fadeToggle();
  });



});
