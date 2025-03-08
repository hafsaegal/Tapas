// function sum(a, b) {
//   const result = a + b;
//   console.log(result);
// }

// sum(4, 6);

// function outer() {
//     console.log("Outer");

//     return function inner() {
//     console.log("inner")
// }
//    // inner()
// }
// let retFunc = outer

// console.log(retFunc())

// function foo(func) {
//     console.log("foo");

//     func()
// }

// foo(function() {
//     console.log("buzz")
// })


function rockPaperScissorsGame() {
  console.log("Getting started with the Rock, Paper, or Scissors Game");

  const userChoicePrompt = prompt("Enter Rock, Paper or Scissors");
  let userChoice = userChoicePrompt.toLowerCase();

  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  console.log("UserSelected", userChoice);
  console.log("Computer Selected", computerChoice);
}

rockPaperScissorsGame();

