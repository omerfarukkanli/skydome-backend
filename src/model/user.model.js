const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  machines: [{ type: mongoose.Schema.Types.ObjectId, ref: "Machine" }],
});

module.exports = mongoose.model("User", userSchema);
