const { faker } = require("@faker-js/faker");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("comments").del();
  let commentsArray = [];
  for (let i = 0; i <= 100; i++) {
    commentsArray.push({
      recipe_id: faker.number.int({ min: 1, max: 300 }),
      body: faker.lorem.sentence({ min: 3, max: 5 }),
      title: faker.lorem.lines(1),
    });
  }

  await knex("comments").insert(commentsArray);
};
