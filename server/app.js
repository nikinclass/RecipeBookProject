const express = require("express");
const app = express();
const knex = require("knex")(require("./knexfile.js")["docker"]);//If testing endpoints, environment must be the 'test' environment from the knex file
const port = 8080;

app.get("/", (req, res) => {
  res.send(`Express listening on port: ${port}`);
});

app.get("/users", (req, res) => {
  knex("users")
    .select("*")
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "failed to fetch users" });
    });

});

app.get("/recipes", (req, res) => {
  knex("recipes")
    .select("*")
    .then((data) => res.status(200).json(data));
});

module.exports = app.listen(port, () => {
  console.log(`Express listening on port: ${port}`);
});
