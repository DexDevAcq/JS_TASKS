function makeUser() {
    return {
        name: 'valera',
        ref() {
            return this
        }
    }
}

let user = makeUser();

console.log(user.ref().name)
