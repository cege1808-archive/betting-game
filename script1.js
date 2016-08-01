$(document).ready(function(){

  var bankRoll = 100;
  var betAmount;
  var the_guess;

  $(".form-guess").hide();

  $("form").on('submit', function(event){
    event.preventDefault();
    if(bankRoll > 0){
      betAmount = $("#betAmount").val();
      console.log(parseInt(betAmount));
      the_guess = $("#the_guess").val();
      console.log(parseInt(the_guess));
      bankRoll -= 20;
      console.log(bankRoll);
    }
    else{
      console.log("You lose")
    }
  });


});

