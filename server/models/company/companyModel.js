const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  address: {
    type: String,
    required: [true, "Please add an address"],
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  contact: {
    type: Number,
    required: [true, "Please add a contact number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: String,
  },
});

module.exports = mongoose.model("Company", companySchema);
