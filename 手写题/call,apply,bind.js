Function.prototype.myCall = function(obj, ...args) {
    let fn = Symbol('fn')
    obj[fn] = this
    obj[fn](...args)
    delete obj[fn]
}

Function.prototype.myApply = function(obj, args) {
    let fn = Symbol('fn')
    obj[fn] = this
    obj[fn](...args)
    delete obj[fn]
}

Function.prototype.myBind = function(obj, ...args) {
    const self = this
    const fbound = function() {
        self.apply(this instanceof self ? this : obj, [...args, ...arguments])
    }
    fbound.prototype = Object.create(self.prototype)
    return fbound
}

const foo = function(a, b) {
    console.log(this.name, a, b)
    this.name = a
}

const user = {name: 'kaho'}

const fee = foo.myBind(user, 'aaa')

const newUser = new fee()

console.log(newUser)