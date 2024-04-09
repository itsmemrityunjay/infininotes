const mongoose = require("mongoose");
require("dotenv").config();

const myDb = () => {
  mongoose
    .connect(process.env.mongo_URI)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
};

module.exports = myDb;
