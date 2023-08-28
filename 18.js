function removeElementArray(arr, target) {
    return arr.filter(item => item !== target);
}
let arr = [10, 10, 20, 30, 10, 50, 60]
let target = 10;
let remove = removeElementArray(arr, target);
console.log(remove);