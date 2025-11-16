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

function checkWinner(humanChoice, computerChoice) {
    if(humanChoice === 'rock' && computerChoice === 'rock') {
        console.log("You Tied!");
        return "tie";
    } else if(humanChoice === 'rock' && computerChoice === 'paper') {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        return "computer";
    } else if(humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        return "human";
    } else if(humanChoice === 'paper' && computerChoice === 'rock') {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        return "human";
    } else if(humanChoice === 'paper' && computerChoice === 'paper') {
        console.log("You Tied!");
        return "tie";
    } else if(humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        return "computer";
    } else if(humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        return "computer";
    } else if(humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        return "human";
    } else if(humanChoice === 'scissors' && computerChoice === 'scissors') {
        console.log("You Tied! ");
        return "tie";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function changeScore(scoreName) {
        if(scoreName === "human") {
            humanScore++;
        } else if(scoreName === "computer") {
            computerScore++;
        }
    }

    function playRound(humanChoice, computerChoice) {
        let lowerHumanChoice = humanChoice.toLowerCase();
        changeScore(checkWinner(lowerHumanChoice, computerChoice));
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