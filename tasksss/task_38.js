// function printNumbers(from, to){
//     let currentNum = from;
//     function counter() {
//         console.log(currentNum)
//         if(currentNum < to){
//             setTimeout(counter, 1000)
//             currentNum++;
//         }
//     }

//     setTimeout(counter, 1000)
// }

// printNumbers(3, 5);



function printNumbers(from, to){
    let currentNum = from;


    function counter() {
        console.log(currentNum);
        if(currentNum == to){
            clearInterval(this);
        } else {
            currentNum++;
        }
    }

    let inter = setInterval(counter, 1000);

} 

printNumbers(3, 5);