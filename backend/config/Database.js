const mongoose = require("mongoose");
require("dotenv").config();

const myDb = () => {
  mongoose
    .connect(process.env.mongo_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));

  process.exit(1);
};

module.exports = myDb;
