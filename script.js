function getComputerChoice() {
  const results = ["paper", "scissors", "rock"];
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = results[randomNumber];
  return computerChoice;
}

function getHumanChoice() {
  const promptResult = prompt("Scissors, Paper, or Rock?");
  if (promptResult.toLowerCase() == "scissors") {
    return "scissors";
  } else if (promptResult.toLowerCase() == "paper") {
    return "paper";
  } else {
    return "rock";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`Draw! You both chose ${humanChoice}`);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock!");
    humanScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors!");
    humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper!");
    humanScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Rock loses to paper!");
    computerScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Paper loses to scissors!");
    computerScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Scissors loses to rock!");
    computerScore += 1;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if (humanScore > computerScore) {
    console.log(`You win! Player ${humanScore}-${computerScore} Computer`);
  } else if (humanScore < computerScore) {
    console.log(`You lose! Player ${humanScore}-${computerScore} Computer`);
  } else {
    console.log(`It's a tie! Player ${humanScore}-${computerScore} Computer`);
  }
}

playGame();
