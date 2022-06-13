const express = require("express");
const userRouter = express.Router();

// get user info
userRouter.get("/", (req, res) =>
  res.status(200).json({ success: true, data: "Get User Info" })
);

// user register
userRouter.post("/register", (req, res) =>
  res.status(200).json({ success: true, data: "User register" })
);

// user login
userRouter.post("/login", (req, res) =>
  res.status(200).json({ success: true, data: "User login" })
);

module.exports = userRouter;
