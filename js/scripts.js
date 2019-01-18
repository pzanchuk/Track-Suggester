$(document).ready(function() {
  $("#mainform").submit(function(event) {

    var inputName = $("input#name").val();
    var inputCity = $("input#city").val();
    var interest = $("input:radio[name=interest]:checked").val();
    var dislike = parseInt($("#dislike").val());
    var experience = $("#experience").val();


    if(interest === "1"){
      alert("correct");
    }else{
      alert("incorrect");
    }


    $(".city").text(inputCity);
    $(".name").text(inputName);

      event.preventDefault();
  });

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
