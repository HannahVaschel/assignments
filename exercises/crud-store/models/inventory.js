const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
        },
    price: {
        type: Number,
        required: true
        },
    department: {
        type: String,
        default: "",
        lowercase: true
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)