const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect(process.env.DB_URL);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected codeShare Cloud Cluster");
});

module.exports = {
    User: require("./User"),
    Post: require('./Post')
};