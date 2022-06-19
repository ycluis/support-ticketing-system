const companyModel = require("../models/company/companyModel");
const asyncHandler = require("express-async-handler");

const getAllCompany = asyncHandler(async (req, res, next) => {
  const company = await companyModel.find({}).select(["-_id", "-__v"]);

  res.status(200).json({ sucess: true, message: "", data: company });
});

const getCompanyById = asyncHandler(async (req, res, next) => {
  const company = await companyModel
    .findById(req.params.id)
    .select(["-_id", "-__v"]);

  if (!company) {
    res.status(404);
    throw Error(`Company not found with id of ${req.params.id}`);
  }

  res.status(200).json({ sucess: true, message: "", data: company });
});

const createNewCompany = asyncHandler(async (req, res, next) => {
  //* Add user to req.body
  // req.body.user = req.user.id;

  const company = await companyModel.create(req.body);

  res.status(201).json({
    success: true,
    message: "New company created successfully!",
    data: company,
  });
});

const updateCompanyById = asyncHandler(async (req, res, next) => {
  let company = await companyModel.findById(req.params.id);
  if (!company) {
    res.status(404);
    throw Error(`Company not found with id of ${req.params.id}`);
  }

  company = await companyModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    .select(["-_id", "-__v"]);

  res.status(200).json({ success: true, message: "", data: company });
});

const removeCompanyById = asyncHandler(async (req, res, next) => {
  const company = await companyModel
    .findById(req.params.id)
    .select(["-_id", "-__v"]);

  if (!company) {
    res.status(404);
    throw Error(`Company not found with id of ${req.params.id}`);
  }

  await companyModel.findByIdAndDelete(req.params.id);

  res.status(200).json({ success: true, message: "", data: {} });
});

module.exports = {
  getAllCompany,
  getCompanyById,
  createNewCompany,
  updateCompanyById,
  removeCompanyById,
};
