const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const start = document.getElementById('#start');
let lastMole;
let timeUp;
let score;
let timeStart = false;

function randomTime(min, max) {
  return Math.random() * (max - min) + min;
}

function randomMole(moles) {
  const idx = Math.floor(Math.random() * moles.length);
  const mole = moles[idx];
  if (mole === lastMole) {
    return randomMole(moles);
  }
  lastMole = mole;
  return mole;
}

function peep() {
  const time = randomTime(200, 1000);
  const mole = randomMole(moles);
  mole.classList.add('up');
  setTimeout(() => {
    mole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => {
    timeUp = true;
    timeStart = false;
  }, 5000);
}

function bonk(e) {
  if (!e.isTrusted) return;
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

start.addEventListener('click', () => {
  if (!timeStart) {
    startGame();
    timeStart = true;
  };
});
moles.forEach((mole) => mole.addEventListener('click', bonk));
