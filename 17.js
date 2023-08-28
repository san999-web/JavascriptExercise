function findLargestElement(arr) {
    return arr.reduce((max, current) =>
        current > max ? current : max
    )
}
findLargestElement(arr)
let arr = [10, 20, 30, 40, 50, 60]
let reduce = findLargestElement(arr);
console.log(reduce);