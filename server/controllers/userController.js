const UserModel = require("../models/user/userModel");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role, status, contact, isAdmin } = req.body;

  // Create user
  const user = await UserModel.create({
    name,
    email,
    password,
    role,
    status,
    contact,
    isAdmin,
  });

  res.status(201).json({
    success: true,
    message: `User ${user.name} created!`,
  });
});

const getAllUser = asyncHandler(async (req, res) => {
  const users = await UserModel.find({}).select(["-_id", "-__v", "-password"]);

  res.status(201).json({
    success: true,
    message: "",
    data: users,
  });
});

module.exports = { registerUser, getAllUser };
