const { faker } = require("@faker-js/faker");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  let usersArray = [];
      for (let i  = 1; i < 1000; i++){
          usersArray.push( {
              name: faker.person.fullName(),
              email: faker.internet.email(),
              role: 'admin',
              password: 'password'
          })
      }
      // {name: 'Alec RECIPE', email: 'alec_something@email.com', role: 'admin'},
      // {name: 'monkey', email: 'primate@email.com', role: 'admin'},
      // {name: 'michael', email: 'michael@email.com', role: 'admin'},
      // {name: 'jesse ventura', email: 'jesse@email.com', role: 'admin'}
    await knex('users').insert(usersArray);
};
