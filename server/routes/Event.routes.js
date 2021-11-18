// CREATE ROUTES
const Event = require("../controllers/Event.controllers");
const {findAllEvents, findOneEvent, createNewEvent, updateEvent, deleteEvent} = require("../controllers/Event.controllers");

module.exports = (app) => {
    app.get("/api/events", findAllEvents);
    app.get("/api/events/:id", findOneEvent);
    app.post("/api/events/new", createNewEvent);
    app.put("/api/events/update/:id", updateEvent);
    app.delete("/api/events/delete/:id", deleteEvent);
}