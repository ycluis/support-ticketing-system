const UserModel = require("../models/user/userModel");
const companyModel = require("../models/company/companyModel");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, company, email, password, role, status, contact, isAdmin } =
    req.body;

  // Check if company valid
  const existingCompany = await companyModel.find({ name: company });

  if (!existingCompany || existingCompany.length < 1) {
    res.status(404);
    throw Error(`Company with name ${req.body.company} does not exist`);
  }

  // Create user
  const user = await UserModel.create({
    name,
    email,
    company: existingCompany[0]._id,
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
