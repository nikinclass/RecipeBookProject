const { randomFoodCategory, getAllRecipes } = require('../utils/helperFunctions')

const {faker} = require('@faker-js/faker')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('recipes').del()
    await knex('recipes').insert({
        name: "Draysen's Spaget",
        description: "This oddly formulated Spaget originates from the mountain ranges of Washington State",
        cultural_category: "Draysen",
        type_category: "breakfast",
        picture_url: '../img/spaget.png',
        instructions: "Add poptarts, one pound of salt, and slam it into a card door, you will be left with pure perfection"

    })
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

