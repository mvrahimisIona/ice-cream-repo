/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

// Schema for cart items
const CartItemSchema = new Schema({
  size: { type: String, enum: ["small", "medium", "large"], required: true },
  scoops: [
    {
      flavor: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  toppings: [
    {
      type: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  itemPrice: { type: Number, required: true },
});

// Schema for payment details
const PaymentDetailsSchema = new Schema({
  cardNumber: { type: String, required: true },
  nameOnCard: { type: String, required: true },
  securityCode: { type: String, required: true },
  expirationDate: { type: String, required: true },
});

// Schema for current cart
const CartSchema = new Schema({
  items: [CartItemSchema],
  cartTotal: { type: Number, required: true },
});

// Main Customer schema
const CustomerSchema = new Schema({
  customerId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  paymentOnFile: PaymentDetailsSchema,
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  currentCart: CartSchema,
});

module.exports = mongoose.model("Customer", CustomerSchema);
