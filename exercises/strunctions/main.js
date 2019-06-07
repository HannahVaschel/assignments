var myString = "This is my super great string"
var otherString = "This string is good too, but not great"

function sliceAndDice(string){
    var slicer = string.slice(0, (Math.floor(string.length/2)))
    var shifter = slicer.toUpperCase()
    var splitter = shifter.split(" ")
    return(splitter)
}
// console.log(sliceAndDice(myString))

function anotherStringThing(string1, string2) {
    var num1 = string1.indexOf(" ")
    var strungOut = string1.substr(0, num1).concat(string1)
    var num2 = strungOut.lastIndexOf(" ")
    var weirdString = strungOut.substr(num1, num2)
    return(strungOut.replace(weirdString, string2))
}

// console.log(anotherStringThing(myString, otherString))

function lowsAndSpaces(string){
    var upString = string.toUpperCase()
    var halfString = upString.slice(0, Math.floor(upString.length/2))
    var someString = string.concat(halfString).toLowerCase()
    return(someString.match(/ /gi))


}
console.log(lowsAndMatch(myString))
