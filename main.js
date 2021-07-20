import { App } from './src/App';

window.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.initComponents();
  const melody = document.getElementById('melody');
  const calc = document.querySelector('.calc');
  const ocean = document.getElementById('ocean');

  calc.addEventListener('click', (e) => app.calculationGame(e));
  window.addEventListener('keydown', (e) => app.calculationGame(e));
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && !melody.paused) {
      app.setDefaultGame();
      melody.pause();
      melody.currentTime = 0;
    }
  });

  function checkPlaying() {
    if (melody.paused || ocean.paused) {
      melody.play();
      ocean.play();
    } else {
      melody.pause();
      melody.currentTime = 0;
    }
  }

  document.querySelector('.button-startstop').addEventListener('click', () => {
    melody.play();
    ocean.play();
    app.startGame(() => checkPlaying());
  });

  document.querySelector('.button-demo').addEventListener('click', () => {
    checkPlaying();
    app.setDemoMode(() => checkPlaying());
  });

  function moveClouds() {
    let y = 0;
    const waves = document.querySelector('.waves');

    function move() {
      y += 0.5;
      waves.style.backgroundPosition = `${y}px 0px`;
      requestAnimationFrame(move);
    }
    requestAnimationFrame(move);
  }

  moveClouds();
});
