const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require('jsonwebtoken');
const isAuth = require('../middlewares/isAuthenticated');
const { TOKEN_PRIVATE_KEY } = process.env;

const EXPIRES_IN_SEC = 3600;

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

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email: email });
    const correctPwd = await bcrypt.compare(password, user.password)
    if (!user || !correctPwd) {
      const error = new Error('Username or password are wrong.');
      error.statusCode = 401;
      throw error
    }
    const token = jwt.sign(
      { email: user.email, userId: user._id.toString() },
      TOKEN_PRIVATE_KEY,
      { expiresIn: EXPIRES_IN_SEC }
    );
    res.status(200).json({
      token: token,
      user: user,
      expiresInSec: EXPIRES_IN_SEC
    });
  } catch (err) {
    if(!err.statusCode) err.statusCode = 500;
    next(err);
  }
});

router.get('/relogin', isAuth, async (req, res, next) => {
  try {
    const user = await User.findById(req.userId)
    res.json({ user })
  } catch (error) {
    throw new Error('Can not find user infos!')
  }
});

module.exports = router;
