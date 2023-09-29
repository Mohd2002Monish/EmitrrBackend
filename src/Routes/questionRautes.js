const express = require("express");
const Questions = require("../Model/questions.model");
const app = express();
app.get("/questions", async (req, res) => {
  const questions = await Questions.aggregate([
    { $match: { level: "hard" } },
    { $sample: { size: 10 } },
  ]);
  res.send(questions);
});
module.exports = app;
