// CREATE ROUTES
const Task = require("../controllers/Task.controllers");
const {findAllTasks, findOneTask, createNewTask, updateTask, deleteTask} = require("../controllers/Task.controllers");

module.exports = (app) => {
    app.get("/api/tasks", findAllTasks);
    app.get("/api/tasks/:id", findOneTask);
    app.post("/api/tasks/new", createNewTask);
    app.put("/api/tasks/update/:id", updateTask);
    app.delete("/api/tasks/delete/:id", deleteTask);
}