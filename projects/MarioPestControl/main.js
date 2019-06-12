 const userForm = document.userForm
 const invoiceBox = document.getElementById("invoice")

 userForm.addEventListener("submit", function(e){
     e.preventDefault()
     const goombaValue = (parseInt(userForm.goombInput.value) || 0) * 5
     const bobValue = (parseInt(userForm.bobInput.value) || 0) * 7
     const cheepValue = (parseInt(userForm.cheepInput.value) || 0) * 11
                                             // OR statement prevents NaN outcome
     const invoiceValue = (goombaValue + bobValue + cheepValue)
     
    invoiceBox.textContent = invoiceValue

 })

//  function addUp(value){
//      for (let i = 0; i < 4; i++) {
//      if 
//  }