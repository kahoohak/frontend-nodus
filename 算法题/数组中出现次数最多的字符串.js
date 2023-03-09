function findMax(arr) {
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] ? map[arr[i]]++ : (map[arr[i]] = 1);
    }

    const maxItem = Object.entries(map).reduce(
        (prev, next) => {
            return next[1] >= prev[1] ? next : prev;
        },
        ["", 0]
    );

    return maxItem[0];
}

const arr = ["abc", "a", "abc", "b", "a", "c", "abc"];

const res = findMax(arr);

console.log(res);
