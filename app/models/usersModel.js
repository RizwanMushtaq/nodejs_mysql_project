const dbconnection = require("../models/db")

const Users = {}

Users.getAll = (result) => {
    dbconnection.setupConnection.query("SELECT * from users", 
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

Users.getById = (userId, result) => {
    dbconnection.setupConnection.query("SELECT * FROM users WHERE id = ?", [userId], 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
            return
        }

        if(!rows.length){
            console.log('user with id = ' + userId + ' not found')
            result(null, { error: 'user with id = ' + userId + ' not found'})
            return
        }

        console.log(rows)
        result(null, rows)
    })
}

Users.deleteById = (userId, result) => {
    dbconnection.setupConnection.query("DELETE FROM users WHERE id = ?", [userId], 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
        }

        if(rows.affectedRows === 0){
            console.log('user with id = ' + userId + ' not found')
            result(null, { error: 'user with id = ' + userId + ' not found'})
            return
        }

        console.log('user with id = ' + userId + ' is deleted')
        result(null, { success: 'user with id = ' + userId + ' is deleted'})
    })
}

Users.delete = (result) => {
    dbconnection.setupConnection.query("DELETE FROM users", 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
            return
        }

        if(rows.affectedRows === 0){
            console.log('No user found in records')
            result(null, { error: 'No user found in records'})
            return
        }

        console.log('All users are deleted')
        result(null, { success: 'All users are deleted'})
    })
}

Users.update = (user, result) => {
    dbconnection.setupConnection.query(
        "UPDATE users SET username = ?, firstname = ?, lastname = ?, password = ?, phone = ?, email = ?, userstatus = ? WHERE id = ?", [user.username, user.firstname, user.lastname, user.password, user.phone, user.email, user.userstatus, user.id], 
        (err, rows, fields) =>{
            if(err){
                result(err, null)
                return
            }
            if(rows.affectedRows === 0){
                result(null, { error: 'user with id = ' + user.id + ' not found'})
                return
            }

            console.log('user with id = ' + user.id + ' is updated')
            result(null, { success: 'user with id = ' + user.id + ' is updated'})
    })
}

Users.add = (user, result) => {
    dbconnection.setupConnection.query("INSERT INTO users SET ?", {username: user.username, firstname: user.firstname, lastname: user.lastname, password: user.password, phone: user.phone, email: user.email, userstatus: user.userstatus}, 
    (err, rows, fields) =>{
        if(err){
            result(err, null)
        }

        console.log(JSON.stringify(rows))
        result(null, { success: 'user added at id = ' + rows.insertId})
        
    })
}

module.exports = Users