export class Expression {
  constructor(symbols) {
    this.symbols = symbols;
  }

  create() {
    const num1 = Math.ceil(Math.random() * 10);
    const num2 = Math.ceil(Math.random() * 10);
    const randomSymbol = this.symbols[Math.round(Math.random())];
    return { num1, randomSymbol, num2 };
  }
}
