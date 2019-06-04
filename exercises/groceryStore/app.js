var shopper = {
    nameOfStore: "Hannah's Rad Food and Stuff",
    franchises: 32,
    open24Hours: false,
    stocksDinosaurs: true,
    groceryCart: ["milk", "eggs", "claw hammer", "toothpaste", "sledge hammer", "bread",      "reciprocating hammer"],
    callSecurity: function(thiefAge){
        if (thiefAge < 18){
            console.log("Get out of here, Hooligan!")
        } else {
            console.log("RELEASE THE ANKYLOSAURUS")
        }
    }
}


// Upon completion... I've just realized that we were probably supposed to be describing a customer and not a store... but this was more fun.