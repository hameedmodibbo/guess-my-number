'use strict';
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.real-number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value
// );

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    //When there is no input
    if (!guess) {
        console.log(document.querySelector('.message').textContent = 'No number');
        //When the user wins
    } else if (guess === secretNumber) {

        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.real-number').style.padding =
            '10px 50px';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //When the user guess high number
    } else if (guess > secretNumber) {
        if (score > 0) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = 'Too High! Try again';
            document.querySelector('body').style.backgroundColor = 'red';

        } else {
            document.querySelector('.message').textContent = 'You lost! Try again';
        }

        //When the user guess high number
    } else if (guess < secretNumber) {
        if (score > 0) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = 'Too low! try again';
            document.querySelector('body').style.backgroundColor = 'red';
        } else {
            document.querySelector('.message').textContent = 'You lost! Try again';
        }

    }

});
console.log(secretNumber);
