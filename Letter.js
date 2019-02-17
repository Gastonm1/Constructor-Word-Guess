function Letters(value) {
    this.character = value;
    this.vis = false;
}
Letters.prototype.guess = function(input){ // Checks if user guess is correct.
    if(this.character === input){
        this.vis = true;
    }
} 

Letters.prototype.underscores = function(){ // this will return the underscore depending on the user guess. (Toggler)
    if(this.vis === false){
        return "_"
    }
    return this.character
}

module.exports = Letters

