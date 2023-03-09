function myNew(fn, ...args) {
    let obj = Object.create(fn.prototype)

    let res = fn.apply(obj, args)

    if(res && (typeof res === 'object' || typeof res === 'function')) {
        return res
    } else {
        return obj
    }
}

function User(name, age) {
    this.name = name
    this.age = age
}

const obj = myNew(User, 'kaho', 18)

console.log(obj)