require("dotenv").config();
/* ==== External Modules ==== */
const path = require("path");
const express = require("express");
const cors = require("cors");

/* ==== Internal Modules ==== */


/* ==== Instanced Modules  ==== */
const app = express(); // create express app

/* ====  Configuration  ==== */
const db = require('./models/index');

app.use(cors());
// to serve static files and to serve the react build
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
// JSON parsing middleware
app.use(express.json());


app.listen(process.env.PORT || 5000, () => {
    console.log("server started on port 5000");
});