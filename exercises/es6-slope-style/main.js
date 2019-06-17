// Green Circle
// 1
function collectAnimals(...animals) {  
    return animals
}

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

// 2
function combineFruit(fruit, sweets, vegetables){
    return {
        fruit: arrays,
    sweets: arrays,
    vegetables: arrays
    }
}

// console.log(combineFruit(["apple", "pear"],
            //  ["cake", "pie"],
            //  ["carrot"]))
/////Pretty confused about what's going on here, tbh

// 3
const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  
  function parseSentence(){
    const {location, duration} = vacation
    return `We're going to have a good time in ${location} for ${duration}`
  }

//   console.log(parseSentence())

// 4
function returnFirst(items){
    const firstItem = item1
    return firstItem
}
/////////Is this how this works?

//5.
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}.`
}

// console.log(returnFavorites(favoriteActivities))



// Blue Square
function combineAnimals(arr1, arr2, arr3) {  
 return [...arr1, ...arr2, ...arr3]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))


//Black Diamond

// 1
const product = (a, b, c, d, e) => {
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce((acc, number) => {
      return acc * number;
    }, 1)
  }

  // 2
//   let array = [1, 2]
  const unshift = (array, a, b, ...e) => [...a, ...e, ...array, ]

    // console.log(unshift(array, 'a', 'b', 'c', 'd', 'e'))


// Double Black