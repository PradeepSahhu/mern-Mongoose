// import { connect } from "mongoose";
// const { connect } = require("mongoose");
import connect from "mongoose";
//! To Connect with the Database.

const url =
  "mongodb+srv://root:H2H8qr8LkzsgWod4@clusterstudent.du4ss79.mongodb.net/imageBase64?retryWrites=true&w=majority&appName=clusterStudent";
const connectDB = () => {
  console.log("Successfully connected to the MongooseDB");
  return connect(url);
};

// connectDB();

// module.exports = connectDB;
export default connectDB;
