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
  const player = playerSelection.toLowerCase();

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
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const round = document.getElementById('round');
const result = document.getElementById('result');

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);

let counter = 0;

function game() {
    counter += 1;
    round.textContent = `Round: ${counter}`;

  if (playerScore > computerScore) {
    result.textContent = "Final Result: You Win!"
  } else if (playerScore < computerScore) {
    result.textContent ="Final Result: You Lose!"
  } else {
    result.textContent = "Final Result: Draw";
  }
}
