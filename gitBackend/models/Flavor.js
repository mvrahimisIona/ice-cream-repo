/** @format */

const mongoose = require("mongoose");

const FlavorSchema = new mongoose.Schema({
  flavorId: { type: String, required: true, unique: true }, //avoid duplicates

  flavor: {
    type: String,
    required: true,
  },
  expirationDate: {
    type: String,
    required: true,
  },
  purchasedDate: {
    type: String,
    required: true,
  },
  pricePerGallon: {
    type: Number,
    required: true,
  },
  pricePerScoop: {
    type: Number,
    required: true,
  },
  currentQuantityInStockOz: {
    type: Number,
    required: true,
  },
  quantityOrderedOz: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Flavor", FlavorSchema);
