const recipe_ingredients = [
    {recipe_ingredient_id: 1, step_id: 1, 
        quantity: '1 lb of chicken breats'},
    
    {recipe_ingredient_id: 2, step_id: 1, 
        quantity: '1 16oz bottle of bbq sauce of your choice.'},

    {recipe_ingredient_id: 3, step_id: 1,
        quantity: '2 slices of bread'},

    {recipe_ingredient_id: 4, step_id: 1,
        quantity: 'desired amount of peanut butter'},

        {recipe_ingredient_id: 5, step_id: 1,
            quantity: 'desired amount of jelly/jam of choice'},
]

exports.recipe_ingredients = recipe_ingredients
exports.seed = function(knex){
    return knex('recipe_ingredients').insert(recipe_ingredients)
}