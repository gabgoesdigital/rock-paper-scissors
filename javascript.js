function getComputerChoice() {
    let rock = "rock";
    let scissors = "scissors";
    let paper = "paper";
 let randomNumber = Math.floor(Math.random()* 3);

if (randomNumber === 0) {
    return rock;}
    else if (randomNumber ===1) {
        return scissors;}
        else {
            return paper;
        }
}

console.log(getComputerChoice());
