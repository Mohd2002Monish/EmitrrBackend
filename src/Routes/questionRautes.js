const express = require("express");
const Questions = require("../Model/questions.model");
const app = express();
app.get("/questions", async (req, res) => {
  const questions = await Questions.find({});
  res.send(questions);
});
module.exports = app;
