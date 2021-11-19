
// CREATE EVENT SCHEMA
const mongoose = require("mongoose");


const ListSchema = new mongoose.Schema({
    title: {
        type: String, 
        required : [true, "Event {PATH} is required"]
    }, 
    tasks: [
        {
            content: String
        }
    ]
}, {timestamps: true})

const List = mongoose.model("List", ListSchema);
module.exports = List;