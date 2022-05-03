"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = document.querySelector('.highscore').textContent;
let num =  document.querySelector('.number');
let body = document.querySelector('body');
let scr = document.querySelector('.score');

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    //User input check
    if(!guess) {
        displayMessage('⛔ No number');
    } else if (guess === secretNumber) {
        displayMessage('🎉Correct Number!');
        num.textContent = secretNumber;
        body.style.backgroundColor = '#60b347';
        num.style.width = '30rem';
        //highscore
        if ( score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        } 
    } else {
        // When guess is wrong
        (guess > secretNumber)? displayMessage('📈Too high!') : displayMessage('📈Too low!');
        if (score > 1){
            score--;
            scr.textContent = score;
        } else {
            displayMessage('😢 You lost the game!');
            scr.textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 10;
    scr.textContent = score;
    displayMessage('Start guessing...');
    num.textContent = '?';
    document.querySelector('.guess').value = '';
    body.style.backgroundColor = '#222';
    num.style.width = '15rem';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});