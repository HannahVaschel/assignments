var travelForm = document.travelForm

travelForm.addEventListener("submit", function(e){
    e.preventDefault()
    var firstName = travelForm.firstName.value
    var lastName = travelForm.lastName.value
    var age = travelForm.ageInput.value
    var gender = travelForm.genderInput.value
    var destination = travelForm.destinationInput.value

    var dietAnswers = travelForm.diets
    var dietArray = []

    for (i = 0; i < dietAnswers.length; i++) {
        if (dietAnswers[i].checked === true){
        dietArray.push(" " + dietAnswers[i].value)
        }
    }     
    if (dietArray.length === 0){
        dietArray.push(" none")
    }
    
    // double backticks (``) enable you to type in format instead of concatenating. ${} for variables
    alert(`
    Name: ${firstName} ${lastName} 
    Age: ${age}
    Gender: ${gender}
    Destination: ${destination}
    Dietary Restrictions:${dietArray}
    `)
    travelForm.firstName.value = ""
    travelForm.lastName.value = ""
    travelForm.ageInput.value = ""
    travelForm.genderInput.value = ""
    travelForm.destinationInput.value = ""

    for (var i = 0; i < dietAnswers.length; i++){
        travelForm.diets[i].checked = false
    }

})