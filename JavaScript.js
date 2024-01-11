// 1. Create an array that contains the variables Rock, Paper, and Scissors.
const choice = ["Rock", "Paper", "Scissors"];

/* 
   2. Set up a variable that generates a random number 0-2 for the player 
      and then do the same for the computer's selection. The number 
      represents the index values in the array of the 3 items.
*/
let randomNum = Math.floor(Math.random() * 3);
let playerSelection = choice[randomNum];

randomNum = Math.floor(Math.random() * 3);
let computerSelection = choice[randomNum];

/*
   3. Create a variable to hold a response message to the user. This can 
      show the random results for the player and then also the result for 
      the computer of the matching item from the array.
*/
let result;

/* 
   4. Create a condition to handle the player and computer selections. 
      If both are the same, this results in a tie.

   5. Use conditions to apply the game logic and return the correct results. 
      There are several ways to do this with the condition statements, but 
      you could check which player's index value is bigger and assign the 
      victory accordingly, with the exception of Rock beating Scissors.
*/
if (playerSelection === computerSelection)
    { result = "It's a tie!"; }
else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
         (playerSelection === "Paper" && computerSelection === "Rock") ||
         (playerSelection === "Scissors" && computerSelection === "Paper")) 
    { result = `You win! ${playerSelection} beats ${computerSelection}.`; }
else
   { result = `Computer wins! ${computerSelection} beats ${playerSelection}.`; }


/*
   6. Add a new output message that shows the player selection versus the 
         computer selection and the result of the game.
*/
console.log(`Player chose ${playerSelection}`);
console.log(`Computer chose ${computerSelection}`);
console.log(result);