require("dotenv").config();
/* ==== External Modules ==== */
const path = require("path");
const express = require("express");
const cors = require("cors");

/* ==== Internal Modules ==== */
const routes = require('./routes');

/* ==== Instanced Modules  ==== */
const app = express(); // create express app

/* ====  Configuration  ==== */



app.use(cors());
// to serve static files and to serve the react build
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
// JSON parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//custom logger to show the url and req.body if one exists
app.use((req, res, next) => {
    console.log(req.url);
    // is there an auth header
    console.log("AUTH HEADER: ", req.headers.authorization);
    if (req.body) {
        console.log("BODY BEING SENT: ", req.body);
    }
    next();
});

/* ====  Routes & Controllers  ==== */
app.use("/api", routes);

//This is to catch anything that's trying to hit an api route that isn't made
app.all("/api/*", function (req, res, next) {
    res.send("THIS IS NOT AN API ROUTE");
});

//====== REACT FULL STACK MAGIC MIDDLEWARE
app.use((req, res, next) => {
    console.log(req.headers);
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(process.env.PORT || 5000, () => {
    console.log("server started on port 5000");
});