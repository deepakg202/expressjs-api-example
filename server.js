require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize DB
require("./initDB")();

app.use(express.static('public'));

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_SECRET],
  })
);

// API Routes
app.use("/api", require("./controller/routes.js"));


// // Initializing Template Engine
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, '..', 'view/templates'));
// // Template Routes
// app.use(require("./views/routes/index.js"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Listening at port " + PORT);
});
