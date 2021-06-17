const dbconnection = require("../models/db")

const Customer = {}

Customer.getAll = (result) => {
    dbconnection.setupConnection.query("SELECT * from customer", 
    (err, rows, fields)=> {
        if(err){
            console.log(err)
            result(err, null)
            return
        }
        if(!rows.length){
            console.log('customer data not found')
            result(null, { error: 'customer data not found'})
            return
        }
        
        console.log(rows)
        result(null, rows)
    })
}

Customer.getById = (customerId, result) => {
    dbconnection.setupConnection.query("SELECT * FROM customer WHERE id = ?", [customerId], 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
            return
        }

        if(!rows.length){
            console.log('customer with id = ' + customerId + ' not found')
            result(null, { error: 'customer with id = ' + customerId + ' not found'})
            return
        }

        console.log(rows)
        result(null, rows)
    })
}

Customer.deleteById = (customerId, result) => {
    dbconnection.setupConnection.query("DELETE FROM customer WHERE id = ?", [customerId], 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
        }

        if(rows.affectedRows === 0){
            console.log('customer with id = ' + customerId + ' not found')
            result(null, { error: 'customer with id = ' + customerId + ' not found'})
            return
        }

        console.log('customer with id = ' + customerId + ' is deleted')
        result(null, { success: 'customer with id = ' + customerId + ' is deleted'})
    })
}

Customer.delete = (result) => {
    dbconnection.setupConnection.query("DELETE FROM customer", 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
            return
        }

        if(rows.affectedRows === 0){
            console.log('No customer found in records')
            result(null, { error: 'No customer found in records'})
            return
        }

        console.log('All customers are deleted')
        result(null, { success: 'All customers are deleted'})
    })
}

Customer.update = (customer, result) => {
    dbconnection.setupConnection.query(
        "UPDATE customer SET name = ?, email = ? WHERE id = ?", [customer.name, customer.email, customer.id], 
        (err, rows, fields) =>{
            if(err){
                result(err, null)
                return
            }
            if(rows.affectedRows === 0){
                result(null, { error: 'customer with id = ' + customer.id + ' not found'})
                return
            }

            console.log('customer with id = ' + customer.id + ' is updated')
            result(null, { success: 'customer with id = ' + customer.id + ' is updated'})
    })
}

Customer.add = (customer, result) => {
    dbconnection.setupConnection.query("INSERT INTO customer SET ?", {name: customer.name, email: customer.email}, 
    (err, rows, fields) =>{
        if(err){
            result(err, null)
        }

        console.log(JSON.stringify(rows))
        result(null, { success: 'customer added at id = ' + rows.insertId})
        
    })
}

module.exports = Customer