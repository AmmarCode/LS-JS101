import readline from "readline-sync";
// The user makes a choice.
// The computer makes a choice.
// The winner is displayed.

// Helper function to diplay messages
const prompt = (msg) => {
  console.log(`=> ${msg}`);
};

// welcome the player
prompt("*** Welcome to rock paper scissors game ***")

// define valid choices
const VALID_CHOICES = ["rock", "paper", "scissors"];

// Get the player's choice 
const getPlayerChoice = () => {  
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let playerChoice = readline.question();
  while (!VALID_CHOICES.includes(playerChoice)) {
    prompt(
      `Choose one of the valid choices only and nothing else: ${VALID_CHOICES.join(
        ", "
      )}`
    );
    playerChoice = readline.question();
  }
  return playerChoice
};

// Get the computer's random choice and then dispplay the winner
const displayWinner = (playerChoice) => {
  let computerChoice =
    VALID_CHOICES[Math.floor(Math.random() * VALID_CHOICES.length)];
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(
      `You chose: ${playerChoice}, computer chose: ${computerChoice} You won!\n`
    );
  } else if (
    (playerChoice === "scissors" && computerChoice === "rock") ||
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors")
  ) {
    console.log(
      `You chose: ${playerChoice}, computer chose: ${computerChoice} You lost!\n`
    );
  } else if (playerChoice === computerChoice) {
    console.log(
      `You chose: ${playerChoice}, computer chose: ${computerChoice} It's a draw!\n`
    );
  }
}

const playGame = () => {
  const playerChoice = getPlayerChoice()
  displayWinner(playerChoice)
  prompt("Would you like to play again? ")
  let answer = readline.question();
  if (answer !== "yes".toLowerCase()) {
    prompt("Bye Bye!")
  } else {
    playGame()
  }
}
 
setTimeout(playGame, 1000)