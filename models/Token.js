const mongoose = require("mongoose");
const { Schema } = mongoose;

const tokenSchema = new Schema({
  token: { type: String, required: true },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  timestamps: {
    type: Date,
    default: Date.now,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;
