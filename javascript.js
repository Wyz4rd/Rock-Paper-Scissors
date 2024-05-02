// declare player score variables

let humanScore = 0;
let computerScore = 0;

// use a function to get a random number from the computer and return it

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    // console.log(computerChoice)
    if (computerChoice === 1) {
        computerChoice = 3;
        console.log("computer chose scissors")
    } else if (computerChoice === 3) {
        computerChoice = 1;
        console.log("computer chose rock")
    } else if (computerChoice === 2){
        computerChoice = 2;
        console.log("computer chose paper")
    }
    return computerChoice;
}

//get user input and return it as a number

function getHumanChoice() {
    let userInput = prompt("choose rock, paper or scissors").toLowerCase()

    if (userInput === "rock"){
        console.log("you chose rock")
        userInput = 1;
    } else if (userInput === "paper"){
        console.log("you chose paper")
        userInput = 2;
    } else if (userInput === "scissors"){
        console.log("you chose scissors")
        userInput = 3;
    } else {
        throw new Error(alert("Game over, please refresh page to start again"))
    }
    return userInput;
}



//compare results to give a score

//   Rock = 1
//   Paper = 2
//   scissors = 3

function playRound(userInput, computerChoice){
    if (userInput === computerChoice){
        console.log("Tied!")
        console.log("Player score is " + humanScore + " Computer score is " + computerScore)
    } else if (computerChoice === 3 && userInput === 1){
        humanScore++;
        console.log("you win this round")
        console.log("Player score is " + humanScore + " Computer score is " + computerScore)
    } else if (computerChoice === 3 && userInput === 2){
        computerScore++;
        console.log("you lose this round")
        console.log("Player score is " + humanScore + " Computer score is " + computerScore)
    } else if (computerChoice === 1 && userInput === 2){
        humanScore++;
        console.log("you win this round")
        console.log("Player score is " + humanScore + " Computer score is " + computerScore)
    } else if (computerChoice === 1 && userInput === 3){
        computerScore++;
        console.log("you lose this round")
        console.log("Player score is " + humanScore + " Computer score is " + computerScore)
    } else if (computerChoice === 2 && userInput === 1){
        computerScore++;
        console.log("you lose this round")
        console.log("Player score is " + humanScore + " Computer score is " + computerScore)
    } else if (computerChoice === 2 && userInput === 3){
        humanScore++;
        console.log("you win this round")
        console.log("Player score is " + humanScore + " Computer score is " + computerScore)
    } 
}



function playGame(){
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
}
playGame()
if (humanScore > computerScore) {
    console.log("You win!")
} else if (humanScore < computerScore){
    console.log("You lose!")
} 
else {
    console.log("Its a draw! Please refresh the page to start again.")
}