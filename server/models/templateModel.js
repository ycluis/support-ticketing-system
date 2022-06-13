const mongoose = require("mongoose");

const templateSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  info: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Template", templateSchema);
