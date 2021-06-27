export class Expression {
    constructor() {
        this.num1 = Math.round(Math.random() * 10);
        this.num2 = Math.round(Math.random() * 10);
        this.symbols = ['+', '-'];        
    }

    create(bonus = null) {
        let randomSymbol;
        !bonus ? randomSymbol = this.symbols[Math.round(Math.random() * 1)] :
            randomSymbol = bonus;


        let result;

        switch (randomSymbol) {
            case "-":
                this.num1 > this.num2 ? result = `${this.num1}${randomSymbol}${this.num2}` :
                 result = `${this.num2}${randomSymbol}${this.num1}`;
               
                break;

            case "*":
                    result = `${this.num2}${randomSymbol}${this.num1}`;

                break;

            default:
                
                result = `${this.num1}${randomSymbol}${this.num2}`;
             
                break;
        }

       return result;
    }  
}