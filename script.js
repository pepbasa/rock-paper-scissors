console.log("Heyyy People");
//create a function that will randomly return either rock, paper, or scissors. How can math.random be used for this?
function getComputerChoice() {
    num = Math.random();
    //remember: you have to add parentheses after a method like random for it to work properly
    if (num<0.333) {
        return 'rock';
    }
    else if (num<0.666) {
        return 'scissors';
    }
    else {
        return 'paper';
    }
}
console.log(getComputerChoice())

//write a function that will take the user choice and return it. use prompt to get user input

function getHumanChoice() {
    let userchoice = prompt("rock, paper, or scissors?");
    return userchoice.toLowerCase();
}
console.log(getHumanChoice())

//create two variables - one will store the score for the user, the other for the computer. initialize both with value of 0

//remember: let sets an initial value while allowing the value to be changed later. const sets a permanent value

let humanScore=0;
let computerScore=0;
let round =1;

//write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement
function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    )   {
        console.log(`You win! ${humanChoice} beats ${computerChoice} every time.`);
        humanScore += 1;
    }
    else if (
        humanChoice === computerChoice
    )   {
        console.log (`It's a tie! Both of you chose ${humanChoice}`);
    }
    else {
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}. Better luck next time.`);
        computerScore+=1;
    }
}


//write a function that checks who has a higher score, and decl

//write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end

