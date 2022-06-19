const express = require("express");
const companyRouter = express.Router();
const validateReqBody = require("../middleware/validateReqBodyMiddleware");
const modelSchema = require("../utils/modelValidateSchema");

const {
  getAllCompany,
  getCompanyById,
  createNewCompany,
  updateCompanyById,
  removeCompanyById,
} = require("../controllers/companyController");

// get all company
companyRouter.get("/", getAllCompany);

// get specific company
companyRouter.get("/:id", getCompanyById);

// create new company
companyRouter.post(
  "/",
  validateReqBody(modelSchema.companyPOST),
  createNewCompany
);

// edit specific company
companyRouter.put("/:id", updateCompanyById);

// delete specific company
companyRouter.delete("/:id", removeCompanyById);

module.exports = companyRouter;
