/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('recipes', table =>{
      table.increments()
      table.string("name")
      table.text('description')
      table.string('cultural_category')
      table.string('type_category')
      table.string('picture_url')
      table.text('instructions')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes');
};
