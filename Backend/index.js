require("dotenv").config();
const express = require("express");
const connectDb = require("./config/connectDB");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`The Server is Running On Port ${PORT}`);
});

connectDb();
