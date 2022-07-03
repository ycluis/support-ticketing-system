const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const schemas = {
  companyPOST: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    address: Joi.string().required(),
    status: Joi.string().valid("active", "inactive").required(),
    contact: Joi.number().integer().required(),
  }),
  userRegisterPOST: Joi.object({
    name: Joi.string().required(),
    company: Joi.string().required(),
    email: Joi.string().email().required(),
    password: new passwordComplexity({
      min: 8,
      max: 16,
      lowerCase: 1,
      UpperCase: 1,
      numeric: 1,
      symbol: 1,
    }).required(),
    role: Joi.string().valid("admin", "user").required(),
    status: Joi.string().valid("active", "inactive").required(),
    contact: Joi.number().integer().required(),
    isAdmin: Joi.boolean().required(),
  }),
};

module.exports = schemas;
