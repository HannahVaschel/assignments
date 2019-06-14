// 1.
function doubleNumbers(arr){
    const newArr = arr.map(function(num){
        return num * 2
    })
    return newArr
  }
  
//   console.log(doubleNumbers([2, 5, 100]))

// 2.
function stringItUp(arr){
    const strArr = arr.map(function(num){
        return num.toString()
    })
    return strArr
}
  
//   console.log(stringItUp([2, 5, 100]))

// 3.
function capitalizeNames(arr){
    const betterCase = arr.map(function(str){
        let cap = str[0].toUpperCase()
        let formatted = []
        // capitalize.concat(formatted)
        for (let i = 1; i < str.length; i++){
            formatted.push(str[i].toLowerCase())
        }
    const lows = formatted.join("")
    const final = cap.concat(lows)
    return final
    })
    return betterCase
}

//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));


// 4.

function namesOnly(arr){
    const names = arr.map(function(obj){
        return obj.name
    })
    return names
  }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 

// 5.



// 5.
function makeStrings(arr){
    const movieString = arr.map(function(obj){
        if (obj.age > 17){
            return obj.name + " can go to the Matrix!"
        } else {
            return obj.name + " is under age!"
        }
    })
    return movieString
}

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
  
function readyToPutInTheDOM(arr){
    const movieString = arr.map(function(obj){
            return `<h1>${obj.name}</h1><h2>${obj.age}</h2>`
    })
    return movieString
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 