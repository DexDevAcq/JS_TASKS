const obj = {
    constructor: function(name, age) {
        this.name = name;
        this.age = age
    }
};

let obj2 = new obj.constructor('Valera', 20)


let obj3 = new obj2.constructor('Egor', 21)

console.log(obj2.name)
console.log(obj3.name)
console.log(obj3 === obj)