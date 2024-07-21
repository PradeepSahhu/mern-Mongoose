import mongoose from "mongoose";
// var mongoose = require("mongoose");

export default async function connectDB() {
  console.log("Connecting to DB.....");
  return await mongoose
    .connect(
      "mongodb+srv://root:H2H8qr8LkzsgWod4@clusterstudent.du4ss79.mongodb.net/imageBase64?retryWrites=true&w=majority"
    )
    .then(function (data) {
      console.log("Data : ", data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// connectDB();

// mongodb+srv://root:H2H8qr8LkzsgWod4@clusterstudent.du4ss79.mongodb.net/?retryWrites=true&w=majority&appName=clusterStudent
