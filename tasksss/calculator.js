const calculator = {
    read: function(arg1, arg2) {
        this.a = arg1,
        this.b = arg2
        
    },

    sum: function(arg1, arg2){
        return arg1 + arg2;
    },

    mul: function(arg1, arg2){
        return arg1 * arg2;
    }


};



console.log(calculator.read(5, 5))
console.log(calculator.sum(calculator.a, calculator.b))
console.log(calculator.mul(calculator.a, calculator.b))