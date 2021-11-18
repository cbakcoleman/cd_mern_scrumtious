// SET UP CONTROLLER
// FULL CRUD
const Event = require("../models/Event.models");

module.exports = {
    // READ ALL
    findAllEvents : (req, res) => {
        Event.find()
            .then(allEvents=> res.json({ message: "Success!", events: allEvents}))
            .catch(err => res.json({ message: "Pobody's Nerfect!", error: err }));
    },
    // READ ONE
    findOneEvent : (req, res) => {
        Event.findById(req.params.id)
        .then(oneEvent => res.json({ message: "Success!" , event: oneEvent }))
        .catch(err => res.json({ message: "Pobody's Nerfect!", error: err }));
    },
    // CREATE
    createNewEvent : (req, res) => {
        Event.create(req.body)
        .then(newEvent=> res.json({ message: "Success!", event: newEvent }))
        .catch(err => res.status(418).json(err));
    },
    // UPDATE
    updateEvent : (req, res) => {
        Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedEvent => res.json({ message: "Success!", event: updatedEvent }))
        .catch(err => res.status(418).json(err));
    },
    // DESTROYYYYY
    deleteEvent : (req, res) => {
        Event.findByIdAndDelete(req.params.id)
        .then(result => res.json({ message: "Success!", result: result }))
        .catch(err => res.json({ message: "Pobody's Nerfect!", error: err }));
    }
}