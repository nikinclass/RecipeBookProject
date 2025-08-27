const { faker } = require('@faker-js/faker');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('blog_posts').del()
    let blogPostArray = [];
  for (let i = 1; i <= 100; i++){
      blogPostArray.push({
          user_id: faker.number.int({ min: 1, max:999}),
          title: faker.food.dish(),
          rating: faker.number.int({ min:1, max: 5}),
          body: faker.food.description()
      })
  }

  await knex('blog_posts').insert(blogPostArray);
};
