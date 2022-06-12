const mongoose = require("mongoose");

const companyAuditTrailSchema = mongoose.Schema({
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    required: true,
  },
  info: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CompanyAuditTrail", companyAuditTrailSchema);
