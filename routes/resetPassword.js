const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Token = require("../models/Token");

module.exports = router.get("/reset", async (req, res) => {
  console.log(req.query.token, "token");
  const userData = await User.findOne({
    where: {
      resetPasswordToken: req.query.token,
    },
  });
  console.log("userData", userData);

  if (userData == null) {
    console.error("password reset link is invalid or has expired");
    res.status(403).send("password reset link is invalid or has expired");
  } else {
    res.status(200).send({
      username: userData.username,
      message: "password reset link a-ok",
    });
  }
});
