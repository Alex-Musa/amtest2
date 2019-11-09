const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apptSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const appointment = mongoose.model("appointment", apptSchema);

module.exports = appointment;
