const Schrauben = require("../models/schraubenModel")


exports.findAll = (req, res) => {
    Schrauben.getAll((err, data) => {
        if(err){
            res.send(err)
        }

        res.send(data)
    })
}

exports.findOne = (req, res) => {
    Schrauben.getById(req.params.id, (err, data) => {
        if(err){
            res.send(err)
        }

        res.send(data)
    })
}

exports.deleteOne = (req, res) => {
    Schrauben.deleteById(req.params.id, (err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}

exports.delete = (req, res) => {
    Schrauben.delete((err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}

exports.update = (req, res) => {
    Schrauben.update(req.body, (err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}

exports.insert = (req, res) => {
    console.log(req.body)

    Schrauben.add(req.body, (err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}