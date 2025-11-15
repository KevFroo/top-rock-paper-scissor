function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0) {
        return "rock";
    } else if(choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Please enter your choice (rock, paper, scissors): ");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let lowerHumanChoice = humanChoice.toLowerCase();

    if(lowerHumanChoice === 'rock' && computerChoice === 'rock') {
        console.log("You Tied!");
    } else if(lowerHumanChoice === 'rock' && computerChoice === 'paper') {
        console.log("You lose! " + computerChoice + " beats " + lowerHumanChoice);
        computerChoice++;
    } else if(lowerHumanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You win! " + lowerHumanChoice + " beats " + computerChoice);
        humanScore++;
    } else if(lowerHumanChoice === 'paper' && computerChoice === 'rock') {
        console.log("You win! " + lowerHumanChoice + " beats " + computerChoice);
        humanScore++;
    } else if(lowerHumanChoice === 'paper' && computerChoice === 'paper') {
        console.log("You Tied!");
    } else if(lowerHumanChoice === 'paper' && computerChoice === 'scissors') {
        console.log("You lose! " + computerChoice + " beats " + lowerHumanChoice);
        computerChoice++;
    } else if(lowerHumanChoice === 'scissors' && computerChoice === 'rock') {
        console.log("You lose! " + computerChoice + " beats " + lowerHumanChoice);
        computerChoice++;
    } else if(lowerHumanChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You win! " + lowerHumanChoice + " beats " + computerChoice);
        humanScore++;
    } else if(lowerHumanChoice === 'scissors' && computerChoice === 'scissors') {
        console.log("You Tied!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);