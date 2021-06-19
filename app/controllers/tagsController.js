const Tags = require("../models/tagsModel")


exports.findAll = (req, res) => {
    Tags.getAll((err, data) => {
        if(err){
            res.send(err)
        }

        res.send(data)
    })
}

exports.findOne = (req, res) => {
    Tags.getById(req.params.id, (err, data) => {
        if(err){
            res.send(err)
        }

        res.send(data)
    })
}

exports.deleteOne = (req, res) => {
    Tags.deleteById(req.params.id, (err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}

exports.delete = (req, res) => {
    Tags.delete((err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}

exports.update = (req, res) => {
    Tags.update(req.body, (err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}

exports.insert = (req, res) => {
    console.log(req.body)

    Tags.add(req.body, (err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}