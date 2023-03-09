function twoSum(arr, target) {
    const map = new Map()
    for(let i = 0; i < arr.length; i++) {
        const expectValue = target - arr[i]
        if(map.has(expectValue)) {
            return [map.get(expectValue), i]
        } else {
            map.set(arr[i], i)
        }
    }
}

console.log(twoSum([1,2,4,6,10], 8))