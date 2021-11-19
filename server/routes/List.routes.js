// CREATE ROUTES
const List = require("../controllers/List.controllers");
const {findAllLists, findOneList, createNewList, updateList, deleteList} = require("../controllers/List.controllers");

module.exports = (app) => {
    app.get("/api/lists", findAllLists);
    app.get("/api/lists/:id", findOneList);
    app.post("/api/lists/new", createNewList);
    app.put("/api/lists/update/:id", updateList);
    app.delete("/api/lists/delete/:id", deleteList);
}