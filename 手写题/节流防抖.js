function debounce(fn, wait) {
    let timer = null
    return function(...args) {
        let context = this
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, wait)
    }
}

function throttle(fn, wait) {
    let timer = null
    return function(...args) {
        let context = this
        if(!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args)
                timer = null
            }, wait)
        }
    }
}

let foo = function() {
    console.log('foo')
}

let fee = throttle(foo, 2000)

let n = 1
let outTimer = setInterval(() => {
    n++
    if(n <= 10) {
        fee()
    } else {
        clearInterval(outTimer)
    }
}, 1000)