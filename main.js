import { App } from "./src/App";

window.addEventListener("DOMContentLoaded", function () {

    const app = new App;
    app.init();
    cloudsMove();

    const melody = document.getElementById('melody');
    const calc = document.querySelector('.calc');
    const ocean = document.getElementById('ocean');

    calc.addEventListener('click', (e) => app.calc(e));

    document.querySelector('.button-startstop').addEventListener('click', () => {
        app.start();        
        melody.play();
        ocean.play();
    });

    document.querySelector('.button-demo').addEventListener('click', () => {       
            app.demo();
            app.calcDemo();               
    });

    function cloudsMove() {
        let y = 0;
        let waves = document.querySelector('.waves');
        let requestId = requestAnimationFrame(move);

        function move() {
            y += 0.5;
            waves.style.backgroundPosition = y + "px " + "0px";
            requestId = requestAnimationFrame(move);
        }
    };    
});

