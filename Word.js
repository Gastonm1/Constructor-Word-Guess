var Letters = require("./Letter.js");

function Word(strInput) {
  this.value = strInput.split("").map(function(letter, i, arr) {
    // Places the word in a string and uses the map method to create the array of each character. (Higher order function)
    return new Letters(letter);

    // make prototypes for Word function that substitutes the words into underscores and keeps track of current word being guessed.
    // have a functions that will create underscores (letter.js prototype)
    // word class should have this.value and this.underscores
    // should have prototype to convert values and underscores
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
console.log(txt1.underscores());
