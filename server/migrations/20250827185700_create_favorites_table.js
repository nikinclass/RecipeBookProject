/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('favorites', table => {
      table.increments();
      table.integer('user_id')
      table.foreign('user_id').references('users.id').deferrable('deferred')
      table.integer('recipe_id')
      table.foreign('recipe_id').references('recipes.id').deferrable('deferred')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('favorites', table => {
      table.dropForeign('user_id')
      table.dropForeign('recipe_id')
  })
      .then( () => {
          return knex.schema.dropTableIfExists('favorites')
      })
};
