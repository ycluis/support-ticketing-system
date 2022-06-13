const mongoose = require("mongoose");

const userAuditTrailSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  info: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserAuditTrail", userAuditTrailSchema);
