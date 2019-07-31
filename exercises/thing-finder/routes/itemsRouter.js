const express = require('express')
const itemsRouter = express.Router()
const uuid = require('uuid/v4')

let items = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuid()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuid()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuid()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuid()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuid()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuid()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuid()
    }
]

itemsRouter.route('/search')
    .get((req, res) => {
    if (req.query.name){
        const foundItems = items.filter(item => item.name === req.query.name)
        res.send(foundItems)
    } else if (req.query.type){
        const foundItems = items.filter(item => item.type === req.query.type)
        res.send(foundItems)
    } else if (req.query.price){
        const foundItems = items.filter(item => item.price === req.query.price)
        res.send(foundItems)
    }
})

itemsRouter.route('/')
    .get((req, res) => {
        res.send(items)
    })
    .post((req, res) => {
        // create new item
        const newItem = req.body
        // create id for newItem
        newItem._id = uuid()
        // push to fake db
        items.push(newItem)
        // return posted item
        res.send(newItem)
    })

itemsRouter.route('/:_id')
    .get((req, res) => {
        //find item with that id
        const foundItem = items.find(item => item._id === req.params._id)
        // return it
        res.send(foundItem)
    })
    .delete((req, res) => {
        //find item to delete
        const foundItem = items.find(item => item._id === req.params._id)
        // filter item out of items array
        const updatedDB = items.filter(item => item._id !== req.params._id)
        // update fake db
        items = updatedDB
        // return message
        res.send(`You successfully deleted ${foundItem.name}`)
    })
    .put((req, res) => {
        //find item to update
        const foundItem = items.find(item => item._id === req.params._id)
        // create update object
        const updateObj = req.body  //(what the user is inputting!)
        //update foundItem with update object with Object.assign()
        const updatedItem = Object.assign(foundItem, updateObj)
        //create new version of array with updates to specified object
        const updatedDB = items.map(item => item._id === req.params._id ? updatedItem : item)
        // updated fake db
        items = updatedDB
        // return successfully updated object
        res.send(updatedItem)
    })

// ! Here be Queries!





module.exports = itemsRouter