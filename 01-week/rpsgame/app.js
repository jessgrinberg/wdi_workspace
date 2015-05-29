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
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    /* Your Expression */ 

       
      return move || getInput(); 
};
// or I could write==> var player = move || getInput(); return player; 
//or maybe var move = move || getIpunt(); return move;
//Note to myself: Why did I use this comparator? we might write the expression x = x || 10;
// If x has some 'truthy' value, the OR operator will evaluate to x,
// so it would be as if we wrote x = x. 
//However, if x were null, the OR operator would evaluate to 10 
//(because null is 'falsey'). 
//It's as if we've said "If x doesn't already have a value assigned,set it equal to 10". 
//For that reason, this kind of operation is often called 'conditional assignment'

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    /* Your Expression */ 
    return move || randomPlay(); 
};

// or I could write==> var computer = move || randomPlay(); return computer; 


function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var winner;
    if (playerMove === computerMove) {
        winner = "tie";
    }
    else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player ";
    }
    else if (playerMove === "rock" && computerMove === "paper") {
        winner = "computer";
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    }
    else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "computer";
    }
   else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    }
    else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "computer";
    }  
};

// function playToFive() {
//     console.log("Let's play Rock, Paper, Scissors");
//     var playerWins = 0;
//     var computerWins = 0;

//     var playerMove = "";
//   var computerMove = "";

//     // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
//     /* YOUR CODE HERE */
//     while (playerWins <5 || computerWins<5){
// // for (var i=0; i<5; i++){
//         if (winner === "player") {
//             playerWins ++;
//          console.log('Player chose ' + playerWins + ' while Computer chose ' + computerWins);
//          playerWins ++;
//         }
//         else if (winner === "computer") {
//             console.log('Player chose ' + playerWins + ' while Computer chose ' + computerWins);
//             computerWins ++;
//         }
//         else if (winner ="tie") {
//             console.log("It's a tie, no one wins");
//         }
//         else if ( playerWins === 5 || computerWins ===5) {
//             console.log('Player Finale score  ' + playerWins + ' while Computer Finale score ' + computerWins )
//         }
//     }
//     return [playerWins, computerWins];
// }
// playToFive();

