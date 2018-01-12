const express = require('express')
const server = express()
const path = require('path')
const requestHandler = require('./RequestHandler')
server.use(express.static(path.join(__dirname,'public')))
server.get('/echo/:value',requestHandler.echo)
server.listen(8000,()=>{
    console.log("listening in port 8000")
})
