const mongoose = require("mongoose");

const ticketAuditTrailSchema = mongoose.Schema({
  ticket: {
    type: mongoose.Schema.ObjectId,
    ref: "Ticket",
    required: true,
  },
  info: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TicketAuditTrail", ticketAuditTrailSchema);
