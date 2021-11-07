let hamster = {
    stomach: [],
    eat: function(food){
        this.stomach.push(food)
    }
};



let speedy = {
    stomach: [],
    __proto__: hamster
};


let lazy = {
    stomach: [],
    __proto__: hamster
};



lazy.eat('mashroom')
speedy.eat('apple')
console.log(lazy.stomach)
console.log(speedy.stomach)