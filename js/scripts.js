$(document).ready(function() {
  $("#track form").submit(function(event) {
    var question1 = $("select#question1").val();
    var question2 = $("select#question2").val();
    var question3 = $("select#question3").val();
    var question4 = $("select#question4").val();
    var question5 = $("select#question5").val();


    if(question5 === 'mobile' && question1 === 'large-comp'){
      var fadeSpeed = 400;
      $("#suggestion2").fadeOut();
      $("#suggestion3").fadeOut();
      $("#suggestion4").fadeOut();
      $("#suggestion5").fadeOut();
      var name = $("input#name").val();
      $(".name").text(name);
      $("#suggestion1").show();
      event.preventDefault();
    }else if((question2 === 'creative' && question5 === 'desktop' && question4 === 'server')||(question3 === 'simple' && question5 === 'desktop' && question4 === 'server') || (question1 === 'small-comp' && question5 === 'mobile')){
      var fadeSpeed = 400;
      $("#suggestion1").fadeOut();
      $("#suggestion3").fadeOut();
      $("#suggestion4").fadeOut();
      $("#suggestion5").fadeOut();
      var name = $("input#name").val();
      $(".name").text(name);
      $("#suggestion2").show();
      event.preventDefault();
    }else if((question2 === 'structured' && question3 === 'complicated' && question5 === 'desktop') || (question3 === 'complicated' && question4 === 'server')){
      var fadeSpeed = 400;
      $("#suggestion1").fadeOut();
      $("#suggestion2").fadeOut();
      $("#suggestion4").fadeOut();
      $("#suggestion5").fadeOut();
      var name = $("input#name").val();
      $(".name").text(name);
      $("#suggestion3").show();
      event.preventDefault();
    }else if(question2 === 'creative' && question4 === 'client' && question5 === 'desktop'){
      var fadeSpeed = 400;
      $("#suggestion1").fadeOut();
      $("#suggestion2").fadeOut();
      $("#suggestion3").fadeOut();
      $("#suggestion5").fadeOut();
      var name = $("input#name").val();
      $(".name").text(name);
      $("#suggestion4").show();
      event.preventDefault();
    }else if(question1 === '' || question2 === '' || question3 === '' || question4 === '' || question5 === ''){
      var fadeSpeed = 400;
      $("#suggestion1").fadeOut();
      $("#suggestion2").fadeOut();
      $("#suggestion3").fadeOut();
      $("#suggestion4").fadeOut();
      var name = $("input#name").val();
      $(".name").text(name);
      $("#suggestion5").show();
      event.preventDefault();
    }else{
      $(".name").text(name);
      $("#suggestion1").show();
      $("#suggestion4").show();
      event.preventDefault();
    }

  });
});
