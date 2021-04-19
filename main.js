const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score;

function randomTime(min, max) {
  return Math.random() * (max - min) + min;
}

function randomHole(moles) {
  const idx = Math.floor(Math.random() * moles.length);
  const mole = moles[idx];
  if (mole === lastHole) {
    return randomHole(moles);
  }
  lastHole = mole;
  return mole;
}

function peep() {
  const time = randomTime(200, 1000);
  const mole = randomHole(moles);
  mole.classList.add("up");
  setTimeout(() => {
    mole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => (timeUp = true), 10000);
}

function bonk(e) {
  if (!e.isTrusted) return;
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
}

moles.forEach((mole) => mole.addEventListener("click", bonk));
