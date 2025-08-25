const express = require("express");
const app = express();
const knex = require('knex')(require("./knexfile.js")["development"]);
const port = 8080;

app.get("/", (req, res) => {
  res.send(`Express listening on port: ${port} TEST`);
});

app.get("/users", (req, res) => {
    knex("users")
        .select("*")
        .then( data => res.status(200).json(data))
        .catch(err => {
            console.error(err)
            res.status(500).json({error:"failed to fetch users"});
        })
})

app.listen(port, () => {
  console.log(`Express listening on port: ${port}`);
});
