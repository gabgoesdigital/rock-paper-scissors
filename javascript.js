// Function to get computer's choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber === 0
    ? 'rock'
    : randomNumber === 1
    ? 'scissors'
    : 'paper';
}

// Track scores globally
let humanScore = 0;
let computerScore = 0;

// Function to play a single round
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    result = `It's a tie! Both chose ${humanChoice}`;
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    humanScore++;
    result = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  //   // Display results
  //   console.log(result);
  //   console.log(`Computer chose: ${computerChoice}`);
  //   console.log(`Your score: ${humanScore}`);
  //   console.log(`Computer score: ${computerScore}`);

  playResult.innerHTML += `
    <p>${result}</p>
    <p>Computer chose: <strong>${computerChoice}</strong></p>
    <p>Your score: <strong>${humanScore}</strong></p>
    <p>Computer score: <strong>${computerScore}</strong></p>
    <hr />
  `;
  playResultFinal.innerHTML += `
  <p>Your Score: <strong>${humanScore}</strong></p>
  <p>Computer Score: <strong>${computerScore}</strong></p>`;
}

// Selecting buttons from the DOM
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

// Adding event listeners to each button
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

// Selecting the div for the result
const playResult = document.querySelector('.result');
const playResultFinal = document.querySelector('.total');
