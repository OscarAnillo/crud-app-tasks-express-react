const router = require('express').Router();
const { getTasks, createTask, updateTask, deleteTask } = require('../Controllers/Task-controllers');

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask)


module.exports = router