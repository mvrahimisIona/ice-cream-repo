/** @format */

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Flavor = require("./models/Flavor");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Routes

// Health check
app.get("/", (req, res) => {
  console.log("/ route hit");

  res.send("Ice Cream Inventory API is running");
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
