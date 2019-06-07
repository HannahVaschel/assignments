var addForm = document.addForm

// addition
addForm.addEventListener("submit", function(event){
    event.preventDefault()
    var addP = document.createElement("p")
    addP.textContent = addForm.num1.value + " + " + addForm.num2.value + " = " + (parseInt(addForm.num1.value) + parseInt(addForm.num2.value))  
    var result = document.getElementById("add-result")
    result.appendChild(addP)
    addForm.num1.value = ""
    addForm.num2.value = ""
})

// subtraction
subForm.addEventListener("submit", function(event){
    event.preventDefault()
    var subP = document.createElement("p")
    subP.textContent = subForm.num1.value + " - " + subForm.num2.value + " = " + (parseInt(subForm.num1.value) - parseInt(subForm.num2.value))
    var result = document.getElementById("sub-result")
    result.appendChild(subP)
    subForm.num1.value = ""
    subForm.num2.value = ""
})

// multiplication
multForm.addEventListener("submit", function(event){
    event.preventDefault()
    var multP = document.createElement("p")
    multP.textContent = multForm.num1.value + " * " + multForm.num2.value + " = " + (parseInt(multForm.num1.value) * parseInt(multForm.num2.value))
    var result = document.getElementById("mult-result")
    result.appendChild(multP)
    multForm.num1.value = ""
    multForm.num2.value = ""
})