const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/config/config.env" });

const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");

const companyModel = require("./models/company/companyModel");
const userModel = require("./models/user/userModel");

const company = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/company.json`, "utf-8")
);

const user = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/user.json`, "utf-8")
);

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGOURI_LOCAL);

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

const importDbData = async () => {
  try {
    await connectDb();
    await companyModel.create(company);
    await userModel.create(user);
    console.log(`Data imported successfully`.green.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteDbData = async () => {
  try {
    await connectDb();
    await companyModel.deleteMany();
    await userModel.deleteMany();
    console.log(`Data deleted successfully`.red.inverse);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-i") {
  importDbData();
} else if (process.argv[2] === "-d") {
  deleteDbData();
} else {
  console.log("Invalid params");
  process.exit();
}
