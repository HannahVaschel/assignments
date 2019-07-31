const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    bounty: {
        type: Number,
        required: true
    },
    alignment: {
        type: String,
        lowercase: true
    },
})

module.exports = mongoose.model("Bounty", bountySchema)