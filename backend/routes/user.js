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


router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Error fetching users" });
  }
});

module.exports = router;
