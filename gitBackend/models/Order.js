/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItemSchema = new Schema({
  scoops: [
    {
      flavor: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  toppings: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  size: { type: String, enum: ["small", "medium", "large"], required: true },
  total: { type: Number, required: true },
});

const PaymentDetailsSchema = new Schema({
  cardNumber: { type: String, required: true },
  nameOnCard: { type: String, required: true },
  securityCode: { type: String, required: true },
  expirationDate: { type: String, required: true },
});

const OrderSchema = new Schema({
  orderId: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  items: [ItemSchema],
  orderDateTime: { type: Date, required: true },
  orderStatus: {
    type: String,
    enum: ["Pending", "In Progress", "Completed", "Cancelled"],
    default: "Pending",
  },
  employeeFulfillingOrder: { type: String, default: "" },
  paymentType: { type: String, enum: ["Credit", "Cash"], required: true },
  paymentDetails: PaymentDetailsSchema,
});

module.exports = mongoose.model("Order", OrderSchema);
