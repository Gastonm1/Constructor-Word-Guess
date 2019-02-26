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
  this.value = strInput.split("").map(function(letter) {
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

function wordLetter (Letters){
  wordLetter()
  console.log(Letters)
};

Word.prototype.letterEvaluate = function(response) {
  for (i = 0; i < this.value.length; i++) {
    console.log(this.value[i].vis)
    // console.log(response.guess)
    if(response.guess === this.value[i].character){

      this.value[i].vis = true;
      this.value[i].underscore();
      
      console.log(this.value[i].vis)
    }
    
  }
}

module.exports = Word
