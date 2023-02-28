const mongoose = require("mongoose");
const { dbUrl } = require("../config");

module.exports = function connect() {
  mongoose.set("strictQuery", true);
  mongoose.connect(dbUrl, { useNewUrlParser: true });
  const db = mongoose.connection;

  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("connected to database"));
};
