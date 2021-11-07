function Calculator() {}

Calculator.prototype.read = function(arg1, arg2) {
    this.a = arg1;
    this.b = arg2;
    console.log(this)
}

Calculator.prototype.sum = function() {
    return this.a + this.b;
}

Calculator.prototype.mul = function() {
    return this.a * this.b;
}

const calc = new Calculator();

calc.read(12, 12);
console.log(calc.sum())
console.log(calc.mul())