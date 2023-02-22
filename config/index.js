require("dotenv").config();
module.exports =  {
  port: process.env.PORT || 8081,
  dbUrl: process.env.DATABASE_URL,
};
