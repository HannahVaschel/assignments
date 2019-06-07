 var userForm = document.userForm
 var invoiceBox = document.getElementById("invoice")

 userForm.addEventListener("submit", function(e){
     e.preventDefault()
     var goombaValue = parseInt(userForm.goombInput.value) * 5
     var bobValue = parseInt(userForm.bobInput.value) * 7
     var cheepValue = parseInt(userForm.cheepInput.value) * 11
     var invoiceValue = (goombaValue + bobValue + cheepValue)
     
    invoiceBox.textContent = invoiceValue

 })

 