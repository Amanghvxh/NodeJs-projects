const { CustomErrorApi } = require("./customError");
const { BadRequestError } = require("./bad-request");
const { UnauthenticatedError } = require("./unauthenticated");

module.exports = {
  CustomErrorApi,
  BadRequestError,
  UnauthenticatedError,
};
