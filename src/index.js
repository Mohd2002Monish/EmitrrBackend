const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const DB = process.env.DB;
console.log(DB, PORT);
const authRoutes = require("./Routes/authRoutes");

app.use("/", authRoutes);

mongoose.connect(DB).then(() => {
  app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
  });
});
