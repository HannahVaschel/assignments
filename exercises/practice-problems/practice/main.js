// 1.

const string = "Hello World"

function reverseString(string){
    let array = string.split('')
    array.reverse()
    console.log(array)
    revStr= array.join("")
    return revStr
}

// console.log(reverseString(string))

// 2.
function isNum(str) {
    let test = parseInt(str)
    if (test * 0 !== 0){
        return(false)
    } else {
        return(true)
    }

}

// console.log(isNum("hi"))

// 3.
function isEven(num){
    return(num % 2 === 0)
}

// console.log(isEven(5))

// 4.
numArray = [1, 2, 3, 4, 5]

function findMean(array){
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    } 
    return (sum / array.length)
}

// console.log(findMean(numArray))


//5. 
const letArr = ["a", "b", "c",]
const numArr = [1, 2, 3]

function arrayZipper(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr2.length; i++){
        newArr.push(arr1[i])
        newArr.push(arr2[i])
    }
    return newArr
}
// console.log(arrayZipper(letArr, numArr))


// what if one array is longer than the other? 

const lettersArr = ["a", "b", "c", "d", "e"]

// function findLongArr(arr1, arr2) {
//     if (arr1 > arr2) {
//         return arr1
//     } else {
//         return arr2
//     }
// }
// function findShortArr(arr1, arr2) {
//     if (arr1 < arr2) {
//         return arr1
//     } else {
//         return arr2
//     }
// }

// console.log(findShortArr(lettersArr, numArr))

function arrayZipper(arr1, arr2) {
    const newArr = []
    let length
    let longArr
    const diff = arr1.length - arr2.length
    if (diff < 0){
        length = arr2.length
        longArr = arr2
    } else {
        length = arr1.length
        longArr = arr1
    }
    for (let i = 0; i < length; i++){
        if (i + diff < length) {
            newArr.push(arr1[i])
            newArr.push(arr2[i])
        } else {
            newArr.push(longArr[i])
        }
    }
    return newArr
}

console.log(arrayZipper(lettersArr, numArr))