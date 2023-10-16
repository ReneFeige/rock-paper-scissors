function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
}
  
function game() {
    let roundsPlayed = 0;
    let playerScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {

        roundsPlayed++
        const playerSelection = prompt("Rock|Paper|Scissors \nMake a choice");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        

        function playRound(playerSelection, computerSelection) {
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerSelection.toLowerCase();

            if (playerSelection === computerSelection) {
                return ("It's a tie! You both picked " + playerSelection);
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore++
                return ("You win! Rock beats scissors");
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                computerScore++
                return ("You lose! Paper beats rock");
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScore++
                return ("You win! Paper beats rock");
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                computerScore++
                return ("You lose! Scissors beat paper");
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScore++
                return ("You win! Scissors beat paper");
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                computerScore++
                return ("You lose! Rock beats scissors");
            }
        }
    }

    function win() {
        if (playerScore === computerScore) {
            return ("You tied with the Computer. Try Again!");
        } else if (playerScore > computerScore) {
            return ("Winner! You beat the Computer!");
        } else if (playerScore < computerScore){
            return ("Loser! You lost to the Computer");
        }
    }

console.log("\nAfter " + roundsPlayed + " rounds: " + win());
}

game();