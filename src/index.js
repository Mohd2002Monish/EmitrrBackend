const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./Routes/authRoutes");
const questionRautes = require("./Routes/questionRautes");
dotenv.config();
const PORT = process.env.PORT;
const DB = process.env.DB;

const app = express();
app.use(cors());
app.use("/", authRoutes);
app.use("/", questionRautes);
mongoose.connect(DB).then(() => {
  app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
  });
});
