const { faker } = require("@faker-js/faker");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
      for (let i  = 0; i < 1000; i++){
          return {
              name:
          }
      }
      {name: 'Alec RECIPE', email: 'alec_something@email.com', role: 'admin'},
      {name: 'monkey', email: 'primate@email.com', role: 'admin'},
      {name: 'michael', email: 'michael@email.com', role: 'admin'},
      {name: 'jesse ventura', email: 'jesse@email.com', role: 'admin'}
  ]);
};
