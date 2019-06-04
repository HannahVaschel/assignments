var add = function(x, y) {
    return x + y
}

// var sum = add(5, 7)
// console.log(sum)

var greatestFinder = function(x, y, z) {
    if (x > y && x > z) {
        return x
    } else if (y > x && y > z) {
        return y 
    } else {
        return z
    }
}

// var big = greatestFinder(29, 15, 28)
// console.log(big)

function oddOrEven(n) {
    if (n % 2 === 0) {
        return("even")
    } else {
        return("odd")
    }
}
// console.log(oddOrEven(17))
// console.log(oddOrEven(222))

function whyIsThisAThing(string) {
    if (string.length > 20) {
        return(string.slice(0, (string.length / 2)))
    } else {        
        return(string + string)
    }
}

// console.log(whyIsThisAThing("Here is my string, I wonder how long it is"))
// console.log(whyIsThisAThing("Here is my string"))

function fibonacci(n) {
    var firstInt = 1
    var lastInt = 1
    if (n < 3) {
        for (var j = 0; j < n; j++ ){
            var currInt = firstInt + firstInt
            return(currInt)
    } 
        for (i = 0; i <= n - 2; i++) {
            var currInt = lastInt + firstInt
             currInt = lastInt + currInt


    }
}

// 1       1       2      3      5      8
// first   last    curr   next
// var firstInt = 1
// var currInt = 1
// var nextInt = firstInt + currInt
