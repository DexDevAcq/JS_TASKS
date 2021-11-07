let arr = [1, 2, 3, 4, 5, 6, 7];



function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b
    }
}


function inArray(array){
    return function(x) {
       for(let item of array){
           if(item === x){
               return true
           }
       }
    }
}

console.log(arr.filter(inBetween(5, 7)))
console.log(arr.filter(inArray([1, 2, 10, 23, 22, 5, 12, 7])))