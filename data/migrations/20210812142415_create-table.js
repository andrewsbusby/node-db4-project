
exports.up = function(knex) {
  knex.schema.createTable('recipe', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_name').notNullable()
  })

  .createTable('steps', tbl => {
      tbl.increments('step_id')
      tbl.integer('step_number').notNullable().unsigned()
      tbl.string('insctructions').notNullable()
      tbl.integer('recipe_id').unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipe')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
  })

  .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id')
      tbl.string('ingredient_name').notNullable()
  })

  .createTable('recipe_ingredients', tbl => {
      tbl.increments('recipe_ingredient_id')
      tbl.integer('step_id').unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      tbl.integer('ingredient_id').unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      tbl.string('quantity').notNullable()
  })

};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
