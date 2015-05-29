// document.getElementById("play_bt").addEventListener("click",getInput);
function getInput() {
  console.log("Please choose either 'rock', 'paper', or 'scissors'.")
  return prompt();
}

function randomPlay() {
  var randomNumber = Math.random();
  if (randomNumber < 0.33) {
      return "rock";
  } else if (randomNumber < 0.66) {
      return "paper";
  } else {
      return "scissors";
  }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
  // Write an expression that operates on a variable called move
  // If a move has a value, your expression should evaluate to that value.
  // However, if move is not specified / is null, your expression should equal getInput().
  return (move || getInput());

}

function getComputerMove(move) {
  // Write an expression that operates on a variable called move
  // If a move has a value, your expression should evaluate to that value.
  // However, if move is not specified / is null, your expression should equal randomPlay().
  return (move || randomPlay());
}

// document.getElementById("result_bt").addEventListener("onClick",getWinner);
function getWinner(playerMove,computerMove) {
  var winner;
  // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
  // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
  // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
  if(playerMove == 'rock' && computerMove == 'scissors'){
      winner = 'player';
  } else if (playerMove == 'paper' && computerMove == 'rock'){
      winner = 'player';
  } else if (playerMove == 'scissors' && computerMove == 'paper'){
      winner = 'player';
  } else if (playerMove == computerMove){
      winner = 'tie';
  } else {
      winner = 'computer';
  }
  return winner;
}
//were calling specifing function
document.getElementById("rock_bt").addEventListener("click", getPlayerMove("rock"));

document.getElementById("paper_bt").addEventListener("click", getPlayerMove("paper"));
//different ways of writting it. this one is anonymous function 
document.getElementById("scissors_bt").addEventListener("click", function() {
 var playerMove = getPlayerMove("scissors");
 var computerMove = getComputerMove();
 var winner = getWinner(playerMove,computerMove);
 alert(winner);
});
document.getElementById("computer_bt").addEventListener("click", function(){
 
});


// function playToFive() {
//   console.log("Let's play Rock, Paper, Scissors");
//   var playerWins = 0;
//   var computerWins = 0;
//   var currentWinner = "";
//   var playerMove = "";
//   var computerMove = "";
//   // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
//   while(playerWins < 5 && computerWins < 5){
//       playerMove = getPlayerMove();
//       computerMove = getComputerMove();
//       currentWinner = getWinner(playerMove,computerMove);
//    if(currentWinner == 'player'){
//        playerWins++;
//    } else if(currentWinner == 'computer'){
//        computerWins++;
//    }  
//    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
//    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
//   }
//   return [playerWins, computerWins];
// }function playTo(x) {
//   console.log("Let's play Rock, Paper, Scissors");
//   var playerWins = 0;
//   var computerWins = 0;
//   var currentWinner = "";
//   var playerMove = "";
//   var computerMove = "";
//   // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won x times.
//   while(playerWins < x && computerWins < x){
//       playerMove = getPlayerMove();
//       computerMove = getComputerMove();
//       currentWinner = getWinner(playerMove,computerMove);
//    if(currentWinner == 'player'){
//        playerWins++;
//    } else if(currentWinner == 'computer'){
//        computerWins++;
//    }  
//    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
//    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
//   }
//   return [playerWins, computerWins];
// }
