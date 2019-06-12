const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
const alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(arr1, arr2) {
    let arr3 = []
    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i] + ": ")
        for(let j = 0; j < arr2.length; j++) {
            arr3.push(arr2[j].toUpperCase())
        }
    }
    return arr3
}

console.log(forception(people, alphabet))