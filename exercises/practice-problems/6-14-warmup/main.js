// write a function that generates a random password

// the function should have a parameter that dictates the length of the password.
// the function may contain any upper and lower case characters.
// the function may contain any numbers and symbols.

function randomPasswordGenerator(number){
    let password = ""
    const options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*("
    // loop of some sort
    for (let i = 0; i < number; i++){
        // Math.random() to create a random number
        const randomIndex = Math.floor(Math.random() * options.length)
        // make an array or string of possible characters
        password += options[randomIndex]
    }
    return password
}



console.log(randomPasswordGenerator(5))

console.log(randomPasswordGenerator(9))

