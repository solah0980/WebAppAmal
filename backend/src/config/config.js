const sql = require('mysql')

const con = sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mydb'
})

module.exports = con