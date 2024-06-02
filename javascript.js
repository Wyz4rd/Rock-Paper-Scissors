// declare player score variables

let humanScore = 0;
let computerScore = 0;
let userInput = "";
let computerChoice = "";

const buttonRock = document.getElementById("buttonRock");
const buttonPaper = document.getElementById("buttonPaper");
const buttonScissors = document.getElementById("buttonScissors");
const buttons = document.getElementById('buttons')
const text = document.getElementById("text");
const rps = document.getElementById('rps');
const computerText = document.getElementById('computerText');
const startButton = document.getElementById('start')



buttonRock.addEventListener('click', function(){
    document.getElementById('text').innerHTML = "You chose Rock!";
    computerChoice = getComputerChoice();
    document.getElementById('computerText').innerHTML =  "Computer chose: " + computerChoice;
    userInput = "Rock";
    playRound()
    gameScore()
});

buttonPaper.addEventListener('click', function(){
    document.getElementById('text').innerHTML = "You chose Paper!";
    computerChoice = getComputerChoice();
    document.getElementById('computerText').innerHTML =  "Computer chose: " + computerChoice;
    userInput = "Paper";
    playRound()
    gameScore()

});

buttonScissors.addEventListener('click', function(){
    document.getElementById('text').innerHTML = "You chose Scissors!";
    computerChoice = getComputerChoice();
    document.getElementById('computerText').innerHTML =  "Computer chose: " + computerChoice;
    userInput = "Scissors";
    gameScore()
    playRound()
   
});



// use a function to get a random number from the computer and return it

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    if (computerChoice === 1) {
        computerChoice = "Rock";
    } else if (computerChoice === 3) {
        computerChoice = "Scissors";
    } else if (computerChoice === 2){
        computerChoice = "Paper";
    }
    return computerChoice;
}


//compare results to give a score

//   Rock = 1
//   Paper = 2
//   scissors = 3

function playRound(){
    
     if (computerChoice === "Scissors" && userInput === "Rock"){
        humanScore++;
        console.log("you win this round")
        console.log("Player score is " + humanScore + " Computer score is " + computerScore)
        document.getElementById('text').innerHTML = "Player score is " + humanScore
        document.getElementById('computerText').innerHTML = "Computer score is " + computerScore;
    } else if (computerChoice === "Scissors" && userInput === "Paper"){
        computerScore++;
        console.log("you lose this round")
        console.log("Player score is " + humanScore + " Computer score is " + computerScore)
        document.getElementById('text').innerHTML = "Player score is " + humanScore
        document.getElementById('computerText').innerHTML = "Computer score is " + computerScore;
    } else if (computerChoice === "Rock" && userInput === "Paper"){
        humanScore++;
        console.log("you win this round")
        console.log("Player score is " + humanScore + " Computer score is " + computerScore)
    } else if (computerChoice === "Rock" && userInput === "Scissors"){
        computerScore++;
        console.log("you lose this round")
        console.log("Player score is " + humanScore + " Computer score is " + computerScore)
        document.getElementById('text').innerHTML = "Player score is " + humanScore
        document.getElementById('computerText').innerHTML = "Computer score is " + computerScore;
    } else if (computerChoice === "Paper" && userInput === "Rock"){
        computerScore++;
        console.log("you lose this round")
        console.log("Player score is " + humanScore + " Computer score is " + computerScore)
        document.getElementById('text').innerHTML = "Player score is " + humanScore
        document.getElementById('computerText').innerHTML = "Computer score is " + computerScore;
    } else if (computerChoice === "Paper" && userInput === "Scissors"){
        humanScore++;
        console.log("you win this round")
        console.log("Player score is " + humanScore + " Computer score is " + computerScore)
        document.getElementById('text').innerHTML = "Player score is " + humanScore
        document.getElementById('computerText').innerHTML = "Computer score is " + computerScore;
    } else if (userInput === computerChoice){
        console.log("Tied!")
        document.getElementById('text').innerHTML = "Player score is " + humanScore
        document.getElementById('computerText').innerHTML = "Computer score is " + computerScore;
    }
    }


let gameScore = function(){
    if (humanScore === 4){
        console.log("You win, Congratulations")
        document.getElementById('buttons').innerHTML = 
        "<div id='textBox'><span style='font-size:60px'>You win, Congratulations</span></div>";
    } else if (computerScore === 4){
        console.log("computer wins")
        document.getElementById('buttons').innerHTML = 
        "<div id='textBox'><span style='font-size:60px'>Computer wins, try again!</span></div>";
    } 
    else if (humanScore || computerScore < 4){
    console.log("play again")
    } 
}

const restartBtn = document.getElementById("restart");

function handleClick() {
  window.location.reload();
}

restartBtn.addEventListener("click", handleClick);
