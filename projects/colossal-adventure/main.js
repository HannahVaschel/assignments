const readline = require("readline-sync")

///////////////////////////////////////////////////////////////
//                      Global Variables
///////////////////////////////////////////////////////////////
let gameOver = false
const player = {
    name: "",
    health: 100,
    maxHealth: 100,
    inventory: [],
    maxAttack: 25,
    attack: function(){
        return Math.floor(Math.random() * (player.maxAttack)) + 1
    },
    level: 1,
    exp: 0,
    wallet: 0
}
let distanceTraveled = 0
let onPlanet1 = false
let innVisit = false

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
        distanceTraveled++
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

//////////////////
    // imposes max health ceiling on regen bonus
function checkRegen(num){
    if(player.health < player.maxHealth && player.health + num <= player.maxHealth){
        return num
    } else if (num + player.health > player.maxHealth){
        return player.maxHealth - player.health
    } else if (player.health === player.maxHealth){
        return 0
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
    console.log(`\nThe ${enemy.type} has decreased our shields by ${enemyAttack}!\n`) 
}

/////////////////////
    // check ship status
function checkStatus(){
    console.log(`
                ***** The Celestial Baa-dy *****
                    Captain: ${player.name},
                    Level: ${player.level},
                    Experience: ${player.exp}
                    Current Shields: ${player.health},
                    Maximum Shield Potential: ${player.maxHealth},
                    Maximum Attack Power: ${player.maxAttack},
                    Wallet: ${player.wallet} coins,
                    Inventory: ${player.inventory}`)
}

/////////////////////
    // rejuvenate at an inn
function restUp(){
        player.wallet -= 10
        player.health = player.maxHealth
        console.log(`\n\t\tYou feel great after a little sheep-nap! \n\t\tThat inn mechanic has your ship absolutely sparkling too!\n`)
}




/////////////////////
// end game loop immediately
function killGameLoop(reason){
    if (reason === 'k'){
        console.log("Game Loop Terminated")
        gameOver = true
    } else if (reason === "death") {
        console.log(`
            !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    The lights aren't supposed to be flashing like this! The ship is shutting down!
        
            It was a pleasure serving with you, Captain ${player.name}.
        
            ********************************************
    You have died. Your bodies are doomed to float endlessly through 
        space inside the sad tin can that is your now defunct ship. 
                        What baaaaad luck.

                         _.%%%%%%%%%%%%%
                        /x _%%%%%%%%%%%%%
                       (_ %L/%%%%%%%%%%%%
                          %%%$$$$$$$$$$$%
                            S%S%%%*%%%%S
                        ,,,,# #,,,,,,,##,,,,,
        `)
        killGameLoop('k')
    } else if (reason === "win"){
        console.log(`
        
        .
        .┈▔▔╲╱▔▔▔╲╱▔▔▏
        ┈╲＿╱╰╮┈╭╯╲＿╱
        ┈┈┈┈▏▉╮┈╭▉▕
        ┈┈┈╱╲╰╰┊╯╯╱╲
        ┈┈╱╰▕╰╰┳╯╯▏╯╲
        ┈▕╰╰╰╲╰┻╯╱╯╯╯▏
        ┈▕╰╰╰╰▔▔▔╯╯╯╯▏
        ┈▕╰╰╰╰╰╮╭╯╯╯╯▏
        ┈┈╲╭╮┈╰╮╭╯╭╮╱
        ┈┈┈┫┣╭━━━╮┫┃
        ┈┈┈┃┃┃┈┈┈┃┃┃
        ┈┈┈┗┛┛┈┈┈┗┗┛

        You've done it! You've defeated the evil Gold Weaver
        and recovered the one and only Golden Fleece!
        
        You look dazzling wrapped in it's excessive folds
        and layers, and your ship's shields even seem to 
        have taken on a golden sheen as well.
        
        Time to go home to your pasture planet, where
        you'll be hailed as a mighty hero for all Sheep-time!
        `)
        killGameLoop('k')
    }
}

//////////////////////
// leveling up protocol
function levelUp(){
    player.level++
    player.maxAttack += 5
    player.maxHealth += 50
    player.health = player.maxHealth
    player.exp = player.exp - 100
    console.log("Congratulations! You've gained a level")
    checkStatus()
}
///////////////////////////////////////////////////////////////
//                      Looping Functions
///////////////////////////////////////////////////////////////
    //procedure for in game battles
function battleLoop(enemy,){
    while (enemy.health > 0 && player.health > 0){
        const userChoice = readline.keyIn(`
        What are your orders?:\n
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
                let regenBonus = checkRegen(enemy.regen)
                let coinBonus = enemy.loot
                let expBonus = enemy.exp
                console.log(`\n\t\t********\n\nWe've defeated the enemy ${enemy.type}! \n\nOur Sheepgineers were able to repair our shields by ${regenBonus}.\n\nYou gained ${coinBonus} coins and ${expBonus} experience points!\n`)
                player.exp += expBonus
                player.wallet += coinBonus
                player.health += regenBonus
            }
        } else if (userChoice === "2"){
            const fleeChance = randomNum(2)
            if (fleeChance === 1){
                console.log(`
                    \n\t\t\t********\n
                Warp Drive systems are go! Engage Hyperspeed!
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
    if(player.health <= 0){
        killGameLoop("death")}
}

////////////////////////
    //fight the Ancient Shepherd for the golden fleece!
function weaverStation(){
    console.log(`


.##...##..######...####...##..##..######..#####............####...######...####...######..######...####...##..##.
.##...##..##......##..##..##..##..##......##..##..........##........##....##..##....##......##....##..##..###.##.
.##.#.##..####....######..##..##..####....#####............####.....##....######....##......##....##..##..##.###.
.#######..##......##..##...####...##......##..##..............##....##....##..##....##......##....##..##..##..##.
..##.##...######..##..##....##....######..##..##...........####.....##....##..##....##....######...####...##..##.
.................................................................................................................

You arrive at an old space station that appears to be falling apart despite it's excessive golden guilding. 
Suddenly a decrepit, old weaver appears on your com-screen. He's wearing the golden fleece! 
There's no reasoning with this old ghoul.\n`)
    while (goldWeaver.health > 0 && player.health > 0){
        const userChoice = readline.keyIn(`
        You can take this fleece off my cold, dead corpse you damn mangy sheep!:\n
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
                console.log(` 
                
                "Damn sheep! Why can't you leave an old man alone?" 
                `)
                killGameLoop('win')
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
        console.log(`
         ______ __                       __        _____          __ __           
        |   __ +  |.---.-..-----..-----.|  |_     |     |_.---.-.|__|  |--..---.-.
        |    __/  ||  _  ||     ||  -__||   _|    |       |  _  ||  |    < |  _  |
        |___|  |__||___._||__|__||_____||____|    |_______|___._||__|__|__||___._|
                                                                                  
        `)
        distanceTraveled = 15
        const planetChoice = readline.keyIn(`
        Welcome to the Planet Laika! Please enjoy your stay! \n\t\tWhat would you like to do?\n
                [1] Visit the Inn
                [2] Explore towards the next galaxy
                [3] Explore towards the nearest star
                [4] Check Ship Status
                `, {limit: '$<1, 2, 3, 4, k>'})
        if (planetChoice === '1'){
            onPlanet1 = false
            innVisit = true
            visitInn()
        } else if (planetChoice === '2'){
            distanceTraveled = 7
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

/////////////////////
    // visiting the Inn on First Planet
    function visitInn(){
        while (innVisit){
            const innChoice = readline.keyIn(`\n\t\t\t\tWelcome to our humble inn! \n\t\tWe offer complementary Sheep-ship mechanic services any time you pay to rest with us! \n\t\t\tWhat would you like to do?\n
                        [1] Rest and repair ship (10 coins)
                        [2] Ask for directions
                        [3] Check ship status
                        [4] Exit 
                        `, {limit: '$<1, 2, 3, 4>'})
            if (innChoice === '1'){
                restUp(1)
            } else if (innChoice === '2'){
                console.log(`
            Tell ya what, if yer lookin' for this golden fleece I keep hearin' talk 'bout, 
            yer gonna want to head straight to th' next star. 
            \n\tS'only a lightyear or two away and there are rumors of an ancient Weaver with 
            a taste for glitt'r'n clothes livin' on th' station what orbits it. 
            \n\tTha' galaxy you see sparkles real nice, but I coulda swore th' last time I tried
            to go sight-seein' there... 
            'fore I knew it, I was just back here on First Planet! 
            \n\t'course they say tha' ol' weaver has a  right nasty temper. Lookin' fer tha' 
            galaxy might not be a bad way to get a little stronger 'fore you go pickin' fights.
            `)
            
            } else if (innChoice === '3'){
                checkStatus()
            }
            else {
                innVisit= false
                onPlanet1 = true
            }
        }
    }


///////////////////////////////////////////////////////////////
//                      Game Code
///////////////////////////////////////////////////////////////
console.log(
`

            _______  __                             _______                                ______   __               
           |   _   ||  |--..-----..-----..-----.   |   _   |.-----..---.-..----..-----.   |   _  – |__|.-----..-----.
           |   1___||     ||  -__||  -__||  _  |   |   1___||  _  ||  _  ||  __||  -__|   |.  |   ||  ||     ||  -__|
           |____   ||__|__||_____||_____||   __|   |____   ||   __||___._||____||_____|   |.  |   ||__||__|__||_____|
           |:  1   |                     |__|      |:  1   ||__|                          |:  |   |                  
           |::.. . |                               |::.. . |                              |::.|   |                  
           '-------'                               '-------'                              '--- ---'                  
                                                                                                         
\n\tGreetings! Welcome to your first voyage into Sheep Space Nine. You'll be commanding the famed spacecraft \n\t"The Celestial Baa-dy\" which is staffed with some of the toughest, wooliest, and most resourceful sheep in the galaxy! \n\n\tYour mission is to reclaim your home-planet's prized artifact, The Golden Fleece! \n\tEvery time you explore, you progress forward about 1 lightyear. \n\n\tThere is a planet you can ask for more information about the Fleece's whereabouts about 15 lightyears away.`)
player.name = readline.question("\n\tFirst of all, what is your name?: ")
console.log(`\nPleasure to have you aboard, Captain ${player.name}. What's your first order?: `)


//currently kill function is set to k
while(!gameOver) {
    const userAnswer = readline.keyIn(`
    What would you like to do? Select Key:\n
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

    if (distanceTraveled === 15){
        onPlanet1 = true
        firstPlanet()
    } else if (distanceTraveled === 17){
        weaverStation()
    }
}