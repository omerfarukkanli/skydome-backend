const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  machines: [{ type: mongoose.Schema.Types.ObjectId, ref: "Machine" }],
});

module.exports = mongoose.model("User", userSchema);
