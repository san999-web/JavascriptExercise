function getCurrentDateAandTime() {
    let currentDate = new Date();
    return currentDate.toLocaleString()
}
console.log(getCurrentDateAandTime());
console.log(new Date())