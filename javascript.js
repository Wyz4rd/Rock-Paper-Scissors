// declare player score variables
let humanScore = 0;
let computerScore = 0;

// use a function to get a random number from the computer and return it

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    // console.log(computerChoice)
    if (computerChoice === 1) {
        computerChoice = 2;
        console.log("computer chose scissors")
    } else if (computerChoice === 3) {
        computerChoice = -1;
        console.log("computer chose rock")
    } else if (computerChoice === 2){
        computerChoice = 0.5;
        console.log("computer chose paper")
    }
    console.log(computerChoice);
    return computerChoice;
}


//get user input and return it as a number

function getHumanChoice() {
    let userInput = prompt("choose").toLowerCase()

    if (userInput === "rock"){
        console.log("you chose rock")
        userInput = -1;
    } else if (userInput === "paper"){
        console.log("you chose paper")
        userInput = 0.5;
    } else if (userInput === "scissors"){
        console.log("you chose scissors")
        userInput = 2;
    }
    getHumanChoice = userInput;
    // console.log(userInput)
    return userInput;
}




const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//compare results to give a score
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("Tied!")
    } else if (humanChoice /= computerChoice){
        if (humanChoice < computerChoice){
            console.log("you lose this round")
        } else if (humanChoice > computerChoice)
            console.log("you win this round")
        
    } else {
        // console.log("You lose this round")
    }
}

playRound(humanSelection, computerSelection);


