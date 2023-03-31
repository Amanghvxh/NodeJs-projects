const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for starting a task!"],
  },
  description: {
    type: String,
    required: [true, "Please provide a valid description for a task"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);
