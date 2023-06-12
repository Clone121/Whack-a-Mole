const boardBoxes = document.querySelectorAll('.boardBox');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const startGame = document.querySelector('.start-game');

let result = 0;
let hit;
let currentTime = 10;
let countTime = null;
let countDownTimer = null;