const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb://localhost:27017/bounties",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log)


app.use("/bounties", require('./routes/bountyRouter.js'))


// let bounties = [
//     { 
//         firstName: "Qui-Gon",
//         lastName: "Jin",
//         living: false,
//         bountyAmount: 600,
//         type: "jedi",
//         _id: uuid()
//     },{ 
//         firstName: "Nate",
//         lastName: "Jensen",
//         living: true,
//         bountyAmount: 400000,
//         type: "sith",
//         _id: uuid()
//     },{ 
//         firstName: "Annakin",
//         lastName: "Skywalker",
//         living: true,
//         bountyAmount: 12,
//         type: "sith",
//         _id: uuid()
//     },{ 
//         firstName: "Forrest",
//         lastName: "Gump",
//         living: false,
//         bountyAmount: 9000,
//         type: "jedi",
//         _id: uuid()
//     }
// ]

app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
})