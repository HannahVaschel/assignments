// 1.

function total(arr) {
    const totalSum = arr.reduce(function(total, num){
        return total += num
    }, 0)
    return totalSum
 }
//  console.log(total([1,2,3]));

// 2.

function stringConcat(arr) {
    const string = arr.reduce(function(str, num){
        return str += num.toString()
    })
return string
 }
 
//  console.log(stringConcat([1,2,3]));


// 3.
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function totalVotes(arr) {
    const numberOfVoters = arr.reduce(function(total, obj){
        if (obj.voted === true) {
            total++
        } 
        return total
    }, 0)
    return numberOfVoters
 }

// console.log(totalVotes(voters))


// 4.

function shoppingSpree(arr) {
    const total = arr.reduce(function(num, obj){
        return num += obj.price
    }, 0)
    return total
}
 
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
 
//  console.log(shoppingSpree(wishlist))

// 5. 

function flatten(arr) {
    const fullArray = arr.reduce(function(bleh, thing){
      return bleh.concat(thing)
        },)
    return fullArray
}
 
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
 
//  console.log(flatten(arrays))

// 6.
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    const resultObject = arr.reduce((final, voter) =>{
        if(voter.age >= 18 && voter.age <= 25){
            final.youth++
            if(voter.voted){
                final.youngVotes++
            }
        }
        if(voter.age >= 26 && voter.age <= 35){
            final.mids++
            if(voter.voted){
                final.midVotes++
            }
        }
        if(voter.age >= 36 && voter.age <= 44){
            final.olds++
            if(voter.voted){
                final.oldVotes++
            }
        }  
        return final
    }, {
        youngVotes: 0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        oldVotes: 0,
        olds: 0

    },{})
    return resultObject
}


console.log(voterResults(voters));