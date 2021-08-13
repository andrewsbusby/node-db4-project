const steps = [
    {step_number: 1, recipe_id: 1,
        instructions: 'marinate chicken in bbq sauce of your choice'},

    {step_number: 2, recipe_id: 1,
        instructions: 'Preheat oven to 425'},

    {step_number: 3, recipe_id: 1,
        instructions: 'Bake in oven for 45 minutes, or until internal temperature reaches 165'},

    {step_number: 1, recipe_id: 2,
        instructions: 'Spread peanut butter and jelly of your choosing on separate slices of bread'},

    {step_number: 2, recipe_id: 2,
        instructions: 'Place the two pieces of bread together with peanut butter and jelly sides facing eachother'},

    {step_number: 3, recipe_id: 2,
        instructions: 'Optional: you can cut the sandwich in to a shape of your choice'}

]

exports.steps = steps
exports.seed = function(knex) {
    return knex('steps').insert(steps)
}