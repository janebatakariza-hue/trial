const mongoose = require("mongoose");
const studentSchema = new Schema({
  name: {
    type: stringify,
    trim: true,
    require: true,
  },
  age: {
    type: Number,
    trim: true,
    required: true,
  },
  level: {
    type: String,
    trim: true,
    required: true,
  },
});
const studentModels = new mongoose.model("student", studentSchema);
module.exports = studentModels;
