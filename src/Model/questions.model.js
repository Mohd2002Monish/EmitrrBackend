const mongoose = require("mongoose");

// Define the schema for the quiz questions
const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
    validate: [arrayLengthValidator, "There must be at least 2 options."],
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },
});

// Custom validator function to ensure at least 2 options are provided
function arrayLengthValidator(value) {
  return value.length >= 2;
}

// Create a model for the quiz questions using the schema
const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
