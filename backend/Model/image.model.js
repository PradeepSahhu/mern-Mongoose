const mongoose = require("mongoose");
// import mongoose from "mongoose";

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  imagebase: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Image", imageSchema);
