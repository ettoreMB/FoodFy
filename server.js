const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express()

server.use(express.static('App/public'))
server.use(express.urlencoded({extended: true}))
server.set('view engine', 'njk')
server.use(methodOverride('_method'))

server.use(routes)

nunjucks.configure('App/views', {
    express: server,
    autoescape: false,
    noCache: true,
})


server.listen(3333, () => {
    console.log("! server is running")
})