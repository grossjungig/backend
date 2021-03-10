const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Token = require("../models/Token");

const BCRYPT_SALT_ROUNDS = 12;

module.exports = router.put("/updatePasswordViaEmail", async (req, res) => {
  // find the token
  const passwordToken = await Token.findOne({
    hash: req.body.resetPasswordToken,
  });

  const user = await User.findOne({
    _id: passwordToken.user_id,
  });
  if (user == null) {
    console.error("password reset link is invalid or has expired");
    res.status(403).send("password reset link is invalid or has expired");
  } else if (user != null) {
    const hashedPassword = await bcrypt.hash(
      req.body.password,
      BCRYPT_SALT_ROUNDS
    );

    await user.update({
      password: hashedPassword,
    });

    res.status(200).send({ message: "password updated" });
  } else {
    res.status(401).json("no user exists in db to update");
  }
});
