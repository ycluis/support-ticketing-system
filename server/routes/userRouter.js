const express = require("express");
const userRouter = express.Router();
const validateReqBody = require("../middleware/validateReqBodyMiddleware");
const modelSchema = require("../utils/modelValidateSchema");

const { registerUser, getAllUser } = require("../controllers/userController");

// user register
userRouter.post(
  "/register",
  validateReqBody(modelSchema.userRegisterPOST),
  registerUser
);

// user login
userRouter.post("/login", (req, res) =>
  res.status(200).json({ success: true, data: "User login" })
);

// get user info
userRouter.get("/", (req, res) =>
  res.status(200).json({ success: true, data: "Get User Info" })
);

// get all user
userRouter.get("/all", getAllUser);

module.exports = userRouter;
