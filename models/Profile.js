const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  name: String,
  age: Number,
  gender: {
    type: String,
    enum: ["male", "female", "divers"],
    required: true,
  },
  description: String,
  district: String,
  postcode: Number,
  price: String,
  phoneNumber: Number,
  help: [String],
  images: [{ secureUrl: String }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
