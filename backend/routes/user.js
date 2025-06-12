const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/create-user", async (req, res) => {
  try {
    const newUser = new User({
      name: "Charan",
      email: "charan@mail.com",
    });

    const saved = await newUser.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: "Error creating user" });
  }
});

module.exports = router;
