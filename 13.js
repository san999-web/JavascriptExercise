function fact(n) {
    if (n === 0 || n === 1) {
        return 1;

    } else {
        let flag = 1;
        for (let i = 1; i <= n; i++) {
            flag *= i;
        }
        return flag;
    }
}
console.log(fact(5));