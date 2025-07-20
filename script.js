console.log("Hello World");

//Pseudocode
// 1. Create a function named getComputerChoice
// 2. Have getComputerChoice return randomly “rock”, “paper” or “scissors”
// 3. Use Math.random
// 4. Use console.log to test that functions works



function getComputerChoice() {
   const randomNumber = Math.floor(Math.random()* 3);
   if (randomNumber === 0) {
    return "rock";
   } else if (randomNumber === 1) {
    return "paper";
     }  else {
        return "scissors";
        }
    }
   
