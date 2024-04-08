const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 9000;

app.use(express.json());

const UserRoutes = require("./routes/UserData");
app.use("/login-signup", UserRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const myDb = require("./config/Database");
myDb();

app.get("/", (req, res) => {
  res.send("Hello World");
});
