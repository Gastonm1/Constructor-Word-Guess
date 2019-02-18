var Letters = require("./Letter.js")

var wordBank = [
    {name: "DIE HARD", genre: "Action"},
    {name: "RAIDERS OF THE LOST ARK", genre: "Action"},
    {name: "THE DARK KNIGHT ", genre: "Action"},
    {name: "THE MATRIX", genre: "Action"},
    {name: "PREDATOR", genre: "Action"},
    {name: "CASABLANCA", genre: "Drama"},
    {name: "GONE WITH THE WIND", genre: "Drama"},
    {name: "12 ANGRY MEN", genre: "Drama"},
    {name: "CITIZEN KANE", genre: "Drama"},
    {name: "THE GODFATHER", genre: "Drama"},
];

var randMov = wordBank[Math.floor(Math.random() * wordBank.length)]; // <-- Pulls random movie from WordBank Array
console.log(Letters && randMov.name)


function movieTitle(strInput){
    this.value = strInput.split('').map(function(letter, i, arr){ // Places the word in a string and uses the map method to create the array of each character. (Higher order function)

        return new Letters(letter)
        
        // make prototypes for Work function that substitutes the words into underscores and keeps track of current word being guessed.
        // have a functions that will create underscores (letter.js prototype)
        // word class should have this.value and this.underscores
        // should have prototype to convert values and underscores
    })
}


// var txt = new Word('Happy')
// console.log(txt.value);



