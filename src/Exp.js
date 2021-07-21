export class Expression {
  constructor(symbols, counter) {
    this.symbols = symbols;
    this.counter = counter;
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
    if (this.counter > 20) {
      return Math.ceil(Math.random() * 15);
    }
    if (this.counter > 10) {
      return Math.ceil(Math.random() * 10);
    }
    return Math.ceil(Math.random() * 5);
  }
}
