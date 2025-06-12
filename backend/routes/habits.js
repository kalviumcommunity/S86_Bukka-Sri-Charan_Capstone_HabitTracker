const express = require("express");
const router = express.Router();
const Habit = require("../models/Habit");

router.get("/", async (req, res) => {
  try {
    const habits = await Habit.find();
    res.status(200).json(habits);
  } catch (error) {
    console.error("Error fetching habits:", error);
    res.status(500).json({
      message: "Server error while fetching habits. Please try again later.",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, frequency, userId } = req.body;

    if (!title || !frequency || !userId) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newHabit = new Habit({
      title,
      frequency,
      userId,
    });

    const savedHabit = await newHabit.save();
    res.status(201).json(savedHabit);
  } catch (error) {
    console.error("Error creating habit:", error);
    res.status(500).json({
      message: "Server error while creating habit. Please try again later.",
    });
  }
});

module.exports = router;
