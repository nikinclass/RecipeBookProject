/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('blog-posts', table => {
        table.increments();
        table.integer("user_id")
        table.foreign("user_id").references('user.id').deferrable('deferred')
        table.string('title')
        table.integer('rating')
        table.string('heading')
        table.string('body', 500)
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('blog-posts', table => {
      table.dropForeign('user_id');
  })
      .then( () => {
          return knex.schema.dropTableIfExists('blog-posts');
      })
};
