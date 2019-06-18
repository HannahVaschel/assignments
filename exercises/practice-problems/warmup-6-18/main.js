// Write a function that takes an array of people objects and returns an array of all
// the names as strings wrapped in <h1> tags:

// function putNamesInTags(arr){
//     const h1Arr = []
//     for (let i = 0; i < arr.length; i++){
//         h1Arr.push(`<h1>${arr[i].name}</h1>`)
//     }
//     return h1Arr
// }

// function putNamesInTags(arr){
//     const result= arr.map(function(person){
//         return `<h1>${person.name}</h1>`
//     })
//     return result
// }

const putNamesInTagsES6 = arr => arr.map(person => `<h1>${person.name}</h1>`)


const people = [
    {name: "Harry"},
    {name: "Ron"},
    {name: "Hermione"},
    {name: "Scabbers"},
    {name: "Albus"},
    {name: "Hagrid"},
]

console.log(putNamesInTagsES6(people))
// Output:  
// ["<h1>Harry</h1>", "<h1>Ron</h1>", "<h1>Hermione</h1>", "<h1>Scabbers</h1>", "<h1>Albus</h1>", "<h1>Hagrid</h1>"]