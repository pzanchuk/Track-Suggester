$(document).ready(function() {
  $("#mainform").submit(function(event) {

    var inputName = $("input#name").val();
    var inputCity = $("input#city").val();
    var interest = parseInt($("input:radio[name=interest]:checked").val());
    var dislike = parseInt($("#dislike").val());
    var experience = $("#experience").val();

    $(".result").show();
    $(".result2").show();
    $(".city").text(inputCity);
    $(".name").text(inputName);



    if(experience === "1"){
      $(".experience").text("do");
    }else if(experience === "2"){
      $(".experience").text("don't");
    }else{
      $(".result2").hide();
    }



    if(interest === 1 && dislike === 2 || interest === 1 && dislike === 3){
      $(".language").text("PHP along with CSS");
    }else if( interest === 2 && dislike === 1 || interest === 2 && dislike === 3){
      $(".language").text("C# and .NET");
    }else if(interest === 3 && dislike === 2 || interest === 3 && dislike === 3){
      $(".language").text("HTML5, PHP, JQuery");
    }else{
      $(".language").text("Java and Android");
    }

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
