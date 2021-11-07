function sum(a) {

    function bfunc(b) {
        console.log(`Answer is ${a + b}`)
    }

    return bfunc;
}


sum(-5)(12)