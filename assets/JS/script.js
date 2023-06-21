const boardBoxes = document.querySelectorAll('.boardBox');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const startGame = document.querySelector('.start-game');

let result = 0;
let hit;
let currentTime = 10;
let countTime;
let countDownTimer;

//Random function for mole

function randomBoxes() {
    boardBoxes.forEach((boardBox) => {
        boardBox.classList.remove('mole');
    });

    let randomBoxes = boardBoxes[Math.floor(Math.random() * 9)];
    randomBoxes.classList.add('mole');

    hit = randomBoxes.id;
}
//Hit and score function

function randomBoxes() {
    boardBoxes.forEach((boardBox) => {
        boardBox.classList.remove('mole');
    });

    let randomBoxes = boardBoxes[Math.floor(Math.random() * 9)];
    randomBoxes.classList.add('mole');

    hit = randomBoxes.id;
}

boardBoxes.forEach((boardBox) => {
    boardBox.addEventListener('mousedown', () => {
        if (boardBox.id == hit) {
            result++;
            score.textContent = result;
            hit = null;
        }
    });
});

function moveMole() {
    result = 0;
    currentTime = 10;
    countTime = setInterval(randomBoxes, 1000); //speed on mole
    countDownTimer = setInterval(countDown, 1000);
    timeLeft.textContent = currentTime;
    score.textContent = result;
}

function countDown() {
    if (currentTime > 0) {
        currentTime--;
        timeLeft.textContent = currentTime;
        startGame.disabled = true;
    } else {
        clearInterval(countDownTimer);
        clearInterval(countTime);
        alert('Game Over! your score is : ' + result);
        startGame.disabled = false;
    }
}

startGame.addEventListener('click', moveMole);
