const mongoose = require("mongoose");
const { Schema } = mongoose;

const tokenSchema = new Schema({
  hash: { type: String, required: true },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
  },
});

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;
