const crypto = require("crypto");
const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Token = require("../models/Token");

router.post("/forgotPassword", async (req, res) => {
  console.log(req);
  if (!req.body.email || req.body.email === "") {
    res
      .status(400)
      .json({ success: false, error_message: "Email cannot be empty" });
  }
  console.error(req.body.email);

  const user = await User.findOne({
    email: req.body.email,
  });
  if (user === null) {
    console.error("email not in database");
    res.status(200).json({
      success: false,
      error_message: "This user doesn't have an account",
    });
  } else {
    const hash = crypto.randomBytes(20).toString("hex");

    await Token.create({
      hash,
      user_id: user.id,
      expiresAt: Date.now() + 3600000,
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `${process.env.EMAIL_ADDRESS}`,
        pass: `${process.env.EMAIL_PASSWORD}`,
      },
    });

    const mailOptions = {
      from: "Grossjungig.ai@gmail.com",
      to: `${user.email}`,
      subject: "Link To Reset Password",
      text:
        "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
        "Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n" +
        `${process.env.FRONTENDURL}reset/${hash}\n\n` +
        "If you did not request this, please ignore this email and your password will remain unchanged.\n",
    };

    console.log("sending mail");

    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.error("there was an error: ", err);
        res.status(500).json({ success: false });
      } else {
        console.log("here is the res: ", response);
        res.status(200).json({ success: true });
      }
    });
  }
});

module.exports = router;
