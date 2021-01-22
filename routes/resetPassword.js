const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Token = require("../models/Token");

module.exports = router.get("/reset", async (req, res) => {
  const hash = req.query.resetPasswordToken; // extract form url query

  // find the given toke
  const tokenData = await Token.findOne({
    hash: req.query.resetPasswordToken,
  });

  // check if the token is valid
  if (tokenData && tokenData.expiresAt > new Date()) {
    // get the user for this token
    const user = await User.findOne({ _id: tokenData.user_id });

    if (user) {
      res.status(200).send({
        _id: user.id,
        username: user.username,
        // message: "password_reset_link_a_ok",
      });
    }
  } else {
    // no token found
    res.status(404).json({
      error: "password reset link is invalid or has expired",
    });
  }
});
