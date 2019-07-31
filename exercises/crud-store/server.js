const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Database Connection
mongoose.connect("mongodb://localhost:27017/inventory",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
)
.then(() => console.log("Connected to DB"))
.catch(err => console.log(err))

// Routes
app.use("/inventory", require('./routes/invRouter.js'))

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({ errMsg: err.message })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})