// 1.

function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function(num){
        if (num > 4){
            return num
        }
    })
    return result
  }
  
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2]))


// 2.

function evensOnly(arr) {
    const result = arr.filter(function(num){
        if (num % 2 === 0){
            return num
        }
    })
    return result
}

// console.log(evensOnly([3, 6, 8, 2]))


// 3.

function fiveCharactersOrFewerOnly(arr) {
    const result = arr.filter(function(str){
        if (str.length < 6){
            return str
        }
    })
    return result
  }
  
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]))


// 4. 


function peopleWhoBelongToTheIlluminati(arr){
    const members = arr.filter(function(person){
        if (person.member === true){
            return person 
        }
    })
    return members
  }
  
//   console.log(peopleWhoBelongToTheIlluminati([
//       {
//           name: "Angelina Jolie",
//           member: true
//       },
//       {
//           name: "Eric Jones",
//           member: false
//       },
//       {
//           name: "Paris Hilton",
//           member: true
//       },
//       {
//           name: "Kayne West",
//           member: false
//       },
//       {
//           name: "Bob Ziroll",
//           member: true
//       }
//   ]));


// 5. 

function ofAge(arr){
    const movieGoers = arr.filter(function(person){
        if (person.age > 17){
            return person
        }
    })
    return movieGoers
  }
  
  console.log(ofAge([
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