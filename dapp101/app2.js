const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("token");
});

app.post("/submit", (req, res) => {
  const inputValue = req.body.inputValue;
  console.log(inputValue);
  res.redirect("/");
});
