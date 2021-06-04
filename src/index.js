import { Raindrops } from "./Init";
import { Calc } from "./Calc";


// let DROP = document.querySelector('.drop');
// let SEA = document.querySelector('.sea');
// let INNERDROP = document.querySelector('span');
// let SCORE = document.querySelector('.score');
// let section1 = document.querySelector('.section1');
// let btnStartStop = document.querySelector('.button_1');
// let btnDemo = document.querySelector('.button_2');

// let start = 0;
// let topSea = 0;
// let res = 0;

// Raindrops.button_1.addEventListener('click', () => {
//     Raindrops.button_2.classList.remove('button_demo_active');
//     toggleStartStop();
// });
// btnDemo.addEventListener('click', () => {
//     btnStartStop.classList.remove('button_active');
//     toggleDemo();
// });

// function run () {
//     let bottomDrop = DROP.getBoundingClientRect().top + pageYOffset + DROP.getBoundingClientRect().height;
//     topSea = SEA.getBoundingClientRect().top + pageYOffset;
//     DROP.style.zIndex = 1;
//     DROP.style.top = start + 'vh';
//     start += 0.2;

//     if (bottomDrop > topSea) {
//         SCORE.innerHTML = `Score: ${res - 1}`
//         DROP.remove();
//         clearInterval(timeId, 100);
//         SEA.style.maxHeight = parseInt(window.getComputedStyle(SEA).maxHeight) + 5 + '%';    
//         createDrop('4×2');
//     }
// }

// function createDrop(expression) {
//     let d = document.createElement('div');
//     d.classList = 'drop';
//     d.style.top = 1 + 'vh';
//     d.style.left = Math.round(62 * Math.random()) + 'vw';
//     INNERDROP.innerHTML = expression;
//     d.appendChild(INNERDROP);  
//     section1.prepend(d);
// }

// function toggleStartStop () {
//     Raindrops.button_1.classList.toggle('button_active');
//     Raindrops.button_2.classList.toggle('button_demo_hidden');
// }

// function toggleDemo () {
//     btnDemo.classList.toggle('button_demo_active');
// }


// let timeId = setInterval(run, 30)
