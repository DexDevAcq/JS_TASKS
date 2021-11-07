function sayHi() {
    console.log(this.name)
}


sayHi.asda = '2131'

let bound = sayHi.bind({
    name: 'qweqe'
})


console.log(bound.asda)