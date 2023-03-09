function myInstanceof(left, right) {
    if(typeof left !== 'object') return false
    while(left) {
        if(left.__proto__ === right.prototype) {
            return true
        }
        left = left.__proto__
    }
    return false
}

console.log(myInstanceof([], Array))

console.log({}.__proto__)