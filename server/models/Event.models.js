// CREATE EVENT SCHEMA
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    name : {
        type: String, 
        required : [true, "Event {PATH} is required"]
    }, 
    count : {
        type: Number,
        required : [true, "Event guest {PATH} is required"], 
        min : [1, "Event guest {PATH} must be at least 1"]
    },
    description : {
        type : String, 
        required : [true, "Event {PATH} is required"]
    },
    taskLists : [{
        type : [String],
        required : []
    }]
}, {timestamps: true})

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;