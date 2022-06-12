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

const app = express();
app.use(cors());
app.use(morgan("combined"));

module.exports = app;
