const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.json());

const UserRoutes = require("./routes/UserData");
app.use("/userData", UserRoutes);

const myDb = require("./config/Database");
myDb();

app.get("/", (req, res) => {
  res.send(`Localhost ${port} is running...`);
});
