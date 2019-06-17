const readline = require("readline-sync")

///////////////////////////////////////////////////////////////
//                      Global Variables
///////////////////////////////////////////////////////////////
let gameOver = false
const player = {
    name: "",
    health: 100,
    inventory: [],
    maxAttack: 25,
    attack: function(){
        return Math.floor(Math.random() * (player.maxAttack)) + 1
    },
    level: 0,
    exp: 0,
    wallet: 0
}
let distanceTraveled = 0
let onPlanet1 = false

const goldWeaver ={
    type: "The Gold Weaver",
    health: 200,
    attack: function(){
        return Math.floor(Math.random() * 20)
    }
}



///////////////////////////////////////////////////////////////
//                      Simple Functions
///////////////////////////////////////////////////////////////
    //number generator
function randomNum(num){
    const randomNum = Math.floor(Math.random() * num)
    return randomNum
}    

////////////////////
    //walk function
function explore(){
    if (randomNum(3) === 0){
        const currentEnemy = generateEnemy()
        console.log(`\nCaptain ${player.name}, the radar is picking up a fast-approaching ${currentEnemy.type} in our flightpath.\n`)
        battleLoop(currentEnemy, "reg")
    } else {
        console.log("\nFull speed ahead!\n")
        distanceTraveled++
    }
}

///////////////////
    // enemy constructor template
function Enemy(type, health, attack,){
    this.type = type
    this.health = health
    this.attack = function(){
        return Math.floor(Math.random() * attack)
    }
    this.regen = randomNum(attack) + 1
    this.loot = randomNum(attack)
    this.exp = randomNum(health) + 1

}
///////////////////
    // generates a new enemy in game
function generateEnemy(){
    const num = randomNum(6)
    if (num < 2 ){
        return new Enemy ("Supersonic-Shearer", 10, 8,)
        // 50% chance of spawn
    } else if (num <= 4) {
        return new Enemy ("Jetpack Coyote", 25, 15,)
        // 33% chance of spawn
    } else {
        return new Enemy ("Space Eagle", 50, 20,)
        // 17% chance of spawn
    }
}


/////////////////////
    // Attack functions
function weAttack(enemy){
    let attackPower = player.attack()
    enemy.health -= attackPower
    console.log(`\nOur main lasers appear to have damaged the ${enemy.type} by a factor of ${attackPower}!`)
}

function theyAttack(enemy){
    let enemyAttack = enemy.attack()
    player.health -= enemyAttack
    console.log(`\nThe ${enemy.type} has decreased our shields by ${enemyAttack}!`) 
}

/////////////////////
    // check ship status
function checkStatus(){
    console.log(`
            ***** The Celestial Baa-dy *****
                Captain: ${player.name},
                level: ${player.level},
                experience: ${player.exp}
                Shields: ${player.health},
                Max Attack power: ${player.maxAttack},
                Wallet: ${player.wallet} coins,
                Inventory: ${player.inventory}`)
}

/////////////////////
    // rejuvenate at an inn
function restUp(level){
    if (level === 1){
        player.wallet -= 10
        player.health += 75
        console.log("You feel great after a little sheep-nap! That inn mechanic has your ship absolutely sparkling too!")
    } else if (level === 2){
        player.health += 125
        player.maxAttack +=1
    }
}

/////////////////////
    // visiting the Inn on First Planet
function visitInn1(){
    const innChoice = readline.keyIn(`Welcome to our humble inn! Our mechanic would be pleased to repair your shields while you take a rest! What would you like to do?
    [1] Rest in a bed (10 coins)
    [2] Ask for directions
    [3] Check Ship Status
    [4] Exit 
    `, {limit: '$<1, 2, 3, 4>'})
    if (innChoice === '1'){
        restUp(1)
    } else if (innChoice === '2'){
        console.log(`Tell ya what, if you're looking for this golden fleece I hear about, you're gonna want to head straight to the next star. It's only a lightyear or two away and there are rumors that an ancient Weaver with a penchant for glittering clothes lives on a station that orbits it. That pretty galaxy you see sparkles real nice, but I coulda swore the last time I tried to go sight-seein' there, 'fore I knew it, I was just back here on First Planet! 'course they say the old man has a nasty temper. Might not be a bad idea to get a little stronger before you face him.`)
        onPlanet1 = true
    } else if (innChoice === '3'){
        checkStatus()
        onPlanet1 = true
    }
    else {
        onPlanet1 = true
    }
}

/////////////////////
// end game loop immediately
function killGameLoop(reason){
    if (reason === 'k'){
        console.log("Game Loop Terminated")
        gameOver = true
    } else if (reason === "death") {
        console.log(`The lights aren't supposed to be flashing like this! The ship is going to blow!
        
        It was a pleasure serving with you, Captain ${player.name}.`)
        gameOver = true
    } else if (reason === "win"){
        console.log("You Win! Insert better flavor text here!")
        gameOver = true
    }
}

//////////////////////
// leveling up protocol
function levelUp(){
    player.level++
    player.maxAttack += 5
    player.health +=50
    player.exp = player.exp - 100
    console.log("Congratulations! You've gained a level")
    checkStatus()
}
///////////////////////////////////////////////////////////////
//                      Looping Functions
///////////////////////////////////////////////////////////////
    //procedure for in game battles
function battleLoop(enemy, lvl){
    while (enemy.health > 0 && player.health > 0){
        const userChoice = readline.keyIn(`
        What are your orders?:
            [1] Engage Enemy Threat
            [2] Flee
            [3] Check Ship Status
            `,
            {limit: '$<1, 2, 3, k>'})
        if (userChoice === "1"){
            console.log("\nShields up! Man your battle stations!")
            weAttack(enemy)
            
            if (enemy.health > 0){
                theyAttack(enemy)
            } else {
                let regenBonus = enemy.regen
                let coinBonus = enemy.loot
                let expBonus = enemy.exp
                console.log(`\nWe've defeated the enemy ${enemy.type}! \n Our Sheepgineers were able to repair our shields by ${regenBonus}.\nYou gained ${coinBonus} coins and ${expBonus} experience points!`)
                player.health += regenBonus
                player.exp += expBonus
                player.wallet += coinBonus
            }
        } else if (userChoice === "2"){
            const fleeChance = randomNum(2)
            if (fleeChance === 1){
                console.log(`\nWarp Drive systems are go! Engage Hyperspeed!
                Flee attempt successful.
                `)
                break
            } else {
                console.log(`The Warp Drive needs more power! We cannot escape!`)
                theyAttack(enemy)
            }
        } else {
            checkStatus()
        }
    }
    // if(player.health <= 0){
    //     killGameLoop("death")}
}

////////////////////////
    //fight the Ancient Shepherd for the golden fleece!
function weaverStation(){
    console.log(`You see a decrepit, old weaver. He's wearing the golden fleece. You try to take it off of him and he starts to fight you!`)
    while (goldWeaver.health > 0 && player.health > 0){
        const userChoice = readline.keyIn(`
        \nYou can take this fleece off my cold, dead corpse you damn mangy sheep!:
            [1] Engage Enemy Threat
            [2] Check Ship Status
            `,
            {limit: '$<1, 2, k>'})
    
        if (userChoice === "1"){
            console.log("\nShields up! Man your battle stations!")
            weAttack(goldWeaver)
            if (goldWeaver.health > 0){
                theyAttack(goldWeaver)
            } else {
                console.log(`Huzzah! You defeated the Gold Weaver and now are looking super snazzy in the one and only Golden Fleece! You notice that the shields of the Celestial Body appear to have a golden sheen over them as well.`)
                player.exp += 100
                player.health += 100
                player.inventory.push("the Golden Fleece")
                checkStatus()
            }
        }  else if (userChoice === '2'){
            checkStatus()
        }          
    }
    if(player.health <= 0){
            killGameLoop("death")}
}
    

///////////////////////
//  First Planet loop
function firstPlanet(){
    while (onPlanet1){
        distanceTraveled = 10
        const planetChoice = readline.keyIn(`
        Welcome to the first Planet! What would you like to do?
        [1] Visit the Inn
        [2] Explore towards the next galaxy
        [3] Explore towards the nearest star
        [4] Check Ship Status`, {limit: '$<1, 2, 3, 4, k>'})
        if (planetChoice === '1'){
            visitInn1()
            
        } else if (planetChoice === '2'){
            distanceTraveled = 5
            explore()
            onPlanet1 = false
        } else if (planetChoice === '3'){
            explore()
            onPlanet1 = false
        } else if (planetChoice === '4'){
            checkStatus()
        } else if (planetChoice === 'k'){
        killGameLoop('k')
        break
        }
    } 
}


///////////////////////////////////////////////////////////////
//                      Game Code
///////////////////////////////////////////////////////////////
console.log("\nGreetings! Welcome to your first voyage into Sheep Space Nine. You'll be commanding the famed spacecraft \"The Celestial Baa-dy\" which is staffed with some of the toughest, wooliest, and most resourceful sheep in the galaxy! \n\nYou'll need to reclaim three mystical items from various planets around the Galaxy in order to save your home planet from the Big Bad Wolf! Every time you explore, you progress forward about 1 lightyear. Your first objective is 15 lightyears away.")
player.name = readline.question("\nFirst of all, what should your crew call you?: ")
console.log(`\nPleasure to have you aboard, Captain ${player.name}. What's your first order?: `)


//currently kill function is set to k
while(!gameOver) {
    const userAnswer = readline.keyIn(`
    What would you like to do? Select Key:
    [e] Explore Space
    [s] Check Ship Status
    `, 
    {limit: '$<e, s, k>'})
    if (userAnswer === "e"){
        explore()
    } else if (userAnswer === "k"){
        killGameLoop('k')
    } else if (userAnswer === 's'){
        checkStatus()
    }

    if (player.exp >= 100){
        levelUp()
    }

    if (distanceTraveled === 10){
        onPlanet1 = true
        firstPlanet()
    } else if (distanceTraveled === 12){
        weaverStation()
    }
}