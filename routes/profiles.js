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
        res.json(newProfile);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.patch("/updateProfile/:profileId", (req, res) => {
  const { profileId } = req.params;
  const { secureUrl } = req.body;
  Profile.findByIdAndUpdate(
    ProfileId,
    { $push: { images: { secureUrl } } },
    { safe: true, upsert: true, new: true },
    function (err, model) {
      console.log(err);
    }
  );
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
