// CREATE EVENT SCHEMA
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name : {
        type: String, 
        required : [true, "Task {PATH} is required"]
    }, 
    notes : {
        type: String
    },
    isPriority : {
        type : Boolean,
        default : false 
    }
}, {timestamps: true})

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;