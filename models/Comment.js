const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  content: {
    type: String,
    required: true
  }
});

module.exports = Comment = mongoose.model("comments", CommentSchema);
