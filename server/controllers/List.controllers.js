// SET UP CONTROLLER
// FULL CRUD
const List = require("../models/List.models");

module.exports = {
    // READ ALL
    findAllLists : (req, res) => {
        List.find()
            .then(allLists=> res.json({ message: "Success!", lists: allLists}))
            .catch(err => res.json({ message: "Pobody's Nerfect!", error: err }));
    },
    // READ ONE
    findOneList : (req, res) => {
        List.findById(req.params.id)
        .then(oneList => res.json({ message: "Success!" , list: oneList }))
        .catch(err => res.json({ message: "Pobody's Nerfect!", error: err }));
    },
    // CREATE
    createNewList : (req, res) => {
        List.create(req.body)
        .then(newList => res.json({ message: "Success!", list: newList }))
        .catch(err => res.status(418).json(err));
    },
    // UPDATE
    updateList : (req, res) => {
        List.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedList => res.json({ message: "Success!", list: updatedList }))
        .catch(err => res.status(418).json(err));
    },
    // DESTROYYYYY
    deleteList : (req, res) => {
        List.findByIdAndDelete(req.params.id)
        .then(result => res.json({ message: "Success!", result: result }))
        .catch(err => res.json({ message: "Pobody's Nerfect!", error: err }));
    }
}