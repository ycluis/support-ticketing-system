const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  status: {
    type: String,
    enum: ["open", "closed"],
    default: "open",
  },
  tag: {
    type: String,
    enum: ["bug", "change request"],
    default: "bug",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: String,
  },
});

module.exports = mongoose.model("Ticket", ticketSchema);
