const dbconnection = require("../models/db")

const Customer = require("../models/customerModel")

//Retreive all Customers from database
exports.findAll = (req, res) => {
    Customer.getAll((err, data) => {
        if(err){
            res.send(err)
        }

        res.send(data)
    })
}

exports.findOne = (req, res) => {
    Customer.getById(req.params.id, (err, data) => {
        if(err){
            res.send(err)
        }

        res.send(data)
    })
}

exports.deleteOne = (req, res) => {
    Customer.deleteById(req.params.id, (err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}

exports.delete = (req, res) => {
    Customer.delete((err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}

exports.update = (req, res) => {
    Customer.update(req.body, (err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}

exports.insert = (req, res) => {
    console.log(req.body)

    Customer.add(req.body, (err, data) => {
        if(err){
            res.send(err)
            return
        }

        res.send(data)
    })
}
