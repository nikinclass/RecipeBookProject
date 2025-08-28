import knexModule from "knex";
import knexConfig from "../knexfile.js";

const knex = knexModule(knexConfig["docker"]);


export async function getAllRecipes() {
    const alphaArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'v', 'w', 'y']//some letters omitted
    let recipesArray = [];

    for (let i = 0; i < alphaArray.length; i++) {

        await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alphaArray[i]}`)
            .then(response => response.json())
            .then(data => {
                for (let j = 0; j < data.meals.length; j++) {
                    recipesArray.push(data.meals[j]);
                }
            })
    }
    return recipesArray
}

export function randomFoodCategory() {
    const categories = ['breakfast', 'lunch', 'dinner', 'desert', 'drink'];
    return categories[Math.floor(Math.random() * categories.length)]
}

export function login(req, res) {
    knex("users")
        .select("*")
        .then(userArray => {
            for (let user of userArray) {
                if (req.body.email.toLowerCase() === user.email.toLowerCase() &&
                    req.body.password.toLowerCase() === user.password.toLowerCase()) {
                    console.log("Access Granted")
                    return res.status(200).send("Access Granted")
                }
            }
            console.log("Access Denied");
            return res.status(401).send("No matches found")
        })

}

export function createAccount(req, res) {
    knex('users')
        .select("*")
        .then(userArray => {
            for (let user of userArray) {
                if (req.body.email.toLowerCase() === user.email.toLowerCase() &&
                    req.body.password.toLowerCase() === user.password.toLowerCase()) {
                    console.log("Account already exists")
                    return res.status(401).send("Account already exists")
                }
            }
            knex("users")
                .insert({
                    name: "default",
                    email: req.body.email,
                    role: "admin",
                    password: req.body.password,
                })
                .catch((err) => {
                    if (err) console.log(err);
                });
            console.log("New User Added!")
           return res.status(200);
        })
}



