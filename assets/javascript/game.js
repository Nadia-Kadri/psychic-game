let winsText = document.getElementById("wins-text");
let lossesText = document.getElementById("losses-text");
let guessesLeft = document.getElementById("guesses-left");
let wrongGuesses = document.getElementById("wrong-guesses");
let errorMessage = document.getElementById("error-message");

let computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let wins = 0;
let losses = 0;
let remainingGuesses = 9;
let guessesSoFar = [];

let computerRandomLetter;

reset = () => {
  remainingGuesses = 9;
  guessesSoFar = [];
  computerRandomLetter = computerLetters[Math.floor(Math.random() * computerLetters.length)];
  console.log("computer: " + computerRandomLetter);
};

reset();

document.onkeyup = event => {
  let userGuess = event.key.toLowerCase();
  console.log("user: " + userGuess);

  if (!computerLetters.includes(userGuess)) {
    errorMessage.textContent = "error: not a valid letter";
    return;
  } else if (guessesSoFar.includes(userGuess)) {
    errorMessage.textContent = "error: already guessed";
    return;
  } else {
    errorMessage.textContent = "";
  };

  if (userGuess !== computerRandomLetter) {
    guessesSoFar.push(userGuess);
    remainingGuesses--;
      if (remainingGuesses < 1) {
          losses++;
          reset ();
      };
  };

  if (userGuess === computerRandomLetter) {
    wins++;
    reset();
  };

  winsText.textContent = `Wins: ${wins}`;
  lossesText.textContent = `Losses: ${losses}`;
  guessesLeft.textContent = `Guesses Left: ${remainingGuesses}`;
  wrongGuesses.textContent = `Your Guesses so far: ${guessesSoFar.join(" ")}`;
}
