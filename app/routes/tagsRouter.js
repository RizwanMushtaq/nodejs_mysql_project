const express = require("express")
const Router = express.Router()

const Tags = require("../controllers/tagsController")

// reading  all data
Router.get("/", Tags.findAll)
// reading data with specific id
Router.get("/:id", Tags.findOne)
// Delete data with specific id
Router.delete("/:id", Tags.deleteOne)
// Delete all data
Router.delete("/", Tags.delete)
//Update data with specific id
Router.put("/", Tags.update)
//Insert data
Router.post("/", Tags.insert)

module.exports = Router;