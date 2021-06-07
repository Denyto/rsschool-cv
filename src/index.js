import { Raindrops } from "./Raindrops";
import { Score } from "./Score";
import { Calculator } from "./Calc";
import { Buttons } from "./Buttons";
import { Drop } from "./Drop";
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

