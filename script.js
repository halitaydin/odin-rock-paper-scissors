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
let drawScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const player = document.getElementById("playerScore");
const computer = document.getElementById("computerScore");
const draw = document.getElementById("drawScore");
const lastAction = document.getElementById("lastAction");
const result = document.getElementById("result");

const play = (e) => {
  const playerSelection = e.target.alt;
  const computerSelection = computerPlay();

  if (playerScore < 5 || computerScore < 5) {
    if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore += 1;
      lastAction.textContent = "Paper vs Rock --> Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore += 1;
      lastAction.textContent = "Rock vs Scissors --> Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore += 1;
      lastAction.textContent = "Paper vs Rock --> Paper beats Rock";
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      computerScore += 1;
      lastAction.textContent = "Scissors vs Paper --> Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore += 1;
      lastAction.textContent = "Rock vs Scissors --> Rock beats Scissors";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore += 1;
      lastAction.textContent = "Scissors vs Paper --> Scissors beats Paper";
    } else {
      drawScore += 1;
      lastAction.textContent = `${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } vs ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      } --> Draw`;
    }
  }

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      result.style.color = '#fff'
      result.textContent = "You Win!";
    } else if (playerScore < computerScore) {
      result.style.color = '#f22626'
      result.textContent = "You Lose!";
    } else {
      result.textContent = "Draw";
    }
    btn.style.display = "block";
    rock.removeEventListener("click", play);
    paper.removeEventListener("click", play);
    scissors.removeEventListener("click", play);
  }

  player.textContent = `Player ${playerScore}`;
  computer.textContent = `${computerScore} Computer`;
  draw.textContent = `Draw: ${drawScore}`;
};

rock.addEventListener("click", play);
paper.addEventListener("click", play);
scissors.addEventListener("click", play);

let btn = document.querySelector(".reset");
btn.style.display = "none";

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  rock.addEventListener("click", play);
  paper.addEventListener("click", play);
  scissors.addEventListener("click", play);
  player.textContent = `Player 0`;
  computer.textContent = `0 Computer`;
  draw.textContent = ``;
  lastAction.textContent = "";
  result.textContent = "";
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
  btn.style.display = "none";
});
