var Letter = require('./letter.js');
var Word = require('./word.js');
var inquirer = require('inquirer');

var wordObj;

function newGame() {
	console.log('');	// new line for better formatting
	console.log('New game started. Guess the word.');
    wordObj = new Word();
    wordObj.pickWord(); // pick a new word
    wordObj.buildLetters(); // build array of letter objects
    console.log('Guesses remaining: ' + wordObj.trysLeft); // display guesses left
    wordObj.dispLetters(); // display letters or blanks
    promptLetter();	// ask user to guess a letter
}

function promptLetter() {
    inquirer.prompt({
        type: 'input',
        message: 'Guess a letter: ',
        name: 'letterGuess'
    }).then(function(inquirerResponse) {
    	// check if the letter appears in the word
        wordObj.checkLetters(inquirerResponse.letterGuess);
        wordObj.trysLeft = wordObj.trysLeft - 1;	// decrement trys
        console.log('');
        console.log('Guesses remaining: ' + wordObj.trysLeft);
        wordObj.dispLetters();	// update word display
        if (wordObj.lettersLeft == 0) {
            console.log('You won! :)');
            promptNewGame();
            return;
        } else if (wordObj.trysLeft <= 0) {
            console.log('You lost. :(');
            promptNewGame();
            return;
        } else {
            promptLetter();
        }
    });
}

function promptNewGame() {
	// ask user to confirm if they want a new game
	inquirer.prompt({
		type: 'confirm',
		message: 'Start a new game?',
		name: 'inputContinue'
	}).then(function(response) {
		// console.log(response.inputContinue);
		if (response.inputContinue) {
			// if yes, start a new game
			newGame();
		}
		// else quit
	});
}

promptNewGame();