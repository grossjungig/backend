const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");
const User = require("../models/User");
/* Here we'll write the routes for the Profiles */

router.get("/profiles", (req, res, next) => {
  Profile.find({}).then((result) => {
    res.send({ profiles: result });
  });
});

router.get("/profiles/:id", (req, res) => {
  Profile.findById(req.params.id)
    .populate("user")
    .then((profile) => {
      console.log("profile", profile);
      res.json(profile);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/addProfile", (req, res) => {
  //2.get the data from frontend
  const {
    name,
    age,
    gender,
    description,
    district,
    postcode,
    price,
    phoneNumber,
    user,
    help,
  } = req.body;
  req.user;
  Profile.create({
    name: name,
    age: age,
    gender: gender,
    description: description,
    district: district,
    postcode: postcode,
    phoneNumber: phoneNumber,
    price: price,
    user: user,
    help: help,
  }).then((newProfile) => {
    User.findOneAndUpdate(
      { _id: req.body.user },
      { $set: { profile: newProfile } },
      (err, result) => {
        if (err) return res.send(err);
        console.log("result", result);
      }
    )
      .then((result) => {
        console.log("result", result);
        console.log("new Profile", newProfile);
        res.json(newProfile);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

//updating profile
router.post("/edit/:id", (req, res) => {
  Profile.findById(req.params.id, function (err, profile) {
    if (!profile) res.status(404).send("data is not found");
    else profile.user.name = req.body.name;
    profile.age = req.body.age;
    profile.gender = req.body.gender;
    profile.district = req.body.district;
    profile.description = req.body.description;
    profile.price = req.body.price;
    profile.postcode = req.body.postcode;
    profile.address = req.body.address;
    profile.phoneNumber = req.body.phoneNumber;
    profile.user.email = req.body.email;
    profile.help = req.body.help;
    profile
      .save()
      .then((prof) => {
        res.json("Profile updated!");
      })
      .catch((err) => {
        console.log("error", err);
      });
  });
});
//delete Profile from list
router.delete("/profiles/:id/delete", (req, res) => {
  Profile.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error" });
    });
});

module.exports = router;
