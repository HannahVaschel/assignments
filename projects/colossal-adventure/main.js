const readline = require("readline-sync")

/////////////////////
// Global Variables
/////////////////////
let gameOver = false
const player = {
    name: "",
    health: 100,
    inventory: [],
    attack: function(){
        return Math.floor(Math.random() * 25)
    },
}



/////////////////////
// Game Functions
/////////////////////
    //number generator
function randomNum(num){
    const randomNum = Math.floor(Math.random() * num)
    return randomNum
}    

    //walk function
function explore(){
    if (randomNum(3) === 0){
        const currentEnemy = generateEnemy()
        console.log(`\nCaptain ${player.name}, the radar is picking up a fast-approaching ${currentEnemy.type} in our flightpath.\n`)
        battleLoop(currentEnemy)
    } else {
        console.log("\nFull speed ahead!\n")
    }
}

    // enemy constructor template
function Enemy(type, health, attack){
    this.type = type
    this.health = health
    this.attack = attack

}
    // generates a new enemy in game
function generateEnemy(){
    const num = randomNum(6)
    if (num < 3 ){
        return new Enemy ("Supersonic-Shearer", 10, 5)
        // 50% chance of spawn
    } else if (num <= 5) {
        return new Enemy ("Jetpack Wolf", 25, 15)
        // 33% chance of spawn
    } else {
        return new Enemy ("Space Eagle", 50, 25)
        // 17% chance of spawn
    }
}

    //procedure for in game battles
function battleLoop(enemy){
    while (enemy.health > 0 && player.health > 0){
        const userChoice = readline.keyIn(`
        What are your orders?:
            [1] Engage Enemy Threat
            [2] Flee
            [3] Check Ship Status`,
            {limit: '$<1, 2, 3, k>'})
        if (userChoice === "1"){
            console.log("\nShields up! Man your battle stations!")
            let attackPower = player.attack
            let enemyAttack = enemy.attack
            enemy.health -= attackPower
            console.log(`Our main lasers appear to have damaged the ${enemy.type} by a factor of ${attackPower}!`)
            if (enemy.health <= 0){
                console.log(`We've defeated the enemy ${enemy.type}!`)
            }
           player.health -= enemyAttack
           console.log(`The ${enemy.type} has decreased our shields by ${enemyAttack}!`) 
        }
    }
}



    // end game loop immediately
function killGameLoop(){
    console.log("Game Loop Terminated")
    gameOver = true
}

/////////////////////
// Game Code
/////////////////////
console.log("\nGreetings! Welcome to your first voyage into Sheep Space Nine. You'll be commanding the famed spacecraft \"The Celestial Baa-dy\" which is staffed with some of the toughest, wooliest, and most resourceful sheep in the galaxy!")
player.name = readline.question("\nFirst of all, what should your crew call you?: ")
console.log(`\nPleasure to have you aboard, Captain ${player.name}. What's your first order?: `)


//currently kill function is set to k
while(!gameOver) {
    const userAnswer = readline.keyIn(`
    What would you like to do? Select Key:
    [e] Explore Space
    [s] Check Ship Status
    `, 
    {limit: '$<e, k>'})
    if (userAnswer === "e"){
        explore()
    } else if (userAnswer === "k"){
        killGameLoop()
    }
}