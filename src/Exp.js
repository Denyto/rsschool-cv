export class Expression {
    constructor() {
        this.num1 = Math.ceil(Math.random() * 10);
        this.num2 = Math.ceil(Math.random() * 10);
        this.symbols = ['+', '-'];
        this.symbolsBonus = ['×', '÷'];
        
    }

    create() {
        let result;
        let randomSymbol;
        randomSymbol = this.symbols[Math.round(Math.random() * 1)];

        switch (randomSymbol) {
            case "-":
                this.num1 > this.num2 ? result = `${this.num1}${randomSymbol}${this.num2}` :
                    result = `${this.num2}${randomSymbol}${this.num1}`;
                break;            
            default:
                result = `${this.num1}${randomSymbol}${this.num2}`;
                break;
        }
        
        return result;
    }

    createBonus() {
        let resultBonus;
        let randomSymbolBonus;
        randomSymbolBonus = this.symbolsBonus[Math.round(Math.random() * 1)];

        switch (randomSymbolBonus) {
            case "÷":
                this.num1 > this.num2 && this.num2 !== 0 ? resultBonus = `${this.num1 * this.num2}${randomSymbolBonus}${this.num2}` :
                    resultBonus = `${(this.num1 + 1) * this.num2}${randomSymbolBonus}${(this.num1 + 1)}`;
                break;           
            default:
                resultBonus = `${this.num1}${randomSymbolBonus}${this.num2}`;
                break;
        }

        return resultBonus;
    }

   
}