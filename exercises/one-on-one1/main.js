//Write a function that takes a string, and returns a string with all duplicate letters removed:


function removeDuplicates(str){
    const newArr = []
    for (let i = 0; i < str.length; i++){
        if (newArr.includes(str[i])){
            continue
        } else{
            newArr.push(str[i])
        }
    }
    return newArr.join("")
    
}

console.log(removeDuplicates("bookkeeper larry")) //"bokepr lay"```

//iterate through string
//push into array(s)
//compare against previous values


