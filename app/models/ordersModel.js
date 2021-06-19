const dbconnection = require("../models/db")

const Orders = {}

Orders.getAll = (result) => {
    dbconnection.setupConnection.query("SELECT * from orders", 
    (err, rows, fields)=> {
        if(err){
            console.log(err)
            result(err, null)
            return
        }
        if(!rows.length){
            console.log('Data not found')
            result(null, { error: 'Data not found'})
            return
        }
        
        console.log(rows)
        result(null, rows)
    })
}

Orders.getById = (orderId, result) => {
    dbconnection.setupConnection.query("SELECT * FROM orders WHERE id = ?", [orderId], 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
            return
        }

        if(!rows.length){
            console.log('order with id = ' + orderId + ' not found')
            result(null, { error: 'order with id = ' + orderId + ' not found'})
            return
        }

        console.log(rows)
        result(null, rows)
    })
}

Orders.deleteById = (orderId, result) => {
    dbconnection.setupConnection.query("DELETE FROM orders WHERE id = ?", [orderId], 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
        }

        if(rows.affectedRows === 0){
            console.log('order with id = ' + orderId + ' not found')
            result(null, { error: 'order with id = ' + orderId + ' not found'})
            return
        }

        console.log('order with id = ' + orderId + ' is deleted')
        result(null, { success: 'order with id = ' + orderId + ' is deleted'})
    })
}

Orders.delete = (result) => {
    dbconnection.setupConnection.query("DELETE FROM orders", 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
            return
        }

        if(rows.affectedRows === 0){
            console.log('No order found in records')
            result(null, { error: 'No order found in records'})
            return
        }

        console.log('All orders are deleted')
        result(null, { success: 'All orders are deleted'})
    })
}

Orders.update = (order, result) => {
    dbconnection.setupConnection.query(
        "UPDATE orders SET schraubeId = ?, quantity = ?, shipdate = ?, status = ? WHERE id = ?", [order.schraubeId, order.quantity, order.shipdate, order.status, order.id], 
        (err, rows, fields) =>{
            if(err){
                result(err, null)
                return
            }
            if(rows.affectedRows === 0){
                result(null, { error: 'order with id = ' + order.id + ' not found'})
                return
            }

            console.log('order with id = ' + order.id + ' is updated')
            result(null, { success: 'order with id = ' + order.id + ' is updated'})
    })
}

Orders.add = (order, result) => {
    dbconnection.setupConnection.query("INSERT INTO orders SET ?", {schraubeId: order.schraubeId, quantity: order.quantity, shipdate: order.shipdate, status: order.status}, 
    (err, rows, fields) =>{
        if(err){
            result(err, null)
        }

        console.log(JSON.stringify(rows))
        result(null, { success: 'order added at id = ' + rows.insertId})
        
    })
}

module.exports = Orders