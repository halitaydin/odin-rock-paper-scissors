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
let counter = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const round = document.getElementById("round");
const player = document.getElementById("playerScore");
const computer = document.getElementById("computerScore");
const draw = document.getElementById("drawScore");
const lastAction = document.getElementById("lastAction");
const result = document.getElementById("result");

const play = (e) => {
  const playerSelection = e.target.textContent.toLowerCase();
  const computerSelection = computerPlay();

  if (counter < 5) {
    counter += 1;
    if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore += 1;
      lastAction.textContent = "Last Action: Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore += 1;
      lastAction.textContent = "Last Action: Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore += 1;
      lastAction.textContent = "Last Action: Paper beats Rock";
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      computerScore += 1;
      lastAction.textContent = "Last Action: Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore += 1;
      lastAction.textContent = "Last Action: Rock beats Scissors";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore += 1;
      lastAction.textContent = "Last Action: Scissors beats Paper";
    } else {
      drawScore += 1;
      lastAction.textContent = "Last Action: Draw";
    }
  }

  if (counter === 5) {
    if (playerScore > computerScore) {
      result.textContent = "Final Result: You Win!";
    } else if (playerScore < computerScore) {
      result.textContent = "Final Result: You Lose!";
    } else {
      result.textContent = "Final Result: Draw";
    }
    btn.style.display = "block";
  }

  round.textContent = `Round: ${counter}`;
  player.textContent = `Player: ${playerScore}`;
  computer.textContent = `Computer: ${computerScore}`;
  draw.textContent = `Draw: ${drawScore}`;
};

rock.addEventListener("click", play);
paper.addEventListener("click", play);
scissors.addEventListener("click", play);

let btn = document.createElement("button");
btn.id = "reset";
btn.textContent = "Reset";
document.body.appendChild(btn);
btn.style.display = "none";

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  round.textContent = `Round: 0`;
  player.textContent = `Player: 0`;
  computer.textContent = `Computer: 0`;
  draw.textContent = `Draw: 0`;
  lastAction.textContent = "Last Action: ";
  result.textContent = "Final Result: ";
  counter = 0;
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
  btn.style.display = "none";
});
