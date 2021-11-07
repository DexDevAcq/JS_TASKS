let dictionary = Object.create(null);


dictionary.toString = function(str) {
    let line = Object.toString(str);
    console.log(line);
    
}

dictionary.apple = 'apple';
dictionary.__proto__ = 'test';


for(let key in dictionary){
    console.log(key)
}


dictionary.toString(123)