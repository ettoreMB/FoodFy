exports.home = (req,res) => {
    res.render ('home')
}

exports.about = (req, res) => {
    res.render ('recipes/about')
}

exports.recipes = (req, res) => {
    res.render ('recipes/recipes')
}

exports.show = (req, res) => {
    res.render ('recipes/show')
}

exports.index = (req, res) => {
    res.render ('recipes/admin/index')
}

exports.create = (req, res) => {
    res.render ('recipes/admin/create')
}


exports.edit = (req, res) => {
    res.render ('recipes/admin/edit')
}