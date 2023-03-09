const compose = (...fns) =>
    fns.reduce(
        (prev, next) =>
            (...args) =>
                next(prev(...args))
    );

const add1 = (x) => x + 1;
const mul3 = (x) => x * 3;
const div2 = (x) => x / 2;
div2(mul3(add1(5))); //=> 9

let result = compose(add1, mul3, div2)(5);
console.log(result); // =>9
