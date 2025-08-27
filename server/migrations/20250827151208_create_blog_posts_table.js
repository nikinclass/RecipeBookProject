/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('blog_posts', table => {
        table.increments();
        table.integer("user_id")
        table.foreign("user_id").references('users.id').deferrable('deferred')
        table.string('title')
        table.integer('rating')
        table.string('body')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('blog_posts', table => {
      table.dropForeign('user_id');
  })
      .then( () => {
          return knex.schema.dropTableIfExists('blog_posts');
      })
};
