const express = require("express")
const Router = express.Router()

const Users = require("../controllers/usersController")

// reading  all data
Router.get("/", Users.findAll)
// reading data with specific id
Router.get("/:id", Users.findOne)
// Delete data with specific id
Router.delete("/:id", Users.deleteOne)
// Delete all data
Router.delete("/", Users.delete)
//Update data with specific id
Router.put("/", Users.update)
//Insert data
Router.post("/", Users.insert)

module.exports = Router;