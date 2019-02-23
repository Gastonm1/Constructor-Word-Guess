// ================INDEX.JS FUNCTION OF GAME=================================================
// Create the Word bank (THEME = programming languages) DONE
// Have a start game function DONE
// Inside game function, pull a word from the bank to transform into underscore DONE
// Once you have the word, display the underscores DONE
// Ask the user for a input
//===========================================================================================


var inquirer = require("inquirer");
var Word = require("./Word.js");
var wordBank = ["java", "basic", "swift", "ruby", "c", "typescript", "c#", "c++", "php", 'python', 'javascript', 'matlab', 'assembly', 'perl', 'delphi', 'go', 'sql'];
var guesses = 5;


function gameStart() {
  var randomWordfromBank =
    wordBank[Math.floor(Math.random() * wordBank.length)];
  var newWord = new Word(randomWordfromBank);
  console.log("Category: ~~~~~Programming Languages~~~~~")
  console.log("You have " + guesses + " guesses!")
  console.log(newWord.underscores());

 givemealetter(newWord);
}

function givemealetter (input){

    inquirer.prompt([{type: "input", name: "letterInput", message: "Guess the letter!"}]).then(answers => { 
      console.log(answers)

      
      // In here: Have the inqurier or the prompt outside the game start to run over and over again, depending on the answer. If wrong answer, ask again, if it is the right answer the toggle the visibilty of letter.
        
      // Have logic for answers.
      // if right answers, return letter.

    });
}

gameStart();
