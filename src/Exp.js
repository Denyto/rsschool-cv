export class Expression {
  constructor(symbols) {
    this.symbols = symbols;
  }

  create() {
    const randomSymbol = this.symbols[Math.round(Math.random())];
    return {
      num1: this.getRandomNum(),
      randomSymbol,
      num2: this.getRandomNum(),
    };
  }

  // eslint-disable-next-line class-methods-use-this
  getRandomNum() {
    return Math.ceil(Math.random() * 10);
  }
}
