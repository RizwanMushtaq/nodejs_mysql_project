const Categories = require("../models/categoriesModel")


exports.findAll = (req, res) => {
    Categories.getAll((err, data) => {
        if(err){
            res.send(err)
        }

        res.send(data)
    })
}

exports.findOne = (req, res) => {
    Categories.getById(req.params.id, (err, data) => {
        if(err){
            res.send(err)
        }

        res.send(data)
    })
}

exports.deleteOne = (req, res) => {
    Categories.deleteById(req.params.id, (err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}

exports.delete = (req, res) => {
    Categories.delete((err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}

exports.update = (req, res) => {
    Categories.update(req.body, (err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}

exports.insert = (req, res) => {
    console.log(req.body)

    Categories.add(req.body, (err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}