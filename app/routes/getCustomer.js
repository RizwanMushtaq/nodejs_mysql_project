const express = require("express")
const Router = express.Router()
const dbconnection = require("../models/db")

// reading  all customers data
Router.get("/", (req, res)=>{
    dbconnection.setupConnection.query("SELECT * from customer", (err, rows, fields)=> {
        if(!err){
            console.log(rows)
            res.send(rows)
        } else{
            console.log(err)
            res.send(err)
        }
    })
})

// reading customer with specific id
Router.get('/:id', (req, res) =>{
    console.log('you requested details of customer with id = ' + req.params.id)
    let requestId = req.params.id
    dbconnection.setupConnection.query("SELECT * FROM customer WHERE id = ?", [requestId], (err, rows, fields) =>{
      if(!err){
        console.log(rows)
        console.log(typeof(rows))
        if(!rows.length){
          console.log('Object is null')
          res.send('no results found for this id ' + requestId)
        } else {
          res.send(rows)
        }
        
      } else{
        console.log(err)
      }
    })
})

// Delete customer with specific id
Router.delete('/:id', (req, res) =>{
    console.log('you requested to delete customer with id = ' + req.params.id)
    let requestId = req.params.id
    dbconnection.setupConnection.query("DELETE FROM customer WHERE id = ?", [requestId], (err, rows, fields) =>{
      if(!err){
        console.log('Deleted successfully')
        res.send('Deleted successfully')
      } else{
        console.log(err)
        res.send(err)
      }
    })
})

// Insert customer with specific name
Router.post('/:name/:email', (req, res) =>{
    console.log('you requested to insert customer with name = ' + req.params.name)
    let requestName = req.params.name
    let requestEmail = req.params.email
    dbconnection.setupConnection.query("INSERT INTO customer SET ?", {name: requestName, email: requestEmail}, (err, rows, fields) =>{
      if(!err){
        console.log('Inserted successfully at id = ' + rows.insertId)
        res.send('Inserted successfully at id = ' + rows.insertId)
      } else{
        console.log(err)
        res.send(err)
      }
    })
})

module.exports = Router;


