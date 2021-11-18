// SET UP CONTROLLER
// FULL CRUD
const Task = require("../models/Task.models");

module.exports = {
    // READ ALL
    findAllTasks : (req, res) => {
        Task.find()
            .then(allTasks => res.json({ message: "Success!", tasks: allTasks}))
            .catch(err => res.json({ message: "Pobody's Nerfect!", error: err }));
    },
    // READ ONE
    findOneTask : (req, res) => {
        Task.findById(req.params.id)
        .then(oneTask=> res.json({ message: "Success!" , task: oneTask }))
        .catch(err => res.json({ message: "Pobody's Nerfect!", error: err }));
    },
    // CREATE
    createNewTask : (req, res) => {
        Task.create(req.body)
        .then(newTask => res.json({ message: "Success!", task: newTask }))
        .catch(err => res.status(418).json(err));
    },
    // UPDATE
    updateTask : (req, res) => {
        Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedTask => res.json({ message: "Success!", task: updatedTask}))
        .catch(err => res.status(418).json(err));
    },
    // DESTROYYYYY
    deleteTask : (req, res) => {
        Task.findByIdAndDelete(req.params.id)
        .then(result => res.json({ message: "Success!", result: result }))
        .catch(err => res.json({ message: "Pobody's Nerfect!", error: err }));
    }
}