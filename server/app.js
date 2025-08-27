const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const knex = require("knex")(require("./knexfile.js")["docker"]);//If testing endpoints, environment must be the 'test' environment from the knex file
const port = 8080;
const cors = require('cors')
app.use(cors())
app.use(express.json());


app.get("/", (req, res) => {
  res.send(`Express listening on port: ${port}`);
  console.log(req.body);
});

app.post("/users", (req, res) => {
    console.log(req.body)
    res.status(200).send("Connected");
})

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
