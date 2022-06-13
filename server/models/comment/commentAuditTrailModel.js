const mongoose = require("mongoose");

const commentAuditTrailSchema = mongoose.Schema({
  comment: {
    type: mongoose.Schema.ObjectId,
    ref: "Comment",
    required: true,
  },
  info: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CommentAuditTrail", commentAuditTrailSchema);
