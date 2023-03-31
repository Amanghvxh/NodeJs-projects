const { StatusCodes } = require("http-status-codes");

const customErrorHandler = async function (err, req, res, next) {
  const customErrorObject = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Server crashed",
  };
  res
    .status(customErrorObject.statusCode)
    .json({ success: true, message: customErrorObject.message });
};

module.exports = customErrorHandler;
