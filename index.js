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
var wordBank = ["java", "basic", "swift", "ruby", "c", "typescript", "c#", "c++", "php", 'python', 'javascript', 'matlab', 'assembly', 'perl', 'delphi', 'go', 'sql'];
var guesses = 5;
var randomWordfromBank = wordBank[Math.floor(Math.random() * wordBank.length)];
var newWord = new Word(randomWordfromBank);

//===========================================================================================
//=============="And here we go - Joker"=====================================================

function gameStart() {
  
  console.log("Welcome to Hangman in the terminal! You will have 5 guesses to guess the correct word! Please find today's category below! Have fun!")
  console.log("Category: ~~~~~Programming Languages~~~~~")
  console.log("You have " + guesses + " guesses!")
  console.log(newWord.underscores());

 givemealetter(newWord);
}

function givemealetter (input){

    inquirer.prompt([{type: "input", name: "You guessed:", message: "Guess the letter!"}]).then(answers => { 
      console.log(answers)
      if(answers = !newWord){
        guesses -1
      }
    
      console.log("Nope! You have " + guesses + " guesses left! Try Again!")
      console.log(newWord.underscores());

      if (guesses = 0){
        console.log("~~~~~~~~~~~~~~~~~~~~~")
        console.log("Game Over :(")
        console.log("The langauge was: " + randomWordfromBank);
        console.log("~~~~~~~~~~~~~~~~~~~~~")
        inquirer.prompt([{type: "confirm", name: "Confirm:", message: "Do you want to play again?", default: true}]).then(function(again){
          if(again.confirm == false){
            return false;
          } else{
            gameStart();
          }
        })
      }
      // if (input === newWord.length){
      //   guesses = -1
      //   console.log("Try again!")
      // } else{
      //   this.vis = true;
      // }
      
      // In here: Have the inqurier or the prompt outside the game start to run over and over again, depending on the answer. If wrong answer, ask again, if it is the right answer the toggle the visibilty of letter.
        
      // Have logic for answers.
      // if right answers, return letter.

    });
}

gameStart();
