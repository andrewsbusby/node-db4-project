const ingredients = [
    {ingredient_name: 'Chicken Breast'},
    {ingredient_name: 'BBQ sauce'},
    {ingredient_name: 'Bread'},
    {ingredient_name: 'Peanut Butter'},
    {ingredient_name: 'Jelly'}
]

exports.ingredients = ingredients
exports.seed = function(knex){
    return knex('ingredients').insert(ingredients)
}