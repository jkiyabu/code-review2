$(document).ready(function() {
  $("#track form").submit(function(event) {
    var question1 = $("select#question1").val();
    var question2 = $("select#question2").val();
    var question3 = $("select#question3").val();
    var question4 = $("select#question4").val();
    var question5 = $("select#question5").val();


    if(question1 === 'small-comp' && question5 === 'mobile'){
      $("#suggestion1").show();
      event.preventDefault();
    }else if((question2 === 'creative' && question5 === 'desktop' && question4 === 'server')||(question3 === 'simple' && question5 === 'desktop' && question4 === 'server')){
      $("#suggestion2").show();
      event.preventDefault();
    }else if((question2 === 'structured' && question5 === 'desktop') || (question3 === 'complicated' && question5 === 'desktop')){
      $("#suggestion3").show();
      event.preventDefault();
    }else if(question2 === 'creative' && question4 === 'client' && question5 === 'desktop'){
      $("#suggestion4").show();
      event.preventDefault();
    }else if(question1 === '' || question2 === '' || question3 === '' || question4 === '' || question5 === ''){
      $("#suggestion5").show();
      event.preventDefault();
    }else{
      $("#suggestion4").show();
      event.preventDefault();
    }

  });
});
