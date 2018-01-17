var Letter = require('./letter.js');

function Word() {
	this.trysLeft = 10;
    this.wordList = ['monkey', 'zebra', 'gorilla', 'rhinoceros', 'platypus'];
    this.word = '';
    this.lettersLeft = 10;   // number of letters left to guess
    this.lettersArr = [];
    this.pickWord = function() {
        this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
        this.lettersLeft = this.word.length;
    };
    this.buildLetters = function() {
    	for (var i = 0; i < this.word.length; i++) {
    		var letterObj = new Letter(this.word[i]);
    		this.lettersArr.push(letterObj);
    	}
    };
    this.dispLetters = function() {
    	var dispString = '';
    	for (var i = 0; i < this.lettersArr.length; i++) {
    		dispString = dispString + this.lettersArr[i].dispVal + ' '; 
    	}
    	console.log(dispString);
    };
    this.checkLetters = function(testVal) {
    	for (var i = 0; i < this.lettersArr.length; i++) {
    		var decLetters = this.lettersArr[i].checkVal(testVal);	// check each letter against testVal
            if (decLetters) {
                // if the guessed letter is in the word
                this.lettersLeft = this.lettersLeft - 1;
            }
    	}
    };
}

module.exports = Word;