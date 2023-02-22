require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://omerfaruk:omer123@skydome.fnrr7d6.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello world")
})


let port = 3000;
app.listen(port, () => {
    console.log("success");
  });