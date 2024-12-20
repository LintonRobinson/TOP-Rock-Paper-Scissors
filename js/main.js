/******************************************
/* ROCK , PAPER , SCISSORS!
/*******************************************/




// Human Computer Score (Number)
let humanScore = 0;
let computerScore = 0;

// Human Computer Score (Visual Number)
const displayHumanScore = document.querySelector('#humanScore');
const displayComputerScore = document.querySelector('#computerScore');

// List of All Elements
const allElements = document.querySelectorAll('*');

// Round Result Text
const displayedResult = document.querySelector('#round-result-display');

// Round Result Background 
const displayedResultBackground = document.querySelector('.round-result-wrapper');

// Rock Paper Scissors Human Selection (Image)
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// Rock Paper Scissors Computer Selection (Image)
const computerRockImage = document.querySelector('.rock');
const computerPaperImage = document.querySelector('.paper');
const computerScissorsImage = document.querySelector('.scissors');

// Win / Loss Icon
const winIcon = document.querySelector('.win');
const lossIcon = document.querySelector('.loss');








// Get computer round choice
function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerRockImage.style.display = 'block';
        computerPaperImage.style.display = 'none';
        computerScissorsImage.style.display = 'none';
        return "ROCK";
    } else if (computerChoice > 0.33 && computerChoice > 0.67) {
        computerPaperImage.style.display = 'block';
        computerRockImage.style.display = 'none';
        computerScissorsImage.style.display = 'none';
        return "PAPER";
    } else {
        computerScissorsImage.style.display = 'block';
        computerRockImage.style.display = 'none';
        computerPaperImage.style.display = 'none';
        return "SCISSORS";
    };
};

// Human "Rock" Selection
    rock.addEventListener('click' , () => {
        if (computerScore < 5 && humanScore < 5) {
            humanChoice = "ROCK";
            playRound(humanChoice,getComputerChoice());
            displayHumanScore.textContent = humanScore;
            displayComputerScore.textContent = computerScore;
            checkScore();
        };
    });


// Human "Paper" Selection
    paper.addEventListener('click' , () => {
        if (computerScore < 5 && humanScore < 5) {
            humanChoice = "PAPER";
            playRound(humanChoice,getComputerChoice());
            displayHumanScore.textContent = humanScore;
            displayComputerScore.textContent = computerScore;
            checkScore();
        } ;
    });

// Human "Scissors" Selection
    scissors.addEventListener('click' , () => {
        if (computerScore < 5 && humanScore < 5) {
            humanChoice = "SCISSORS";
            playRound(humanChoice,getComputerChoice());
            displayHumanScore.textContent = humanScore;
            displayComputerScore.textContent = computerScore;
            checkScore();
        } 
    });
    
// Check Score (Concludes Game If Human/PC Has 5 Points)
function checkScore () {
    if (computerScore == 5 || humanScore == 5) {
        displayedResult.textContent = "Game Complete.";
        computerRockImage.style.display = 'none';
        computerPaperImage.style.display = 'none';
        computerScissorsImage.style.display = 'none';
        if (humanScore > computerScore) {
            document.querySelector('h1').textContent = `You Win! Your score is ${humanScore} and the computer score is ${computerScore}.`;
            winIcon.style.display = 'block';
            displayedResultBackground.style.backgroundColor = "Green"
        } else {
            document.querySelector('h1').textContent = `You Lose! Your score is ${humanScore} and the computer score is ${computerScore}.`;
            lossIcon.style.display = 'block';
            displayedResultBackground.style.backgroundColor = "Gray";
        };
        setTimeout( () => {
            allElements.forEach(element => {
                element.style.filter = 'grayscale(100%)';
            });
        } , 5000);
    };
};

// Play Round (Dispay Round Results, Calculate Game Score)
function playRound(humanChoice,computerChoice) {
    console.log(humanChoice + " Human")
    console.log(computerChoice + " PC")
    if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        displayedResult.textContent = `The Computer Choice is ${computerChoice}. You win, paper beats rock!`;
        displayedResultBackground.style.backgroundColor = "Green"
        humanScore = humanScore + 1
    } else if (computerChoice == "PAPER" && humanChoice == "ROCK") {
        displayedResult.textContent = `The Computer Choice is ${computerChoice}. You lose, paper beats rock!'`;
        displayedResultBackground.style.backgroundColor = "Red"
        computerScore = computerScore + 1;
    } else if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        displayedResult.textContent = `The Computer Choice is ${computerChoice} You win, rock beats scissors!`;
        displayedResultBackground.style.backgroundColor = "Green"
        humanScore = humanScore + 1;
    } else if (computerChoice == "ROCK" && humanChoice == "SCISSORS") {
        displayedResult.textContent = `The Computer Choice is ${computerChoice}. You lose, rock beats scissors!`;
        displayedResultBackground.style.backgroundColor = "Red"
        computerScore = computerScore + 1;
    } else if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        displayedResult.textContent = `The Computer Choice is ${computerChoice}. You win, scissors beats paper!`
        displayedResultBackground.style.backgroundColor = "Green"
        humanScore = humanScore + 1;
    } else if (computerChoice == "SCISSORS" && humanChoice == "PAPER") {
        displayedResult.textContent = `The Computer Choice is ${computerChoice}. You lose, scissors beats paper!` 
        displayedResultBackground.style.backgroundColor = "Red"
        computerScore = computerScore + 1;
    }  else {
        displayedResult.textContent = "DRAW!"
        displayedResultBackground.style.backgroundColor = "transparent"
    }  
}

















