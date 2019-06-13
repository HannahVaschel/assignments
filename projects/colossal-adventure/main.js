const readline = require("readline-sync")

/////////////////////
// Global Variables
/////////////////////
const player = {
    name: "",
    health: 100,
    inventory: []
}
let gameOver = false
function killGameLoop(){
    const quitAnswer = readline.keyIn("Are you sure You'd like to quit? [y]/[n]", {limit: '$<y, n>'})
    if (quitAnswer === "y") {
        gameOver = true
    } else if (quitAnswer === "n") {
        break
    }
}
const userOptions =["walk", "kill"]


/////////////////////
// Game Functions
/////////////////////



/////////////////////
// Game Code
/////////////////////
console.log("Hello and welcome to the game! Theme to be determined later!")
player.name = readline.question("First of all, what is your name?: ")
console.log(`Nice to meet you, ${player.name}. Let's begin, please select an option.`)


//currently kill function is set to k
while(!gameOver) {
    const userAnswer = readline.keyIn(`
    What would you like to do? Select Key:
    [w] walk
    [i] check inventory
    [0] quit  
    `, userOptions, {limit: '$<w, k>'})
    if (userAnswer === "w"){
        console.log("You are walking")
    } else if (userAnswer === "k"){
        killGameLoop()
    } else if (userAnswer === "i"){
        console.log("nothing, you are poor.")
    }
}