var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
var food = []

// console.log("fruit: ", fruit)
// console.log("vegetables: ", vegetables)

function differentSalads() {
    vegetables.pop()
    fruit.shift()
    fruit.push(fruit.indexOf("orange"))
    vegetables.push(vegetables.length)
    food = fruit.concat(vegetables)
    food.splice(4, 2)
    food.reverse()
    return(food.toString())


}



// console.log("fruit: ", fruit)
// console.log("vegetables: ", vegetables)
// console.log("food: ", food)
console.log(differentSalads())