//create an object and add a method
let car = {
    make: "toyota",
    model: "Carmy",
    year: 2000
}
car.startEngine = function() {
    console.log("Engine started")
}
car.startEngine();