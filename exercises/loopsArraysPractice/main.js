// 1.
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var counter = 0
for (i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        counter++
    } 
}
console.log(counter)

// 2.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

//2.1
for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 17) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough")
    }
}

//2.2
for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 17 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough, She's good to go!")
  } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 17 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough, He can go on in.")
  } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " can't go in. She's not old enough.")
  } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " isn't old enough, he can't see this movie.")
  }
}

// Bonus

var lightArray = [2, 3, 2]
var onOffCounter = 0

for (i = 0; i < lightArray.length; i++) {
  if (lightArray[i] % 2 !== 0) {
    onOffCounter++
  } 
}
if (onOffCounter % 2 === 0) {
  console.log("The Light is off")
} else {
  console.log("The light is on.")
}