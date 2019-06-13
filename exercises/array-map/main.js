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
        for (let i = 0; i < str.length; i++){
            if (i = 0){
                str[i].toUpperCase
            } else{
                str[i].toLowerCase
            }
        }
    return str
    })
    return betterCase
}

  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));