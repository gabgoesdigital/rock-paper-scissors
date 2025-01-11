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

console.log(getHumanChoice());


