Function.prototype.defer = function(ms) {
    let _$ = this;
    setTimeout( () => _$(), ms)
}


function f() {
    console.log('Test')
}


f.defer(2000)