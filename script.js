function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === null) {
    return "Cancelled";
  }
  const player = playerSelection.toLowerCase();

  if (player === "rock" || player === "paper" || player === "scissors") {
    if (player === "rock" && computerSelection === "paper") {
      computerScore += 1;
      return "You Lose! Paper beats Rock";
    } else if (player === "rock" && computerSelection === "scissors") {
      playerScore += 1;
      return "You Win! Rock beats Scissors";
    } else if (player === "paper" && computerSelection === "rock") {
      playerScore += 1;
      return "You Win! Paper beats Rock";
    } else if (player === "paper" && computerSelection === "scissors") {
      computerScore += 1;
      return "You Lose! Scissors beats Paper";
    } else if (player === "scissors" && computerSelection === "rock") {
      computerScore += 1;
      return "You Lose! Rock beats Scissors";
    } else if (player === "scissors" && computerSelection === "paper") {
      playerScore += 1;
      return "You Win! Scissors beats Paper";
    } else {
      return "Draw";
    }
  } else {
    return "You have to make a choice!";
  }
}

function playerSelection() {
  return prompt("Choose one of them: Rock | Paper | Scissors");
}
const computerSelection = computerPlay;

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection(), computerSelection()));
  }
  if (playerScore > computerScore) {
    console.log("Final Result: You Win!");
  } else if (playerScore < computerScore) {
    console.log("Final Result: You Lose!");
  } else {
    console.log("Final Result: Draw");
  }
}
game();
