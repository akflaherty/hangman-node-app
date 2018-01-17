var Letter = require('./letter.js');
var Word = require('./word.js');
var inquirer = require('inquirer');

var wordObj = new Word();

function newGame() {
	console.log('');	// new line for better formatting
	console.log('New game started. Guess the word.');
    wordObj = new Word();
    wordObj.pickWord(); // pick a new word
    // console.log(wordObj.word); // !!! FOR DEBUGGING
    wordObj.buildLetters(); // build array of letter objects
    console.log('Guesses remaining: ' + wordObj.trysLeft); // display guesses left
    wordObj.dispLetters(); // display letters or blanks
    promptLetter();
}

function promptLetter() {
    inquirer.prompt({
        type: 'input',
        message: 'Guess a letter: ',
        name: 'letterGuess'
    }).then(function(inquirerResponse) {
        wordObj.checkLetters(inquirerResponse.letterGuess);
        // wordObj.trysLeft = wordObj.trysLeft - 1;
        console.log('Guesses remaining: ' + wordObj.trysLeft);
        wordObj.dispLetters();
        if (wordObj.lettersLeft == 0) {
            console.log('WINNER');
            newGame();
            return;
        } else if (wordObj.trysLeft <= 0) {
            console.log('LOSER');
            newGame();
            return;
        } else {
            promptLetter();
        }
    });
}

newGame();