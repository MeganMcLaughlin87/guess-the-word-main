const guessedLetters = document.querySelector('.guessed-list');
const guessLetterButton = document.querySelector('.guess');
const letterInput = document.querySelector('.letter');
const wordInProgress = document.querySelector('.word-in-progress');
const remainingGuessesElement = document.querySelector('.remaining');
const remainingGuessesSpan = document.querySelector('.remaining span');
const message = document.querySelector('.message');
const playAgainButton = document.querySelector('.play-again');

let word = 'magnolia';

const placeholder = function(word) {
const wordArray = word.toUppercase().split('');
const placeholderLetters = [];
wordArray.forEach(function (letter) {
    placeholderLetters.push('●');
});
wordInProgress.innerText = placeholderLetters.join('');

};

guessLetterButton.addEventListener('click', (e) {
    e.preventDefault();
    message.innerText = '';
    const guess = letterInput.value.toUppercase();
    const goodGuess = validateInput(guess);
});