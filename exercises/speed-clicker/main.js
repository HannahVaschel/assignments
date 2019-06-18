
const clicker = document.getElementById("clicker")

// const storedCount = localStorage.getItem("clicks")

const display = document.getElementById('display')

let intervalID
let clickCount = 0

if (localStorage.getItem("clicks") !== null){
    clickCount = localStorage.getItem("clicks")
} 

display.textContent = clickCount

let time = 10

clicker.addEventListener("click", (event) =>{
    if (!intervalID){
        intervalID = setInterval(countTime, 1000)
    }
    if (time > 0){
        clickCount++
        localStorage.setItem("clicks", clickCount)
        display.textContent = clickCount
    }
})

function countTime(){
    if (time > 0){
        time--
    } else {
        clearInterval(intervalID)
    }
     countdown.textContent = time
}

const startCount = document.getElementById("count-container")
const countdown = document.getElementById("countdown")


startCount.addEventListener("click", masterTime)








////This works. But doesn't use setTimeout
            
            
            
            


///// here's setTimeout, but it's all hardcoded. who wants that?      
// function countTime(){
//         time--
//     countdown.textContent = time
// }
// setTimeout(stopTime, 11000)

// function stopTime(){
//     clearInterval(intervalID)
// }

