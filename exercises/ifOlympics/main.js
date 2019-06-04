//Bronze

var person = {
    name: "Bobby",
    age: 12,
}

// 1.
if (person.age >= 18) {
    console.log("Enjoy the show!")
} else {
    console.log("You're not old enough for this movie.")
}

// 2.
if (person.name[0] === "B") {
    console.log("Enjoy the show!")
} else {
    console.log("We don't take your kind here.")
}

// 3.
if (person.age >= 18 && person.name[0] === "B") {
    console.log("Enjoy the show!")
} else {
    console.log("You don't quite fit the bill.")
}

// Silver

var num = 1

// 1.
if (num === "1") {
    console.log("strict")
} else if (num == "1") {
    console.log("loose")
} else {
    console.log("not equal at all")
}

// 2.
if (num <= 2 && 2 === 4) {
    console.log("yes")
}

// Gold
// 1.

if (typeof "dog" === "string"){
    console.log("This is a string")
} else {
    console.log("not a string")
}

// 2.
if (typeof "true" === "boolean") {
    console.log("this is a boolean")
} else {
    console.log("not a boolean. is it a string?")
}

// 3.
var unknownVar = "this is an unknown data type!"
if (typeof unknownVar === undefined) {
    console.log("oh no! That's undefined!")
} else {
    console.log("This is a " + typeof unknownVar)
}

// 4. 
if ("s" < 12) {
    console.log("Yup!")
} else {
    console.log("Nope!")
}

/* 5. No letter is greater than or less than any number and vice versa, it seems.
I can get behind that. They aren't comparable. */

// 6.
var myNum = 10
if (myNum % 2 === 0) {
    console.log("This is an even number")
} else {
    console.log("This is an odd number")
}

