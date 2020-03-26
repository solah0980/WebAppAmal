const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const con = require('./config/config')
const cors = require('cors')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

con.connect((err)=>{
    if(err) throw err
    console.log("connect database success")
})

require('./route')(app)
app.listen(8081,(req,res)=>{
    console.log('server open success')
})