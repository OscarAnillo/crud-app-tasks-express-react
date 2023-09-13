const TaskModel = require("../Models/Task-model");

const getTasks = async (req, res) => {
    const tasks = await TaskModel.find({});
    res.status(200).send(tasks);
}

const createTask = async (req, res) => {
    const { task } = req.body;

    try {
        const newTask = new TaskModel({ task })
        await newTask.save()
        res.status(200).json(newTask)
    } catch (err) {
        res.status(401).json({ msg: "Could not create task"})
    }
}

const updateTask = async (req, res) => {
    const idTask = await TaskModel.findByIdAndUpdate(req.params.id , {
        $set: {
            task: req.body.task      
        }
    });
    res.status(200).json(idTask);
}

const deleteTask = async (req, res) => {
    try {
        const deleteTask = await TaskModel.findByIdAndRemove(req.params.id);
        res.status(201).send(deleteTask)
    } catch (err) {
        res.status(404).json({ msg: "Cannot locate task"})
    }
}


module.exports = {
    getTasks, 
    createTask,
    updateTask,
    deleteTask
}