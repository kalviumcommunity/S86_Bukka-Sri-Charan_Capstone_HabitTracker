const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  frequency: {
  type: String,
  enum: ['daily', 'weekly', 'monthly'],
  required: true,
}
,
  startDate: {
    type: Date,
    default: Date.now,
  },
  completedDates: {
    type: [Date], 
    default: [],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
});

const Habit = mongoose.model("Habit", habitSchema);
module.exports = Habit;
