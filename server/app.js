const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send(`Express listening on port: ${port}`);
});

app.listen(port, () => {
  console.log(`Express listening on port: ${port}`);
});
