const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const rockButton = document.createElement("button");
const startButton = document.querySelector("#playButton");
const score = document.createElement("div");
const playerScoreView = document.createElement("p");
const computerScoreView = document.createElement("p");
const scoreMessage = document.createElement("p");

function getComputerChoice() {
  const results = ["paper", "scissors", "rock"];
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = results[randomNumber];
  return computerChoice;
}

function getHumanChoice() {
  const promptResult = prompt("Scissors, Paper, or Rock?");
  if (!promptResult) return "rock";
  const choice = promptResult.trim().toLowerCase();
  if (choice === "scissors") return "scissors";
  if (choice === "paper") return "paper";
  return "rock";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Draw! You both chose ${humanChoice}`);
    scoreMessage.textContent = `Draw! You both chose ${humanChoice}`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock!");
    humanScore += 1;
    scoreMessage.textContent = "You win! Paper beats rock!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors!");
    humanScore += 1;
    scoreMessage.textContent = "You win! Rock beats scissors!";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper!");
    humanScore += 1;
    scoreMessage.textContent = "You win! Scissors beats paper!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Rock loses to paper!");
    computerScore += 1;
    scoreMessage.textContent = "You lose! Rock loses to paper!";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Paper loses to scissors!");
    computerScore += 1;
    scoreMessage.textContent = "You lose! Paper loses to scissors!";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Scissors loses to rock!");
    computerScore += 1;
    scoreMessage.textContent = "You lose! Scissors loses to rock!";
  }
  computerScoreView.textContent = `Computer Score: ${computerScore}`;
  playerScoreView.textContent = `Player Score: ${humanScore}`;
}

function playGame() {
  document.body.removeChild(startButton);

  computerScoreView.textContent = `Computer Score: ${computerScore}`;
  playerScoreView.textContent = `Player Score: ${humanScore}`;

  paperButton.type = "button";
  scissorsButton.type = "button";
  rockButton.type = "button";

  paperButton.id = "paper";
  scissorsButton.id = "scissors";
  rockButton.id = "rock";

  paperButton.textContent = "Paper";
  scissorsButton.textContent = "Scissors";
  rockButton.textContent = "Rock";

  score.appendChild(playerScoreView);
  score.appendChild(computerScoreView);
  score.appendChild(scoreMessage);
  document.body.appendChild(score);
  document.body.appendChild(paperButton);
  document.body.appendChild(scissorsButton);
  document.body.appendChild(rockButton);

  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log(`You win! Player ${humanScore}-${computerScore} Computer`);
  } else if (humanScore < computerScore) {
    console.log(`You lose! Player ${humanScore}-${computerScore} Computer`);
  } else {
    console.log(`It's a tie! Player ${humanScore}-${computerScore} Computer`);
  }
}
