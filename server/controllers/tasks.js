const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const taskModel = require("../models/tasks");
const getTasks = async function (req, res) {
  const tasks = await taskModel.find();
  if (!tasks) {
    throw new BadRequestError("Can not get all the tasks");
  }
  return res.status(StatusCodes.ACCEPTED).json({ success: true, data: tasks });
};
const getSingleTask = async function (req, res) {
  const taskId = req.params.id;
  const task = await taskModel.findOne({ _id: taskId });
  if (!task) {
    throw new BadRequestError("No task exist with the given ID!");
  }
  return res.status(StatusCodes.ACCEPTED).json({ success: true, data: task });
};
const createTask = async function (req, res) {
  const task = await taskModel.create(req.body);
  if (!task) {
    throw new UnauthenticatedError("Can not create your requested task!");
  }
  return res.status(StatusCodes.ACCEPTED).json({ success: true, data: task });
};

const editTask = async function (req, res) {
  const taskId = req.params.id;
  const task = await taskModel.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    throw UnauthenticatedError("Can not update the task!");
  }
  return res.status(StatusCodes.ACCEPTED).json({ success: true, data: task });
};
const deleteTask = async function (req, res) {
  const taskId = req.params.id;
  const task = await taskModel.deleteOne({ _id: taskId });
  if (!task) {
    throw new UnauthenticatedError("Can not delete the selcted task!");
  }
  return res
    .status(StatusCodes.ACCEPTED)
    .json({ success: true, data: "Deleted a task!" });
};

module.exports = {
  getTasks,
  getSingleTask,
  createTask,
  editTask,
  deleteTask,
};
