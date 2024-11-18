






// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.
let humanScore = 0
let computerScore = 0


function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
        return "ROCK";
    } else if (computerChoice > 0.33 && computerChoice > 0.67) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Choose: Rock, Paper, or Scissors');
    humanChoice = humanChoice.toUpperCase();
    while (humanChoice != "ROCK" && humanChoice != "PAPER" && humanChoice != "SCISSORS") {
        humanChoice = prompt('Error: Choose: Rock, Paper, or Scissors');
        humanChoice = humanChoice.toUpperCase();
    }
    return humanChoice
}



function playGame() {
    while (humanScore < 3 && computerScore < 3) {
        playRound(getHumanChoice(),getComputerChoice())
        //humanChoice = undefined;
        //computerChoice = undefined;
        //console.log(humanChoice)
    }
    if (humanScore > computerScore) {
        alert(`You Win! Your score is ${humanScore} and the computer score is ${computerScore}.`)
    } else {
        alert(`You Lose! Your score is ${humanScore} and the computer score is ${computerScore}.`)
    }
}



function playRound(humanChoice,computerChoice) {
    console.log(humanChoice)
    console.log(computerChoice)
    if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        console.log(`The Computer Choice is ${computerChoice}`)
        console.log('You win! Paper beats rock!');
        humanScore = humanScore + 1
    } else if (computerChoice == "PAPER" && humanChoice == "ROCK") {
        console.log(`The Computer Choice is ${computerChoice}`)  
        console.log('You lose! Paper beats rock!');
        computerScore = computerScore + 1;
    } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        console.log(`The Computer Choice is ${computerChoice}`)  
        console.log('You win! Rock beats scissors!');
        humanScore = humanScore + 1;
    } else if (computerChoice == "ROCK" && humanChoice == "SCISSORS") {
        console.log('You lose! Rock beats scissors!');
        computerScore = computerScore + 1;
    } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        console.log(`The Computer Choice is ${computerChoice}`)  
        console.log('You win! Scissors beats paper!');
        humanScore = humanScore + 1;
    } else if (computerChoice == "SCISSORS" && humanChoice == "PAPER") {
        console.log(`The Computer Choice is ${computerChoice}`)  
        console.log('You lose! Scissors beats paper!');
        computerScore = computerScore + 1;
    }  else {
        alert('DRAW!')
    }  
}


// Variable & Function Declarations


// 1. Start the game 






// Get round human choice




// getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

// Generate a random number --> Assign that number to a variable  --> compare the random number; if between 0-0.33 = rock, if between 0.34-0.66 paper, if between 0.67-0.99 scissors.






// Your game will be played by a human player. You will write a function that takes the user choice and returns it.
// Have user input choice, check to see if entry is valid, then return the value. Give an alert 





// keep looping to capture answer until it is correct 




// Step 4: Declare the players score variables Your game will keep track of the players score. You will write variables to keep track of the players score. Create two new variables named humanScore and computerScore in the global scope. Initialize those variables with the value of 0.



// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// Paper beats rock, rock beats scissors, scissors beats paper 








// Write the logic to play the entire game




