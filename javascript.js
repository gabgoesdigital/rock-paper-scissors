function getComputerChoice() {
    
 let randomNumber = Math.floor(Math.random()* 3);

if (randomNumber === 0) {
    return "rock";}
    else if (randomNumber ===1) {
        return "scissors";}
        else {
            return "paper";
        }
}

function getHumanChoice() {
    let message = prompt("Choose one between rock,paper,scissors!").toLowerCase();
    if (message === "rock" || message === "paper" || message === "scissors") {
        return message; }
        else {
            return "Check your Spelling!";
        }
   
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
if (humanSelection === computerSelection) {
    return `It's a tie! Both chose ${humanSelection}`;
}
else if (humanSelection === "rock" && computerSelection === "scissors" ||
humanSelection === "scissors" && computerSelection === "paper" ||
humanSelection === "paper" && computerSelection === "rock") {
    humanScore++;
    return `You win ${humanSelection} beats ${computerSelection}`;
}
else {
    computerScore++;
    return `You loose ${computerSelection} beats ${humanSelection}`;
}
}




console.log(playRound (humanSelection, computerSelection));
console.log(`Computer Choose ${computerSelection}`)
console.log(`You choose ${humanSelection}`);
console.log(`Your score ${humanScore}`);
console.log(`Computer score ${computerScore}`);


