const express = require("express")
const Router = express.Router()

const Schrauben = require("../controllers/schraubenController")

// reading  all data
Router.get("/", Schrauben.findAll)
// reading data with specific id
Router.get("/:id", Schrauben.findOne)
// Delete data with specific id
Router.delete("/:id", Schrauben.deleteOne)
// Delete all data
Router.delete("/", Schrauben.delete)
//Update data with specific id
Router.put("/", Schrauben.update)
//Insert data
Router.post("/", Schrauben.insert)

module.exports = Router;