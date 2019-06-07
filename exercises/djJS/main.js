var holder = document.getElementById("container")

var square = document.getElementById("color-square")

square.classList.add("square-style")

holder.appendChild(square)

square.addEventListener("mouseover", function(){
    square.style.backgroundColor = "blue"
})

square.addEventListener("mouseout", function(){
    square.style.backgroundColor = "white"
})

square.addEventListener("mousedown", function(){
    square.style.backgroundColor = "red"
})

square.addEventListener("mouseup", function(){
    square.style.backgroundColor = "yellow"
})

square.addEventListener("dblclick", function(){
    square.style.backgroundColor = "green"
})

document.addEventListener("scroll", function(){
    square.style.backgroundColor = "orange"
})

document.addEventListener("keydown", function(){
    var key = event.keyCode
    if (key === 114){
        var color = "red"
    } else if (key === 98) {
        var color = "blue"
    } else if (key === 103) {
        var color = "green"
    } else if (key === 111){
        var color = "orange"
    } else if (key === 121) {
        var color = "yellow"
    }
    square.style.backgroundColor = color
})
