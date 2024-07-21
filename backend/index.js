const express = require("express");
const app = express();
const connectDB = require("./MongoDB/connection.database");

const image_router = require("./routing/image.routing");
const imageModel = require("./Model/image.model");

const PORT = 8080;

const cors = require("cors"); // Import the CORS middleware
app.use(cors());
app.use(express.json({ limit: "50mb" })); // Increase the limit for JSON payload
app.use(express.urlencoded({ limit: "50mb", extended: true })); // Increase the limit for URL-encoded payload

app.get("/", (req, res) => {
  res.send(`<div">Hello</div>`);
});

app.use("/api/images", image_router);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Running on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
