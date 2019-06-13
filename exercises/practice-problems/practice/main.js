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

