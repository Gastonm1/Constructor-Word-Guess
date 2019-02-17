var Letters = require("./Letter.js")

function Word(strInput){
    this.value = strInput.split('').map(function(letter, i, arr){ // Places the word in a string and uses the map method to create the array of each character. (Higher order function)

        return new Letters(letter)

        // make prototypes for Work function that substitues the words into underscores and keeps track of current word being guessed.
        // have a functions that will create underscores (letter.js prototype)
        // word class should have this.value and this.underscores
        // should have prototype to convert values and underscores
    })
}

var txt = new Word("Happy")
console.log(txt.value);



