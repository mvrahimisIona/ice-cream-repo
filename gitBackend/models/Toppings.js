/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ToppingSchema = new Schema({
  toppingId: { type: String, required: true, unique: true }, //avoid duplicates
  toppingType: { type: String, required: true },
  expirationDate: { type: Date, required: true },
  purchasedDate: { type: Date, required: true },
  pricePerGallon: { type: Number, required: true },
  pricePerServing: { type: Number, required: true },
  currentQuantityInStockOz: { type: Number, required: true },
  quantityOrderedOz: { type: Number, required: true },
});

module.exports = mongoose.model("Topping", ToppingSchema);
