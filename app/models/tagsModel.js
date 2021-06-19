const dbconnection = require("../models/db")

const Tags = {}

Tags.getAll = (result) => {
    dbconnection.setupConnection.query("SELECT * from tags", 
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

Tags.getById = (tagId, result) => {
    dbconnection.setupConnection.query("SELECT * FROM tags WHERE id = ?", [tagId], 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
            return
        }

        if(!rows.length){
            console.log('tag with id = ' + tagId + ' not found')
            result(null, { error: 'tag with id = ' + tagId + ' not found'})
            return
        }

        console.log(rows)
        result(null, rows)
    })
}

Tags.deleteById = (tagId, result) => {
    dbconnection.setupConnection.query("DELETE FROM tags WHERE id = ?", [tagId], 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
        }

        if(rows.affectedRows === 0){
            console.log('tag with id = ' + tagId + ' not found')
            result(null, { error: 'tag with id = ' + tagId + ' not found'})
            return
        }

        console.log('tag with id = ' + tagId + ' is deleted')
        result(null, { success: 'tag with id = ' + tagId + ' is deleted'})
    })
}

Tags.delete = (result) => {
    dbconnection.setupConnection.query("DELETE FROM tags", 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
            return
        }

        if(rows.affectedRows === 0){
            console.log('No tag found in records')
            result(null, { error: 'No tag found in records'})
            return
        }

        console.log('All Tags are deleted')
        result(null, { success: 'All Tags are deleted'})
    })
}

Tags.update = (tag, result) => {
    dbconnection.setupConnection.query(
        "UPDATE tags SET name = ? WHERE id = ?", [tag.name, tag.id], 
        (err, rows, fields) =>{
            if(err){
                result(err, null)
                return
            }
            if(rows.affectedRows === 0){
                result(null, { error: 'tag with id = ' + tag.id + ' not found'})
                return
            }

            console.log('tag with id = ' + tag.id + ' is updated')
            result(null, { success: 'tag with id = ' + tag.id + ' is updated'})
    })
}

Tags.add = (tag, result) => {
    dbconnection.setupConnection.query("INSERT INTO tags SET ?", {name: tag.name}, 
    (err, rows, fields) =>{
        if(err){
            result(err, null)
        }

        console.log(JSON.stringify(rows))
        result(null, { success: 'tag added at id = ' + rows.insertId})
        
    })
}

module.exports = Tags