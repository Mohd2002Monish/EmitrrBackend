const express = require("express");
const Questions = require("../Model/questions.model");
const app = express();
app.get("/line", (req, res) => {
  res.send({ msg: "King of the world" });
});
module.exports = app;
