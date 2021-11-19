// SET UP SERVER
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "cd_mern_project_db";

// MIDDLEWARE
app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));

// DATABASE CONNECTION LINK
require("./config/mongoose.config")(DB);
// CONNECT ROUTES
require("./routes/List.routes")(app);
// CONNECT ROUTES
require("./routes/Task.routes")(app);

// START SERVER
app.listen(PORT, () => console.log(`Server is up on port: ${PORT}`))