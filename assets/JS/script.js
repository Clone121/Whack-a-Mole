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

//Hit and score function
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
    // Game speed
    countTime = setInterval(randomBoxes, 1000);
    countDownTimer = setInterval(countDown, 1000);
    timeLeft.textContent = currentTime;
    score.textContent = result;
}

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime === 0) {
        clearInterval(countDownTimer);
        clearInterval(countTime);
        alert('GAME OVER! Your final score is : ' + result);
    }
}

startGame.addEventListener('click', moveMole);