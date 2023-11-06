const rockBtn = document.querySelector("#Rock");
const paperBtn = document.querySelector("#Paper");
const scissorsBtn = document.querySelector("#Scissors");
const newText = document.querySelector("#changeText");
const winner = document.querySelector("#whoHasWon");

let playerSelection = null;
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;
let gameEnded = false;

function game() {
    if (gameEnded) result;

    function getComputerChoice() {
        const options = ["Rock", "Paper", "Scissors"];
        const randomChoice = Math.floor(Math.random() * options.length);
        return options[randomChoice];
    }
    
    const computerSelection = getComputerChoice();

    function playRound() {
        if (playerSelection === computerSelection) {
            newText.style.color = "blue";
            return ("It's a tie! You both picked " + playerSelection);
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            playerScore++
            newText.style.color = "green";
            return ("You win! Rock beats scissors");
        } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            computerScore++
            newText.style.color = "red";
            return ("You lose! Paper beats rock");
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            playerScore++
            newText.style.color = "green";
            return ("You win! Paper beats rock");
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            computerScore++
            newText.style.color = "red";
            return ("You lose! Scissors beats paper");
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            playerScore++
            newText.style.color = "green";
            return ("You win! Scissors beats paper");
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            computerScore++
            newText.style.color = "red";
            return ("You lose! Rock beats scissors");
        }
    }

    newText.textContent = playRound();

    if (roundsPlayed >= 5) {
        winner.textContent = win();
        gameEnded = true;
        removeEventListeners();
    }
}

function removeEventListeners() {
    rockBtn.removeEventListener("click", rockButtonClick);
    paperBtn.removeEventListener("click", paperButtonClick);
    scissorsBtn.removeEventListener("click", scissorsButtonClick);
}

function win() {
    if (playerScore === computerScore) {
        winner.style.color = "blue";
        return ("You tied with the Computer. Try Again!");
    } else if (playerScore > computerScore) {
        winner.style.color = "green";
        return ("Winner! You beat the Computer! Play Again!");
    } else if (playerScore < computerScore){
        winner.style.color = "red";
        return ("You lost to the Computer. Try Again!");
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    gameEnded = false;

    winner.style.color = "black";
    winner.textContent = "Rock Paper Scissors Game!";
    newText.style.color = "black";
    newText.textContent = "Make your choice!";

    rockBtn.addEventListener("click", rockButtonClick);
    paperBtn.addEventListener("click", paperButtonClick);
    scissorsBtn.addEventListener("click", scissorsButtonClick);
}


function rockButtonClick() {
    playerSelection = "Rock";
    roundsPlayed++;
    game();
}

function paperButtonClick() {
    playerSelection = "Paper";
    roundsPlayed++;
    game();
}

function scissorsButtonClick() {
    playerSelection = "Scissors";
    roundsPlayed++;
    game();
}

rockBtn.addEventListener("click", rockButtonClick);
paperBtn.addEventListener("click", paperButtonClick);
scissorsBtn.addEventListener("click", scissorsButtonClick);

winner.addEventListener("click", () => {
    resetGame();
});