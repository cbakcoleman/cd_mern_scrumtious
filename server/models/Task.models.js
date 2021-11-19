// CREATE EVENT SCHEMA
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    content : {
        type: String, 
        required : [true, "Task {PATH} is required"]
    }
}, {timestamps: true})

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;