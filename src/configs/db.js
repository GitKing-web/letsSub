const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

async function connectDb() {
  return await mongoose.connect(
    process.env.NODE_ENV === "development"
      ? process.env.MONGO_LOCAL
      : process.env.MONGO_GLOBAL
  );
}

module.exports = connectDb;
