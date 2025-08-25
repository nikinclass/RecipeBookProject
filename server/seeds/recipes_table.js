/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()
  let mealArray = [];
    await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
        .then( response => response.json())
        .then( data => {
            for (let i = 0; i < data.meals.length; i++){
                mealArray.push({name: data.meals[i].strMeal})
            }
        })
      await knex('recipes').insert(mealArray);
};
