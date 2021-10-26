let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// generate random numbers between 0 and 9 inclusive
const generateTarget = () => {
return Math.floor(Math.random()*10);
};

// calculate Absolute distance of 2 numbers
const getAbsoluteDistance = (number1, number2) => {
    return Math.abs(number1 - number2);
};
// determine winner
const compareGuesses = (humanGuess, computerGuess, target) => {
let humanWin = getAbsoluteDistance(humanGuess, target);
let computerWin = getAbsoluteDistance(computerGuess, target);

// Alert user if input is wrong 
if (humanGuess > 9 || humanGuess < 0){
    alert('Please enter a number between 0 and 9');
};

if (humanWin <= computerWin){
    return true;
} else {
    return false;
}
};

// increase scores by 1 if winner
const updateScore = (winner) => {
 if (winner === 'human'){
     humanScore += 1;
 } else if (winner === 'computer'){
     computerScore += 1;
 }
};

// updating round numbers by +1 after each round 
const advanceRound = () => {
currentRoundNumber =+ 1;
};
