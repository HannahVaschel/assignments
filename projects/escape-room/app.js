const readline = require("readline-sync")

const name = readline.question("Hello! What is your name?: ")
console.log(`Hello! ${name}, welcome to the Escape Room! You seem to be in a small, empty room. You see a suspicious-looking hole in the corner, a door behind you, and the words "GET THE KEY" scrawled in... an unidentifiable reddish substance on the wall. What would you like to do? `)

let gameOver = false

const options = ["Put hand in hole", "Find the key", "Open the door"]
let inventory = []

while (!gameOver) {
    const userAnswer = readline.keyInSelect(options, "Enter the number corresponding to your choice: ")

    if (userAnswer === 0) {
        console.log(" \nYou feel an unholy burning that begins in the very tips of your fingers and then rapidly spreads to the rest of your body. You are now dead. Why on Earth did you go for the hole, dummy?")
        gameOver = true
    
    } else if (userAnswer === 1) {
        console.log(" \nYou notice a faint glinting near the middle of the room. Turns out there's a key suspended on a string at eye-level. How did you miss it before? You grab it.")
        inventory.push("key")
    
    } else if (userAnswer === 2) {
        if (inventory.length === 0) {
            console.log(" \nThe door is locked. Shocker.")
        } else {
            console.log(" \nYou stick the key in the lock and turn. The door opens with a little bit of jiggling. On the other side is a party with all of your loved ones and beautifully catered reception in your honor. Congratulations! You win!")
            gameOver = true
        }
    
    } else if (userAnswer === -1) {
        console.log(" \nSeriously? Why bother playing an escape room then? There are only three options. Just pick one.")
    }
}