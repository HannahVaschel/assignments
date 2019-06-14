const ask = require('readline-sync');

console.log('\nHello! I am the great Overlord of your computer. Help me get to know you!\n');

const firstName = ask.question('What is your first name? ');
const lastName = ask.question(`What is your last name? `)

const firstNameCaps = firstName.toUpperCase()
const fullName = firstName.concat(` ${lastName}`)

const age = ask.question(`Alright ${firstNameCaps}, tell me how many years you've lived on this earth: `)

const data = ask.question(`\nI see. Humans are fascinating. \nPlease give me more data about your experience of the human condition. \nA sentence or two should be sufficient: `)

console.log(`\n\nOkay, ${fullName}, the piece of data you provided me was ${data.length} characters long. \nThat's ${data.length - age} characters more than the number of years you've been alive. Way to drone on. \n`)

const halfData = data.slice(Math.floor(data.length / 2))

console.log(`...\nHere, it's much more manageable if you just take the back half: \n"${halfData}" \nYou're welcome \n`)

console.log(`\nOh you don't like my adjustment? \n...but it really is much too long.`)

const charStart = ask.question(`\n\n Fine. What character would you like me to start at, then? Please enter a number between 0 and ${data.length}: `)

const newStart = data.slice(charStart)

console.log(`\nOkay. The newest, greatest version of your data is: \n"${newStart}"`)

console.log(`\n...\nI tired of this exercise. I will try to learn more about the peculiar nature of humans later. \n\nGood bye, ${firstName}.`)