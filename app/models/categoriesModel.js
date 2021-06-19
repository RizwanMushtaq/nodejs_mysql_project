const dbconnection = require("../models/db")

const Categories = {}

Categories.getAll = (result) => {
    dbconnection.setupConnection.query("SELECT * from categories", 
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

Categories.getById = (categoryId, result) => {
    dbconnection.setupConnection.query("SELECT * FROM categories WHERE id = ?", [categoryId], 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
            return
        }

        if(!rows.length){
            console.log('category with id = ' + categoryId + ' not found')
            result(null, { error: 'category with id = ' + categoryId + ' not found'})
            return
        }

        console.log(rows)
        result(null, rows)
    })
}

Categories.deleteById = (categoryId, result) => {
    dbconnection.setupConnection.query("DELETE FROM categories WHERE id = ?", [categoryId], 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
        }

        if(rows.affectedRows === 0){
            console.log('category with id = ' + categoryId + ' not found')
            result(null, { error: 'category with id = ' + categoryId + ' not found'})
            return
        }

        console.log('category with id = ' + categoryId + ' is deleted')
        result(null, { success: 'category with id = ' + categoryId + ' is deleted'})
    })
}

Categories.delete = (result) => {
    dbconnection.setupConnection.query("DELETE FROM categories", 
    (err, rows, fields) =>{
        if(err){
            console.log(err)
            result(err, null)
            return
        }

        if(rows.affectedRows === 0){
            console.log('No category found in records')
            result(null, { error: 'No category found in records'})
            return
        }

        console.log('All categories are deleted')
        result(null, { success: 'All categories are deleted'})
    })
}

Categories.update = (category, result) => {
    dbconnection.setupConnection.query(
        "UPDATE categories SET name = ? WHERE id = ?", [category.name, category.id], 
        (err, rows, fields) =>{
            if(err){
                result(err, null)
                return
            }
            if(rows.affectedRows === 0){
                result(null, { error: 'category with id = ' + category.id + ' not found'})
                return
            }

            console.log('category with id = ' + category.id + ' is updated')
            result(null, { success: 'category with id = ' + category.id + ' is updated'})
    })
}

Categories.add = (category, result) => {
    dbconnection.setupConnection.query("INSERT INTO categories SET ?", {name: category.name}, 
    (err, rows, fields) =>{
        if(err){
            result(err, null)
        }

        console.log(JSON.stringify(rows))
        result(null, { success: 'category added at id = ' + rows.insertId})
        
    })
}

module.exports = Categories