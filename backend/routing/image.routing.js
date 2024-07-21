const express = require("express");
const router = express.Router();
const imageModel = require("../Model/image.model");

router.use(express.json());

// Route to handle image upload
router.post("/", async (req, res) => {
  try {
    const { imagebase, contentType } = req.body;

    const newImage = new imageModel({
      imagebase,
      contentType,
    });

    await newImage.save();

    res.status(201).send("Image saved successfully");
  } catch (error) {
    console.error("Error saving image:", error);
    res.status(500).send("Server error");
  }
});

const {
  imageBase64,
  imageBase64Testing,
} = require("../controllers/image.data");

router.route("/").get(imageBase64);
router.route("/testing").get(imageBase64Testing);
module.exports = router;
