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

function displayStats(humanScore, computerScore) {
    return "Win(s): " + humanScore + " Loss(es): " + computerScore + " Tie(s): " + (5 - (humanScore + computerScore));
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let lowerHumanChoice = humanChoice.toLowerCase();
        if(lowerHumanChoice === 'rock' && computerChoice === 'rock') {
            console.log("You Tied!");
        } else if(lowerHumanChoice === 'rock' && computerChoice === 'paper') {
            console.log("You lose! " + computerChoice + " beats " + lowerHumanChoice);
            computerScore++;
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
            computerScore++;
        } else if(lowerHumanChoice === 'scissors' && computerChoice === 'rock') {
            console.log("You lose! " + computerChoice + " beats " + lowerHumanChoice);
            computerScore++;
        } else if(lowerHumanChoice === 'scissors' && computerChoice === 'paper') {
            console.log("You win! " + lowerHumanChoice + " beats " + computerChoice);
            humanScore++;
        } else if(lowerHumanChoice === 'scissors' && computerChoice === 'scissors') {
            console.log("You Tied!");
        }
    }

    for(let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore) {
        console.log("You win! " + displayStats(humanScore, computerScore));
    } else if(humanScore < computerScore) {
        console.log("You lose!" + displayStats(humanScore, computerScore));
    } else {
        console.log("You Tied!" + displayStats(humanScore, computerScore));
    }
}

playGame();