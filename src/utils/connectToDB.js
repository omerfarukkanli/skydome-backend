const mongoose = require("mongoose");
const { dbUrl } = require("../../config/index");

async function connectToDB() {
  mongoose.set("strictQuery", true);
  mongoose.connect(dbUrl, { useNewUrlParser: true });
  const db = await mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("connected to database"));
}

module.exports = {
  connectToDB,
};
