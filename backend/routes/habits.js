const express = require("express");
const router = express.Router();
const Habit = require("../models/Habit");

// GET all habits
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

module.exports = router;
