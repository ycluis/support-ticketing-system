// read env variable
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/config/config.env" });

// connect MongoDB
const connectDB = require("./config/db");
connectDB();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const path = require("path");

const errorHandler = require("./middleware/errorHandlerMiddleware");

const app = express();
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

// API routes
app.use("/api/v1", require("./routes/apiRouter"));
app.use(errorHandler);

module.exports = app;
