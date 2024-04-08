const User = require("../models/userSchema");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({
    name,
    email,
    password,
  });
  try {
    await user.save();
    res.status(201).json({
      sucess: true,
      data: user,
      message: "User created successfully",
    });
    alert("User created successfully");
    res.redirect("/");
  } catch (err) {
    res.status(400).send(err);
    alert("User not created");
    res.redirect("/login-signup");
  }
};
