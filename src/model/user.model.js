const mongoose = require("mongoose");
const machineSchema  = require("../schema/machine.schema");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  machines: [machineSchema],
});

module.exports = mongoose.model("User", userSchema);
