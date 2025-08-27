const { randomFoodCategory, getAllRecipes } = require('../utils/helperFunctions')

const {faker} = require('@faker-js/faker')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('recipes').del()
    const mealArray = await getAllRecipes();

    for (let i = 0; i < mealArray.length; i++) {
        let meal = mealArray[i];
        await knex('recipes').insert({
            name: meal.strMeal,
            description: faker.lorem.paragraph(),
            cultural_category: meal.strArea,
            type_category: randomFoodCategory(),
            picture_url: meal.strMealThumb,
            instructions: meal.strInstructions
        })
    }
};

