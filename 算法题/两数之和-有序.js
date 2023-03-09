/******
输入一个递增排序的数组和一个值target,在数组中找出两个和为target的数字并返回它们的下标 
提示：
数组中有且只有一对符合要求
同时一个数字不能使用两次 

示例：输入数组： [1,2,4,6,10],k的值为8 输出[1,3]
******/

function twoSum(arr, target) {
    let left = 0, right = arr.length - 1
    while(left < right && arr[left] + arr[right] !== target) {
        if(arr[left] + arr[right] < target) {
            left++
        } else {
            right--
        }
    }
    return [left, right]
}

console.log(twoSum([1,2,4,6,10], 8))