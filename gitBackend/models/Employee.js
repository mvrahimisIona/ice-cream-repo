/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  employeeId: { type: String, required: true, unique: true }, //avoid duplicates
  employeeName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  onShift: { type: Boolean, default: false },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
