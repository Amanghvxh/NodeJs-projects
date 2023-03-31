const express = require("express");
const router = express.Router();
const {
  getTasks,
  getSingleTask,
  createTask,
  editTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getSingleTask).patch(editTask).delete(deleteTask);

module.exports = router;
