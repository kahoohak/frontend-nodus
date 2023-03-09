const curry = (fn, len = fn.length, ...args) => {
    len <= args.length ? fn(...args) : curry.bind(null, fn, len, ...args);
};

const add = (a, b, c) => a + b + c;

console.log(curry(add)(1)(2, 3));
