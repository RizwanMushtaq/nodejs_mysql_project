const express = require("express")
const Router = express.Router()

const Categories = require("../controllers/categoriesController")

// reading  all data
Router.get("/", Categories.findAll)
// reading data with specific id
Router.get("/:id", Categories.findOne)
// Delete data with specific id
Router.delete("/:id", Categories.deleteOne)
// Delete all data
Router.delete("/", Categories.delete)
//Update data with specific id
Router.put("/", Categories.update)
//Insert data
Router.post("/", Categories.insert)

module.exports = Router;