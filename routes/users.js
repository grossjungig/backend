const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require('jsonwebtoken');

const TOKEN_PRIVATE_KEY = 'ajkfklajöfk9u8r9w0';

router.post("/signup", async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const userAlreadyExists = await User.findOne({ email: email });

  if (userAlreadyExists) {
    res.status(400).json({ message: "This email already exists" });
    return;
  }

  try {
    const hashedPwd = await bcrypt.hash(password, 12)
    const newUser = await User.create({
      name: name,
      role: role,
      email: email,
      password: hashedPwd,
    });
    res.status(201).json({ message: 'User created', userId: newUser._id });

  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
});

router.post("/login", (req, res, next) => {

});

// todo: MAKE IT A POST REQ NOT DELETE!!!
router.delete("/logout", (req, res) => {
  // LOGOUT!!! 
  res.json({ message: "Successful logout" });
});

router.get("/loggedin", (req, res) => {
  res.json(req.user);
});

module.exports = router;
