const express = require("express");
const app = express();
const knex = require("knex")(require("./knexfile.js")["docker"]); //If testing endpoints, environment must be the 'test' environment from the knex file
const port = 8080;
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Express listening on port: ${port}`);
  console.log(req.body);
});

// user = {
//   userid: id,
//   email: email,
//   favorites: [fav, fav, fav]
// }

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

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  knex("users")
    .select("*")
    .where("id", id)
    .then((user) => res.status(200).json(user));
});

// app.get("/blog-post", (req, res) => {
//   knex("blog_posts")
//     .select("*")
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: "failed to fetch users" });
//     });
// });

app.get("/recipes", (req, res) => {
  knex("recipes")
    .select("*")
    .then((data) => res.status(200).json(data));
});

app.get("/recipes/:id", (req, res) => {
  const { id } = req.params;
  knex("recipes")
    .select("*")
    .where("id", id)
    .then((recipe) => res.status(200).json(recipe[0].name));
});

app.post("/users", (req, res) => {
  knex("users")
    .select("*")
    .then((userArray) => {
      for (let user of userArray) {
        if (req.body.email.toLowerCase() === user.email.toLowerCase()) {
          res.status(401).send("User already exists");
          return;
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
      res.status(200);
    });
});

module.exports = app.listen(port, () => {
  console.log(`Express listening on port: ${port}`);
});
