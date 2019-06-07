
var putThings = document.getElementById("put-things")


var pTag = document.createElement("p")
console.log(pTag)

pTag.classList.add("p-style")
pTag.textContent = "Hello World!"

putThings.appendChild(pTag)

var thisImg = document.createElement("img")

thisImg.src ="https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
thisImg.style.width = 50%

putThings.appendChild(thisImg)