/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
      {name: 'Alec', email: 'alec_something@email.com', role: 'admin'},
      {name: 'monkey', email: 'primate@email.com', role: 'admin'}
  ]);
};
