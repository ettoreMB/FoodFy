const { Router } = require('express')
const express = require('express')
const nunjucks = require('nunjucks')

server.use(express.static('public'))
server.set('view engine', 'html')

nunjucks.configure('views', {
    express: server
})


const server = express()

server.listen(5000, () => {
    console.log("! server is running")
})