const input = [
    { id: 1, city: "北京", pid: 0 },
    { id: 2, city: "河南", pid: 0 },
    { id: 3, city: "山西", pid: 0 },
    { id: 4, city: "洛阳", pid: 2 },
    { id: 5, city: "晋中", pid: 3 },
    { id: 6, city: "榆次", pid: 5 },
];

const toTree = (arr) => {
    const map = {}
    arr.forEach(item => {
        map[item.id] = item
    })

    const res = []
    arr.forEach(item => {
        let parent = map[item.pid]
        if(parent) {
            (parent.children || (parent.children = [])).push(item)
        } else {
            res.push(item)
        }
    });

    return res
}

console.log(toTree(input))
