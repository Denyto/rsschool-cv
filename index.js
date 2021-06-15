import { App } from "./src/App";

window.addEventListener("DOMContentLoaded", function () {
    const app = new App;
    app.init();

    document.querySelector('.button__startstop').addEventListener('click', () => { app.start() });


    document.querySelector('.enter').addEventListener("click", () => {


        if (document.querySelector('.screen-input').value !== '') {
            let result = +document.querySelector('.screen-input').value;
            if (document.querySelector('.drop:first-child')) {
                if (+document.querySelector('.drop:first-child').innerText === result) {
                    document.querySelector('.drop:first-child').remove();
                    document.querySelector('.ok').play();
                    app.result();
                } else {
                    document.querySelector('.mistake').play();
                    document.querySelector('.drop:first-child').style.borderColor = 'red';
                }
            }
        }

    });



});