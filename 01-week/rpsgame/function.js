// document.getElementById("rock_bt").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });


// document.getElementById("play_bt").addEventListener("click",function(){alert("Please choose rock, paper or scissors?");});

document.getElementById("play_bt").addEventListener("click",getInput);

document.getElementById("rock_bt").addEventListener("onClick", getPlayerMove);
function rock() {
	console.log("Player choose rock")
}

document.getElementById("paper_bt").addEventListener("onClick", getPlayerMove);
function paper() {
	console.log("Player choose paper")
}

document.getElementById("scissors_bt").addEventListener("onClick", getPlayerMove);
function scissors() {
	console.log("Player choose scissors")
}

document.getElementById("computer_bt").addEventListener("onClick",getComputerMove);
function randomPlay() {
	console.log()
}


