// Prelims
//1.

for (i = 0; i < 10; i++) {
    // console.log(i)
}


//2.

for (i = 9; i >= 0; i--) {
    // console.log(i)
}


//3.

var fruit = ["banana", "orange", "apple", "kiwi",]
for (i = 0; i <fruit.length; i++) {
    // console.log(fruit[i])
}


// Bronze
//1.

var numArray = []
for (i = 0; i < 10; i++) {
    numArray.push([i])
}
// console.log(numArray)


//2.

for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        // console.log(i)
    }
}


//3.

var allFruits = ["banana", "orange", "apple", "kiwi", "pear", "peach",]
var someFruits = []
for (i = 0; i < allFruits.length; i++) {
    if (i % 2 === 0) {
        someFruits.push(allFruits[i])
    }
}
// console.log(someFruits)


// Silver

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  //1.

  for (i = 0; i < peopleArray.length; i++) {
    //   console.log(peopleArray[i].name)
  }


//2.

  names = []
  occupations = []

  for (i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name)
    occupations.push(peopleArray[i].occupation)
  }
//   console.log(names)
//   console.log(occupations)
  
//3.

someNames = []
someJobs = []

for (i = 0; i <peopleArray.length; i++) {
    if (i % 2 === 0) {
        someNames.push(peopleArray[i].name)
    } else {
        someJobs.push(peopleArray[i].occupation)
    }
}
// console.log(someNames)
// console.log(someJobs)

// Gold

//1.
var emptyMatrix = []
var smallArray = []
var twoArray = []
var threeArray = []

for (i = 0; i < 3; i++) {
    for (i = 0; i < 3; i++) {
        smallArray.push(0)
    }
    for (i = 0; i < 3; i++) {
        twoArray.push(0)
    }
    for (i = 0; i < 3; i++) {
        threeArray.push(0)
    }
    emptyMatrix.push(smallArray)
    emptyMatrix.push(twoArray)
    emptyMatrix.push(threeArray)
}

// console.log(emptyMatrix)

// ****** OR! just make sure your nested for loops have a different variable, and my original idea works:
  // Thanks Bob!

var newMatrix = []
for (i = 0; i < 3; i++) { 
    newArray = []
    for (j = 0; j < 3; j++) {
        newArray.push(0)
    }
    newMatrix.push(newArray)
}
// console.log(newMatrix)

//2.

var someMatrix = []
var rowCount = 0
for (i = 0; rowCount < 3; i++) {
    newArray = []
    for (j = 0; j < 3; j++) {
        newArray.push(rowCount)
    }
    someMatrix.push(newArray)
    rowCount++
}
// console.log(someMatrix)

//3. 

var anotherMatrix = []
var counter = 0
for (i = 0; i < 3; i++) {
    var newArray = []
    for (j = 0; j < 3; j++) {
        newArray.push(j)
    }
    anotherMatrix.push(newArray)
    counter++
}
// console.log(anotherMatrix)

//4. 
var freshMatrix = [
    [0,1,2], 
    [0,0,0], 
    [0,0,0]
]
for (i = 0; i < freshMatrix.length; i++) {
    for (j = 0; j < freshMatrix[i].length; j++) {
        freshMatrix[i][j] = "x"
    }
}
// console.log(freshMatrix)



