const express = require('express')
const routes = express.Router()

const recipes = require('./App/controlers/recipes')


routes.get('/', (req, res) => {
    return res.render('home')
})

routes.get('/home', recipes.home )
routes.get('/about', recipes.about)
routes.get('/recipes', recipes.recipes)

routes.get('/recipes/index', recipes.index)
routes.get('/recipes/create', recipes.create)
routes.get('/recipes/:id', recipes.show)
routes.get('/recipes/:id/edit', recipes.edit)

module.exports = routes