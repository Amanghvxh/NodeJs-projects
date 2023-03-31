const mongoose = require("mongoose");

const connectDb = async function (url) {
  return mongoose.connect(url);
};

module.exports = connectDb;
