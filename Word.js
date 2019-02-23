// =============================================WORD.JS LAYOUT ==============================================================================
// import Letter.js DONE
// Use the map method to create an array of each character of the word DONE
// make prototypes for Word function that substitutes the words into underscores and keeps track of current word being guessed. DONE
// have a functions that will create underscores ( follow letter.js prototype) DONE
// should have prototype to convert values and underscores DONE
// export
//============================================================================================================================================

var Letters = require("./Letter.js");

function Word(strInput) {
  this.value = strInput.split("").map(function(letter, i, arr) {
    // Places the word in a string and uses the map method to create the array of each character. (Higher order function)
    return new Letters(letter);
  });
}

Word.prototype.underscores = function() {
  var letterArr = this.value
    .map(function(letter) {
      return letter.underscore();
    })
    .join(" ");
  //   console.log(letterArr);
  return letterArr;
};

var txt = new Word("Happy");
//console.log(txt.value);

var txt1 = new Word("Yay");
//console.log(txt1.underscores());

module.exports = Word
