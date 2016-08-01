$(document).ready(function(){

  var bankRoll = 100;
  var betAmount;
  var the_guess;
  var errorBet = $("#errorBet");
  var errorGuess = $("#errorGuess");
  var result = $("#result");
  var statusBet;
  var statusGuess;


  function runGame(){
    if(bankRoll > 0){
      promptBet();
    }
    else{
      alert("Sorry you lost all you money. To refresh to play again");
    }
  }

  function generateRandomNum(){
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  }

  function promptBet(){
    betAmount = $("#betAmount").val();
    betAmount = parseInt(betAmount);
    the_guess = $("#the_guess").val(); 
    the_guess = parseInt(the_guess);

    checkBet(betAmount);
    checkGuess(the_guess);

    if (statusBet == true && statusGuess  == true) {
      // $(".form-guess").show();
      // $(".form-bet").hide();
      // promptGuess();
      getResult();
    }
  }

  function checkBet(bet){
    if(isNaN(bet)){
      errorBet.text("Your bet is not a number");
      return statusBet = false;
    }
    if (bet > 10 || bet < 5 ){
      errorBet.text("Must be between $5 and $10");
      return statusBet = false;
    }
    if (bet > bankRoll){
      errorBet.text("All in, $" + bankRoll );
      betAmount = bankRoll;
      return statusBet = true;
    }
    else{
      errorBet.text("");
      return statusBet = true;
    }
  }

  // function promptGuess(){
  //   console.log(the_guess);
  //   the_guess = $("#the_guess").val(); 
  //   the_guess = parseInt(the_guess);
  //   $("#the_guess").on("")
  //   checkGuess(the_guess);
  //   if (statusGuess  == true){
  //     $(".form-guess").hide();
  //     getResult();
  //   }
  // }

  function checkGuess(guess){
    if(isNaN(guess)){
      errorGuess.text("Your guess is not a number");
      return statusGuess = false;
    }
    if ( (guess > 10) || (guess < 1)){
      errorGuess.text("Must be between 1 and 10");
      return statusGuess = false;
    }
    else{
      errorGuess.text("");
      return statusGuess = true;
    }
  }

  function getResult(){
      the_answer = generateRandomNum();
      console.log(the_answer);
      decision = isCorrect(the_guess, the_answer);
      console.log(decision);
      changeBankRoll(decision);
      displayResult(decision);
      $(".form-bet").show();
  }

  function isCorrect(guess, answer){
    if (guess === answer){
      return true;
    }
    else {
      return false;
    }
  }

  function changeBankRoll(decision){
    if (decision){
      bankRoll += parseInt(betAmount);
    }
    else {
      bankRoll -= parseInt(betAmount);
    }
  }

  function displayResult(decision){
    if (decision){
      result.text("You won $" + betAmount + "!" + " You have $" + bankRoll + " now.");
      return false;
    }
    else {
      result.text("You lost $" + betAmount + ". Your guess is: " + the_guess + " The answer is: " + the_answer + "." + " You have $" + bankRoll + " now.");
      return false;
    }
  }



  // $(".form-guess").hide();
  
  $("form").on('click', 'button', function(){
    event.preventDefault();
    runGame();

  });    
  
});