var Letter = require('./letter.js');
var Word = require('./word.js');
var inquirer = require('inquirer');

function newGame() {
    var wordObj = new Word();
    wordObj.pickWord();		// pick a new word
    console.log(wordObj.word);	// !!! FOR DEBUGGING
    wordObj.buildLetters();		// build array of letter objects
    wordObj.dispLetters();		// display letters or blanks
}

newGame();