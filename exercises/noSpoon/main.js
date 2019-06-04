var coffee = {
    name: "coffee",
    cupColor: "white",
    hasCream: true,
    timeMade: 8.5,
    isHot: function(currentTime) {
        if (currentTime - this.timeMade < 1) {
            console.log("This was made less than an hour ago, it's still pretty fresh.")
        } else if (currentTime < this.timeMade){
            console.log("That wasn't even made today! Throw it out!")
        }
            else {
            console.log("That stuff is old. Get a new cup of Joe.")
        } 
    } //times must be expressed as floats using 24-hour system. eg: 10:15pm -> 22.25
}

var backpack = {
    color: "grey",
    packed: true,
    quantityItems: 2,
    howPacked: function() {
        console.log("Your " + this.color + " backpack has " + this.quantityItems + " inside already.")
    },
    contents: [
        {
            name: "notebook",
            color: "red",
            pages: 70,
            spiralBound: true,
            open: function(){
                return("You flip to a random, blank page")
            },
            pages: ["notes about python", "pre-course project notes", "doodles of cute animals"],
        }, {
            name: "chapstick",
            color: "green",
            brand: "Blistex",
            flavor: "none",
            apply: function() {
                console.log("Smear it on your face.")
            }
        }
    ],
    packItem: function(itemName) {
            this.contents.push(itemName)
            this.quantityItems++
    }
}

var phoneNumber = "555-555-5555"

var itemsToPack = [
    {
    name: "journal",
    color: "grey",
    page: 250,
    spiralBound: false,
    plan: function() {
        console.log("Today I will accomplish the following tasks:")
        }
    },  
    {
    name: "phone",
    color: "black",
    hasCase: true,
    brand: "motorola",
    carrier: "Google Fi",
    timesDropped: 47,
    call: function(phoneNumber) {
        console.log("You are calling this number: " + phoneNumber)
        }
    },
    {
    name: "inhaler",
    color: "red",
    essential: true,
    usesLeft: 22,
    inhale: function() {
        console.log("Please don't die.")
        }
    },
    {
    name: "fitbit",
    color: "black",
    hasCharge: true,
    checkTime: function() {
        console.log("You glanced at your watch, but it turns out you didn't pay attention. What time is it again?")
        }
    },
    {
    name: "pen",
    color: "black",
    write: function() {
        console.log(backpack.contents[0].open())
        console.log("Let's try to map out this complicated coding problem!")
        }
    },
]


// console.log(backpack.contents)

//  pen.write()

for (i = 0; i < itemsToPack.length; i++) {
    (backpack.packItem(itemsToPack[i]))    
}

// console.log(itemsToPack[0].name)

// backpack.packItem(itemsToPack[0])
console.log(backpack.contents)
console.log(backpack.quantityItems)