require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasks");
const { StatusCodes } = require("http-status-codes");
const connectDb = require("./db/connect");
const customErrorHandler = require("./middlewares/errorHandler");
const { BadRequestError } = require("./errors");

//Middleware's
app.use(express.json());

//routes
app.use("/", (req, res) => {
  return res
    .status(StatusCodes.OK)
    .json({ success: true, data: "This is Todo api!" });
});
app.use("/api/v1/tasks", tasksRouter);

app.use(customErrorHandler);

const port = process.env.PORT || 3000;

const start = async function () {
  try {
    //connecting Db
    await connectDb(process.env.MONGO_URI);
    //Starting up the server
    app.listen(
      port,
      console.log(`Server is running successfully on port:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
