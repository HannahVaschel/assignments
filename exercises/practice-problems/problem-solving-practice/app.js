const someArray = [3, 5, 2, 8, 1]

function returnLargest(array){
    let largest 
    for (let i = 0; i < array.length; i++) {
        // console.log("i: " + i)
        for (let j = 0; j < array.length; j++) {
            // console.log("j: " + j)
            if (array[i] - array[j] < 0) {
                break
            } else if (j === array.length-1) {
                largest = array[i]
            }
        }
    }
    return largest
}
// console.log(returnLargest(someArray))

const randomArray = ["#3", "$$$", "C%4!", "Hey!"]

function lettersWithStrings(array, character){
    let charArray = []
    for (let i = 0; i < array.length; i++) {
        let check = array[i].includes(character)
        if (check === true) {
        charArray.push(array[i])
        } else {
            continue
        }
    }
    return charArray
}
// console.log(lettersWithStrings(randomArray, "!"))

function isDivisible(num1, num2) {
    if (num1 % num2 === 0) {
        return true
    } else {
        return false
    }
}

// console.log(isDivisible(10, 3))