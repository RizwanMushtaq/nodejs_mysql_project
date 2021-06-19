const dbconnection = require("../models/db")

const Schrauben = {}

Schrauben.getAll = (result) => {
    dbconnection.setupConnection.query("SELECT * from schrauben", 
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

Schrauben.getById = (schraubeId, result) => {
    dbconnection.setupConnection.query("SELECT * FROM schrauben WHERE id = ?", [schraubeId], 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
            return
        }

        if(!rows.length){
            console.log('schraube with id = ' + schraubeId + ' not found')
            result(null, { error: 'schraube with id = ' + schraubeId + ' not found'})
            return
        }

        console.log(rows)
        result(null, rows)
    })
}

Schrauben.deleteById = (schraubeId, result) => {
    dbconnection.setupConnection.query("DELETE FROM schrauben WHERE id = ?", [schraubeId], 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
        }

        if(rows.affectedRows === 0){
            console.log('schraube with id = ' + schraubeId + ' not found')
            result(null, { error: 'schraube with id = ' + schraubeId + ' not found'})
            return
        }

        console.log('schraube with id = ' + schraubeId + ' is deleted')
        result(null, { success: 'schraube with id = ' + schraubeId + ' is deleted'})
    })
}

Schrauben.delete = (result) => {
    dbconnection.setupConnection.query("DELETE FROM schrauben", 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
            return
        }

        if(rows.affectedRows === 0){
            console.log('No schraube found in records')
            result(null, { error: 'No schraube found in records'})
            return
        }

        console.log('All schrauben are deleted')
        result(null, { success: 'All schrauben are deleted'})
    })
}

Schrauben.update = (schraube, result) => {
    dbconnection.setupConnection.query(
        "UPDATE schrauben SET name = ?, status = ? WHERE id = ?", [schraube.name, schraube.status, schraube.id], 
        (err, rows, fields) =>{
            if(err){
                result(err, null)
                return
            }
            if(rows.affectedRows === 0){
                result(null, { error: 'schraube with id = ' + schraube.id + ' not found'})
                return
            }

            console.log('schraube with id = ' + schraube.id + ' is updated')
            result(null, { success: 'schraube with id = ' + schraube.id + ' is updated'})
    })
}

Schrauben.add = (schraube, result) => {
    dbconnection.setupConnection.query("INSERT INTO schrauben SET ?", {name: schraube.name, status: schraube.status}, 
    (err, rows, fields) =>{
        if(err){
            result(err, null)
        }

        console.log(JSON.stringify(rows))
        result(null, { success: 'schraube added at id = ' + rows.insertId})
        
    })
}

module.exports = Schrauben