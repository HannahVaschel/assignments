const express = require('express')
const invRouter = express.Router()
const Inventory = require('../models/inventory.js')

// Get All
invRouter.get("/", (req, res, next) => {
    Inventory.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items)
    })
})

// Get One
invRouter.get("/:_id", (req, res, next) => {
    Inventory.findOne({ _id: req.params._id }, (err, foundItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(foundItem)
    })
})

// Post 
invRouter.post("/", (req, res, next) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

// Delete 
invRouter.delete("/:_id", (req, res, next) => {
    Inventory.findOneAndRemove({ _id: req.params._id }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send(
            {
                item: deletedItem,
                msg: `Successfully delected ${deletedItem.name}`
            }
        )
    })
})

// PUT
invRouter.put("/:_id", (req, res, next) => {
    Inventory.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true },
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

module.exports = invRouter