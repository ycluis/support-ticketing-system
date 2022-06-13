const express = require("express");
const apiRouter = express.Router();

apiRouter.use("/users", require("./userRouter"));

module.exports = apiRouter;
