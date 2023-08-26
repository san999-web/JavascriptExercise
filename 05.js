let str = "hello world";

function revStr(str) {
    return str.split("").reverse().join("");
}
console.log(revStr(str))