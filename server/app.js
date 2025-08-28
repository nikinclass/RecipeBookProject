const {login, createAccount} = require("./utils/helperFunctions.js");
const express = require("express");
const app = express();
const knex = require("knex")(require("./knexfile.js")["docker"]); //If testing endpoints, environment must be the 'test' environment from the knex file
const port = 8080;
const cors = require("cors");
const corsOptions = {credentials: true};
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
    res.send(`Express listening on port: ${port}`);
    console.log(req.body);
});

app.get("/users", (req, res) => {
    knex("users")
        .select("*")
        .then((data) => {
            return res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({error: "failed to fetch users"});
        });
});

app.get("/users/:id", (req, res) => {
    const {id} = req.params;
    knex("users")
        .select("*")
        .where("id", id)
        .then((user) => res.status(200).json(user));
});

app.get("/blog-posts", (req, res) => {
    knex("blog_posts")
        .select("*")
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({error: "failed to fetch users"});
        });
});

app.get("/recipes", (req, res) => {
    knex("recipes")
        .select("*")
        .then((data) => res.status(200).json(data));
});

app.get("/recipes/:id", (req, res) => {
    const {id} = req.params;
    knex("recipes")
        .select("*")
        .where("id", id)
        .then((recipe) => res.status(200).json(recipe));
});

app.post("/users", (req, res) => {
    if (req.headers["create-account"] === "false") {
        return login(req, res);
    } else if (req.headers["create-account"] === "true") {
        return createAccount(req, res);
    } else {
        res.status(400).send("create-account header not specified");
    }
});

module.exports = app.listen(port, () => {
    console.log(`Express listening on port: ${port}`);
});
