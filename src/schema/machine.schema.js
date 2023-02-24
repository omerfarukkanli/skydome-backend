const mongoose = require("mongoose");

const machineSchema = mongoose.Schema({
  machineName: String,
  machineStopCozgu: Number,
  machineStopAtki: Number,
  machineStopOther: Number
});

module.exports = machineSchema;
