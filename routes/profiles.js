const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");
/* Here we'll write the routes for the Profiles */

//1. to retrieve Profiles from mongo and make available to frontend
router.get("/profiles", (req, res, next) => {
  console.log("Profiles", req.body);
  Profile.find({}).then((result) => {
    res.send({ profiles: result });
  });
});

router.get("/profiles/:id", (req, res) => {
  Profile.findById(req.params.id).then((profile) => {
    res.json(profile);
    console.log("This is the Profile", Profile);
  });
});

//post new Profile in Berlin
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
    owner,
  } = req.body;
  console.log("BACKEND", req.body);
  //3. then create a new Profile with information from the frontend
  req.user;
  Profile.create({
    gender,
    description,
    district,
    postcode,
    price,
    phoneNumber,
    owner,
    name: name,
    age: age,
    gender: gender,
    description: description,
    district: district,
    postcode: postcode,
    phoneNumber: phoneNumber,
    price: price,
    owner: owner,
  })
    .then((newProfile) => {
      console.log("whats name?");
      console.log("NEWProfile", newProfile);
      res.json(newProfile);
    })
    .catch((err) => {
      res.status(500).json({
        messgae: "Error",
      });
    });
});
router.patch("/updateProfile/:profileId", (req, res) => {
  const { profileId } = req.params;
  console.log(ProfileId);
  console.log(req.body);
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
  //console.log('whats req?', req.params.id);
  Profile.deleteOne({ _id: req.params.id })
    .then((result) => {
      //console.log('RESULT', result);
      res.json(result);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error" });
    });
});

module.exports = router;
