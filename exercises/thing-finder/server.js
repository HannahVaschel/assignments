const express = require('express')
const app = express()
const PORT = process.env.PORT || 7000

app.use(express.json())

app.use("/items", require('./routes/itemsRouter.js') )  // establishes initial endpoint for everything in this route (and connection to route itself)

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})