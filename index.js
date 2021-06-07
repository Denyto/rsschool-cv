import { Raindrops } from "./src/Raindrops";
import { Score } from "./src/Score";
import { Calculator } from "./src/Calc";
import { Buttons } from "./src/Buttons";
import { Drop } from "./src/Drop";
window.addEventListener("DOMContentLoaded", function () {
    generateRaindrops();
    generateScore();
    generateCalculator();
    generateButtons();
    generateDrop();  
    setTimeout(generateDrop, Math.random() * 20000);
    setTimeout(generateDrop, Math.random() * 20000);

});

const generateRaindrops = () => {
    let raindrops = new Raindrops;
    raindrops.initRaindrops();
};

const generateCalculator = () => {
    let calc = new Calculator;    
    calc.initCalculator();
}

const generateScore = () => {
    let score = new Score();
    score.initScore();
};

const generateButtons = () => {
    let buttons = new Buttons;
    buttons.initButtons();
};

const generateDrop = () => {
    let drop = new Drop('1+2', Math.random());
    drop.initDrop();   
}

