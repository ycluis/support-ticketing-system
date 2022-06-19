const express = require("express");
const apiRouter = express.Router();

// User route
apiRouter.use("/users", require("./userRouter"));

// Company route
apiRouter.use("/company", require("./companyRouter"));

module.exports = apiRouter;
