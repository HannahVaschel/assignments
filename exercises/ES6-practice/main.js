// let and const

const name = "John"
const age = 101
const pets = ["cat", "dog"]
const petObjects = []

function runForLoop() {
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        pet.name = name
        petObjects.push(pet)
    }
    return name
}

runForLoop()

// console.log(petObjects)


// ES6 Arrow Functions
// 1.
//**** */STILL SUPER BROKEN

const carrots = ["bright orange", "ripe", "rotten",]

function mapVegetables(arr) {
    arr.map(carrot => `{ type: "carrot", name: ${carrot}}`)

}

console.log(mapVegetables(carrots))


// 2.

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly)
}
// console.log(filterForFriendly(people))

// 3. 
const doMathSum = (a, b) => a + b

// console.log(doMathSum(4, 5))

const produceProduct = (a, b) => a * b

// console.log(produceProduct(2, 4))


// 4.
function printString(firstName, lastName, age){
    return(`Hi ${firstName || "Jane"} ${lastName || "Doe"}, how does it feel to be ${age || 40}?`)
}
// console.log(printString())


// 5.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 

function filterForDogs(arr) {
    return arr.filter(animal => animal.type === "dog")}

// console.log(filterForDogs(animals))


// Template Literals

function travelMessage(location, name){
    return (`Hi ${name}!
\nWelcome to ${location}.
\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`)
}

// console.log(travelMessage("nebraska", "joyce"))