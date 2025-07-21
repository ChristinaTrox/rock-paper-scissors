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
    console.log(getComputerChoice())


    //Pseudocode
    //1.Create function named getHumanChoice
    //2. getHumanChoice return a valid choice with the users input
    //3.Use prompt
    //4.Test it with console.log
  
    function getHumanChoice() {
      const userInput = prompt("Enter your choice: rock, paper or scissors");
      return userInput.toLowerCase();

    } 
    console.log(getHumanChoice());

     //PSEUDOCODE
     // 1. Create two variables named humanScore and computerScore
     // 2. Give it a starting value of 0
    let humanScore = 0;
    let computerScore = 0;

    //Pseudocode
    // 1.Create function named playRound
    // 2. Define two parameters humanChoice and computerChoice
    // 3.Use them to make arguments
    // 4.Make humanChoice case-insensitive
    //5. Write “You lose! Paper beats Rock” to console
    // 6.Increase the score for each based on the round winner

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
         console.log(`Score — Human: ${humanScore}, Computer: ${computerScore}`);
        }
        //Pseudocode 
        // 1. Create function named playRound
        //2. 
        function playGame() {

        }

    //Pseudocode
    // 1. Get the human's choice by calling getHumanChoice()
    //2. Get the computer's choice by calling getComputerChoice()
    //3. Play one round of the game with both choices by calling playRound()
       const humanSelection = getHumanChoice();
       const computerSelection = getComputerChoice();
       playRound(humanSelection, computerSelection);
    
   