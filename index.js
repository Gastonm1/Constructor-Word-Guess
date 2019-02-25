// =========================INDEX.JS FUNCTION OF GAME========================================
// Create the Word bank (THEME = programming languages) DONE
// Have a start game function DONE
// Inside game function, pull a word from the bank to transform into underscore DONE
// Once you have the word, display the underscores DONE
// Ask the user for a input
//===========================================================================================
//=============================GLOBAL VARS===================================================
var inquirer = require("inquirer");
var Word = require("./Word.js");
var wordBank = [
  "java",
  "basic",
  "swift",
  "ruby",
  "c",
  "typescript",
  "c#",
  "c++",
  "php",
  "python",
  "javascript",
  "matlab",
  "assembly",
  "perl",
  "delphi",
  "go",
  "sql"
];
var guesses = 5;
var randomWordfromBank = wordBank[Math.floor(Math.random() * wordBank.length)];
var newWord = new Word(randomWordfromBank);

//===========================================================================================
//=============="And here we go - Joker"=====================================================

function gameStart() {
  console.log(
    "\nWelcome to Hangman in the terminal! You will have 5 guesses to guess the correct word! Please find today's category below! Have fun!\n"
  );
  console.log("Category: ~~~~~Programming Languages~~~~~");
  console.log("You have " + guesses + " guesses!\n");
  console.log(newWord.underscores());

  //   if (guesses <= 0) {
  //     console.log("~~~~~~~~~~~~~~~~~~~~~")
  //     console.log("Game Over :(")
  //     console.log("The programming langauge was: " + randomWordfromBank);
  //     console.log("~~~~~~~~~~~~~~~~~~~~~")
  //     inquirer.prompt([{type: "confirm", name: "Continue?", message: "Want to try again?", default: true}])

  //     if (inquirer.default === true) {
  //     gameStart()}
  //     else{
  //    console.log("Come back again!")
  //  }
  // }

  if (!newWord.underscores()) {
    console.log("\n✼ ҉　 ҉　 ҉　 ҉　 ҉　 ҉　✼\n");
    console.log("WAY TO GO! YOU GUESSED IT!");
    inquirer.prompt([
      {
        type: "confirm",
        name: "Continue?",
        message: "Can you guess another?",
        default: true
      }
    ]);

    if (inquirer.default === true) {
      gameStart();
    } else {
      console.log("Come back again!");
    }
  }

  givemealetter();


function givemealetter(input) {
  inquirer
    .prompt([
      { type: "input", name: "You guessed:", message: "Guess a letter!" }
    ])
    .then(answers => {
      console.log(answers);

      if (answers === randomWordfromBank.valueOf[" "]) {
        this.vis = true;
        console.log("Great job! Keep going!");
        givemealetter();
      } else {
        guesses = guesses - 1;
        console.log(
          "\nNope! You have " + guesses + " guesses left! Try Again!\n"
        );
        givemealetter();

        if (guesses <= 0) {
          console.log("\nGAME OVER (╯︵╰,)\n");
          console.log("The programming langauge was: " + randomWordfromBank);
          console.log("(╯︵╰,)");
          inquirer
          .prompt([{
            message: "Would you like to try again?",
            type: "list",
            name: "continue",
            choices: ["Yes", "No" ]
          }])
          .then(function(response){
            if(inquirer.prompt.choices == "No"){
              return false;
            } else if(inquirer.prompt.choices == "Yes"){
              guesses = 5;
              gameStart();
            }

          })
          
        }
      }
    });
}
}
gameStart();
// if (input === newWord.length){
//   guesses = -1
//   console.log("Try again!")
// } else{
//   this.vis = true;
// }

// In here: Have the inqurier or the prompt outside the game start to run over and over again, depending on the answer. If wrong answer, ask again, if it is the right answer the toggle the visibilty of letter.

// Have logic for answers.
// if right answers, return letter.
