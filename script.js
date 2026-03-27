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