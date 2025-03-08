//Assumptions:
// 1. We have to prompt the user to get their inputs.
// 2.The computer's selection will be random.
//3.We have to compare user and computer's choice
//4. We need to aannounce the winner.
//5. After the winner announcement, we may want to ask the user to play again or quit from the game.

// function rockPaperScissorsGame() {
//     console.log("Getting started with the Rock, Paper, or Scissors Game")
    
//     const userChoicePrompt = prompt("Enter Rock, Paper or Scissors");
//     let userChoice = userChoicePrompt.toLowerCase();

//     let computerChoice;
//     const randomNumber= Math.floor(Math.random()*3)+1;

//     if (randomNumber === 1) {
//       computerChoice = "rock";
//     } else if (randomNumber === 2) {
//       computerChoice = "paper";
//     }else{
//         computerChoice= "scissors";
//     }

//     console.log("UserSelected", userChoice);
//     console.log("Computer Selected", computerChoice);

//     if (
//         (userChoice==="rock" && computerChoice === "scissors")||
//         (userChoice==="paper" && computerChoice === "rock")||
//         (userChoice==="scissors" && computerChoice === "paper")||
//     ) {
//         console.log("You the User WIN, yay!!!")
//     } else if( userChoice===computerChoice) {
//         console.log("The Game is a Tie");
//     }else if(
//         (userChoice==="rock" && computerChoice === "paper")||
//         (userChoice==="paper" && computerChoice === "scissors")||
//         (userChoice==="scissors" && computerChoice === "rock")||

//     ) {
//         console.log("oh Ho... Computer Wins!!!");
//     }else{
//         console.log("Please check the input, We didn't understand it")
//     }
// }

// rockPaperScissorsGame();

