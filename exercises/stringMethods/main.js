function upperAndLowerCase(string) {
    return(string.toUpperCase() + string.toLowerCase())
}

var justHi = "hello"
var greeting = "Hello World"
var someString = "Radical"

var newString = upperAndLowerCase(someString)
// console.log(newString)


function findMiddleIndex(floaty) {
    var middle = Math.floor(floaty.length / 2)
    return(middle)
}


var theMid = findMiddleIndex(greeting)
// console.log(theMid)



function justTheFront(stringer) {
    var mid = findMiddleIndex(stringer)
    return stringer.slice(0, mid)
}

var theFront = justTheFront(greeting)
// console.log(justTheFront(justHi))
// console.log(theFront)


function capsFrontLowsBack(stringy){
    var midPo = findMiddleIndex(stringy)
    if (stringy.length % 2 === 0) {
        return(justTheFront(stringy).toUpperCase().concat(stringy.slice(midPo + 1)))
    } else {
        midPo -= 1
        return(justTheFront(stringy).toUpperCase().concat(stringy.slice(midPo + 1)))
    }
}
// console.log(capsFrontLowsBack(greeting))
// console.log(capsFrontLowsBack(justHi))

var capThis = "hey friends! practice practice practice!"

function capitalize(stringo) {
    var splitString = stringo.split(" ") //makes into an array
    var capString = []
    for (i = 0; i < splitString.length; i++) {
        capString.push(splitString[i].replace(splitString[i][0], splitString[i][0].toUpperCase()))
        //push into new array, each separate string, after replacing the first character with Caps
    }
    return(capString.join(" "))
}
console.log(capitalize(capThis))
