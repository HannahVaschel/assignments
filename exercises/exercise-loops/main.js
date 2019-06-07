var myString = "This be a string."

function stringToArray(string) {
    var newArray = []
    for (var i = 0; i < string.length; i ++) {
        newArray.push(string[i])
    } return(newArray)
}

// console.log(stringToArray(myString))

function findCharacter(string, q) {
    let location
    for (let i = 0; i < string.length; i++) {
        if (string[i] === q) {
            location = i
        } 
    }    
    if (location >= 0){ 
        return(location)
    } else {
        return("Character not found!")
    }
}

// console.log(findCharacter(myString, "q"))

const numberArray = [1, 2, 42, 3, 4, 5, 6, 7, 8, 9,]

function find42(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 42) {
            return("Found 42!")
        }
    } return ("42 not found!")
}

// console.log(find42(numberArray))

function findSmallestOf10(numArray) {
    let smallest
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++)
            if (numArray[i] > numArray[j]) {
                break
            }

    }
}