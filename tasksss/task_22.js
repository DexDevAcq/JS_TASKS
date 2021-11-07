function someInput() {
    let run = true;
    let userArray = [];
    while (run){
        let userInput = prompt();
        if(+userInput == NaN || +userInput === 0){
            run = false
        } else {
            userArray.push(userInput)
        }
    }

    return userArray.reduce((sum, num) => {
        return sum + num
    }, 0)
}

let result = someInput();

console.log(`The whole sum is ${result}`)


// let a = Number(prompt())
// let b = +prompt();
// let c = +prompt();

// console.log(a, typeof a, a === null, a == undefined, typeof a === Number)
// console.log(b, typeof b, b === null, b === undefined, typeof b == Number)
// console.log(c, typeof c, c === null, c === undefined, c === Number)

// console.log( isNan(123))
