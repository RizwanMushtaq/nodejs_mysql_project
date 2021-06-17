const express = require("express")
const Router = express.Router()
const dbconnection = require("../models/db")

const Customer = require("../controllers/customerController")

// reading  all customers data
Router.get("/", Customer.findAll)
// reading customer with specific id
Router.get("/:id", Customer.findOne)
// Delete customer with specific id
Router.delete("/:id", Customer.deleteOne)
// Delete all customer
Router.delete("/", Customer.delete)
//Update customer with specific id
Router.put("/", Customer.update)
//Insert data with json data in body
Router.post("/", Customer.insert)


module.exports = Router;


