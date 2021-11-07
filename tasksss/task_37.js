function sum(n){
    let currentNumber = n;

    function func(a) {
        currentNumber += a;
        console.log(currentNumber)
        return func;
    }

    return func;
}


sum(1)(2)(3)(4)