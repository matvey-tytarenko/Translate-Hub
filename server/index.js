const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Create App
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// DataBase Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo Connection successfull"))
  .catch((err) => console.error(`Mongo Connection Error: ${err}`));

// Export Module
module.exports = app;
