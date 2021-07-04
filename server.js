const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const Role = db.role;

const app = express();
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/memoryRecall.routes")(app);
require("./app/routes/iqQuiz.routes")(app);
require("./app/routes/voiceRecognition.routes")(app);
require("./app/routes/drawing.routes")(app);
require("./app/routes/performace1.routes")(app);
require("./app/routes/performace2.routes")(app);
var corsOptions = {
  origin: "http://localhost:8088",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Db");
  initial();
});
function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to lean application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
