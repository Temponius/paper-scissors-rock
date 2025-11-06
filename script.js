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
  const randomNumber = Math.floor(Math.random() * 3);
  return results[randomNumber];
}

let humanChoiceCallback = null;

function getHumanChoice(callback) {
  humanChoiceCallback = callback;
}

paperButton.onclick = () => {
  if (humanChoiceCallback) {
    const cb = humanChoiceCallback;
    humanChoiceCallback = null;
    cb("paper");
  }
};

scissorsButton.onclick = () => {
  if (humanChoiceCallback) {
    const cb = humanChoiceCallback;
    humanChoiceCallback = null;
    cb("scissors");
  }
};

rockButton.onclick = () => {
  if (humanChoiceCallback) {
    const cb = humanChoiceCallback;
    humanChoiceCallback = null;
    cb("rock");
  }
};

let humanScore = 0;
let computerScore = 0;

function updateScoreViews() {
  computerScoreView.textContent = `Computer Score: ${computerScore}`;
  playerScoreView.textContent = `Player Score: ${humanScore}`;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    scoreMessage.textContent = `Draw! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore += 1;
    scoreMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
  } else {
    computerScore += 1;
    scoreMessage.textContent = `You lose! ${humanChoice} loses to ${computerChoice}!`;
  }

  updateScoreViews();
}

function playGame() {
  humanScore = 0;
  computerScore = 0;
  updateScoreViews();

  if (startButton && startButton.parentNode) {
    startButton.parentNode.removeChild(startButton);
  }
  const existingPlayAgain = document.querySelector("#playAgainButton");
  if (existingPlayAgain && existingPlayAgain.parentNode) {
    existingPlayAgain.parentNode.removeChild(existingPlayAgain);
  }

  paperButton.type = "button";
  scissorsButton.type = "button";
  rockButton.type = "button";

  paperButton.id = "paper";
  scissorsButton.id = "scissors";
  rockButton.id = "rock";

  paperButton.textContent = "Paper";
  scissorsButton.textContent = "Scissors";
  rockButton.textContent = "Rock";

  // Attach score display
  if (!document.body.contains(score)) {
    score.appendChild(playerScoreView);
    score.appendChild(computerScoreView);
    score.appendChild(scoreMessage);
    document.body.appendChild(score);
  }

  // Append game buttons
  if (!document.body.contains(paperButton))
    document.body.appendChild(paperButton);
  if (!document.body.contains(scissorsButton))
    document.body.appendChild(scissorsButton);
  if (!document.body.contains(rockButton))
    document.body.appendChild(rockButton);

  let round = 0;

  function nextRound() {
    if (round < 5) {
      getHumanChoice(function (humanChoice) {
        playRound(humanChoice, getComputerChoice());
        round++;
        nextRound();
      });
    } else {
      if (humanScore > computerScore) {
        scoreMessage.textContent = `You win Rock Paper Scissors! Player ${humanScore} - ${computerScore} Computer.`;
      } else if (computerScore > humanScore) {
        scoreMessage.textContent = `You lose Rock Paper Scissors! Player ${humanScore} - ${computerScore} Computer.`;
      } else {
        scoreMessage.textContent = `It's a tie! Player ${humanScore} - ${computerScore} Computer.`;
      }

      const reButton = document.createElement("button");
      reButton.textContent = "Play Again";
      reButton.id = "playAgainButton";
      reButton.type = "button";
      reButton.addEventListener("click", playGame);
      document.body.appendChild(reButton);
    }
  }

  nextRound();
}

if (startButton) {
  startButton.addEventListener("click", playGame);
}
