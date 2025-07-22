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
    


    //Pseudocode
    //1.Create function named getHumanChoice
    //2. getHumanChoice return a valid choice with the users input
    //3.Use prompt
    //4.Test it with console.log
  
    function getHumanChoice() {
      const userInput = prompt("Enter your choice: rock, paper or scissors");
      return userInput.toLowerCase();

    } 


        //Pseudocode 
        // 1. Create function named playGame
        //2. Move playRound to playGame
        // 3. Make it have 5 rounds by playRound
        function playGame() {
          let humanScore = 0;
          let computerScore = 0;

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
            console.log(`Score: Human ${humanScore}, Computer: ${computerScore}`);
             }
            for (let i = 0; i < 5; i++) {
                const humanSelection = getHumanChoice();
                const computerSelection = getComputerChoice();
                playRound(humanSelection, computerSelection);
              }
              console.log("Game Over!");
              if (humanScore > computerScore) {
                console.log("You won the game!");
              } else if (humanScore < computerScore) {
                console.log("Computer won the game!");
              } else {
                console.log ("It's a tie!");
              }
        }
        playGame();

    
   