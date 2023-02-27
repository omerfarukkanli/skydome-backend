const mongoose = require("mongoose");

const machineSchema = mongoose.Schema({
  machineName: { type: String, required: true },
  machineStopCozgu: { type: Number, required: true },
  machineStopAtki: { type: Number, required: true },
  machineStopOther: { type: Number, required: true },
});

module.exports = machineSchema;
