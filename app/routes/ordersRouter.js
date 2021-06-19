const express = require("express")
const Router = express.Router()

const Orders = require("../controllers/ordersController")

// reading  all data
Router.get("/", Orders.findAll)
// reading data with specific id
Router.get("/:id", Orders.findOne)
// Delete data with specific id
Router.delete("/:id", Orders.deleteOne)
// Delete all data
Router.delete("/", Orders.delete)
//Update data with specific id
Router.put("/", Orders.update)
//Insert data
Router.post("/", Orders.insert)

module.exports = Router;