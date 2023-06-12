const boardBoxes = document.querySelectorAll('.boardBox');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const startGame = document.querySelector('.start-game');

let result = 0;
let hit;
let currentTime = 10;
let countTime = null;
let countDownTimer = null;


//Random  game function
function randomBoxes() {
    boardBoxes.forEach((boardBox) => {
        boardBox.classList.remove('mole');
    });

    let randomBoxes = boardBoxes[Math.floor(Math.random() * 9)];
    randomBoxes.classList.add('mole');

    hit = randomBoxes.id;
}


