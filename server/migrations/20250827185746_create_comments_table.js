/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('comments', table => {
      table.increments()
      table.integer('recipe_id')
      table.foreign('recipe_id').references('recipes.id').deferrable('deferred')
      table.string('body', 200)
      table.string('title')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('comments', table => {
      table.dropForeign('recipe_id')
  })
      .then( () => {
          return knex.schema.dropTableIfExists('comments');
      })
};
