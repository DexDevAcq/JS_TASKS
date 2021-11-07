function Accumulator(startingValue) {
    this.value = startingValue;


}

Accumulator.prototype.read = function() {
    let userValue = +prompt();
    this.value += userValue
}

const accum = new Accumulator(1);


accum.read();
accum.read();

alert(accum.value)
