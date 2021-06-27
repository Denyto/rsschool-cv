import { App } from "./src/App";


window.addEventListener("DOMContentLoaded", function () {
    const app = new App;
    app.init(); 
        

    document.querySelector('.button__startstop').addEventListener('click', () => {
        app.start();       
        document.querySelector('.melody').play();
        document.querySelector('.ocean').play();
    });


    document.querySelector('.enter').addEventListener("click", () => {


        if (document.querySelector('.screen-input').value !== '') {
            let result2 = +document.querySelector('.screen-input').value;

            if (document.querySelector('.drop:first-child')) {

                let result1 = processing(document.querySelector('.drop:first-child').innerText);            
                
                if (result1 === result2) {
                    document.querySelector('.drop:first-child').remove();
                    document.querySelector('.ok').play();
                    app.result();                    
                } else {
                    document.querySelector('.mistake').play();
                    document.querySelector('.drop:first-child').style.borderColor = 'red';
                    app.calcDefault();
                }
            }
        }

    });
   

    function processing (str) {
        if (str.includes('+')) {
            return +str.split('+')[0] + +str.split('+')[1];
        }
        if (str.includes('-')) {
            return +str.split('-')[0] - +str.split('-')[1];;
        }
        if (str.includes('*')) {
            return +str.split('*')[0] * +str.split('*')[1];;
        }
    }


    let y = 0;
    let waves = document.querySelector('.waves');
    let requestId = requestAnimationFrame(move);

    function move() {
        y += 0.3;
        waves.style.backgroundPosition = y + "px " + "0px";        
        requestId = requestAnimationFrame(move);
    }

   
    
});

