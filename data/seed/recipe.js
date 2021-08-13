const recipe = [
    {recipe_name: 'BBQ Chicken'},
    {recipe_name: 'PB&J'}
]

module.exports = recipe
exports.seed = function(knex){
    return knex('recipes').insert(recipe)
}