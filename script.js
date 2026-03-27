console.log("Heyyy People");
//create a function that will randomly return either rock, paper, or scissors. How can math.random be used for this?
function getComputerChoice() {
    num = Math.random();
    //remember: you have to add parentheses after a method like random for it to work properly
    console.log(num)
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



