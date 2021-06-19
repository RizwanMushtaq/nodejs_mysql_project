const Orders = require("../models/ordersModel")


exports.findAll = (req, res) => {
    Orders.getAll((err, data) => {
        if(err){
            res.send(err)
        }

        res.send(data)
    })
}

exports.findOne = (req, res) => {
    Orders.getById(req.params.id, (err, data) => {
        if(err){
            res.send(err)
        }

        res.send(data)
    })
}

exports.deleteOne = (req, res) => {
    Orders.deleteById(req.params.id, (err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}

exports.delete = (req, res) => {
    Orders.delete((err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}

exports.update = (req, res) => {
    Orders.update(req.body, (err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}

exports.insert = (req, res) => {
    console.log(req.body)

    Orders.add(req.body, (err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}