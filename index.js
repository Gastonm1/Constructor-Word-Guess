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

//===========================================================================================
//=============="And here we go - Joker"=====================================================

function gameStart() {
  var guesses = 10;
  var randomWordfromBank =
    wordBank[Math.floor(Math.random() * wordBank.length)];
  var newWord = new Word(randomWordfromBank);

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
      .prompt([{ type: "input", name: "guess", message: "Guess a letter!" }])
      .then(response => {
        console.log(response);
        newWord.letterEvaluate(response);
        console.log(newWord.underscores());
        if (response === this.value) {
          console.log("Great job! Keep going!");
          givemealetter();
        } else if (response !== this.value) {
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
              .prompt([
                {
                  message: "Would you like to try again?",
                  type: "list",
                  name: "continue",
                  choices: ["Yes", "No"]
                }
              ])
              .then(response => {
                console.log(response);
                switch (response.action) {
                  case "Yes":
                    gameStart();
                    guesses = guesses + 6;
                    break;

                  case "No":
                    gameEnd();
                    break;
                }
              });
          }

          function gameEnd() {
            console.log("\nI hope you had fun!\n");
          }
          gameEnd()
        }
      });
  }
};
gameStart();
