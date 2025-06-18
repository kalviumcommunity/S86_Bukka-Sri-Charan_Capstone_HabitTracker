const express = require("express");
const router = express.Router();
const Habit = require("../models/Habit");

router.get("/", async (req, res) => {
  try {
    const habits = await Habit.find().populate("userId", "name email");
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

router.put("/:id", async (req, res) => {
  try {
    const { title, frequency } = req.body;

    if (!title || !frequency) {
      return res.status(400).json({ message: "Title and frequency are required." });
    }

    const updatedHabit = await Habit.findByIdAndUpdate(
      req.params.id,
      { title, frequency },
      { new: true, runValidators: true }
    );

    if (!updatedHabit) {
      return res.status(404).json({ message: "Habit not found." });
    }

    res.status(200).json(updatedHabit);
  } catch (error) {
    console.error("Error updating habit:", error);
    res.status(500).json({ message: "Server error while updating habit." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedHabit = await Habit.findByIdAndDelete(id);

    if (!deletedHabit) {
      return res.status(404).json({ message: "Habit not found." });
    }

    res.status(200).json({ message: "Habit deleted successfully." });
  } catch (error) {
    console.error("Error deleting habit:", error);
    res.status(500).json({
      message: "Server error while deleting habit. Please try again later.",
    });
  }
});

module.exports = router;
