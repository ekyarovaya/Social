const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  biography: {
    type: String,
    required: true
  },
  userType: {
    type: String, // photographer or model
    required: true
  },
  zipCode: {
    type: Number,
    required: true
  },
  experience: {
    type: Number,
    required: true
  }
});

module.exports = User = mongoose.model("users", UserSchema);
