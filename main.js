import { App } from "./src/App";

window.addEventListener("DOMContentLoaded", function () {

    const app = new App;
    app.init();

    const melody = document.querySelector('.melody');
    const calc = document.querySelector('.calc');
    const ocean = document.querySelector('.ocean');

    calc.addEventListener('click', (e) => app.calc(e));

    document.querySelector('.button__startstop').addEventListener('click', () => {
        app.start();        
        melody.play();
        ocean.play();
    });

    document.querySelector('.button__demo').addEventListener('click', () => {
        app.demo();       
    });

    let y = 0;
    let waves = document.querySelector('.waves');
    let requestId = requestAnimationFrame(move);

    function move() {
        y += 0.3;
        waves.style.backgroundPosition = y + "px " + "0px";
        requestId = requestAnimationFrame(move);
    }

});

