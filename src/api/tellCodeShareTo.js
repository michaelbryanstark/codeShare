import axios from "axios";

console.log("NODE ENV WHAT DO YOU MEAN?", process.env.NODE_ENV);
let HOST;
if (process.env.NODE_ENV !== "production") {
    HOST = "http://localhost:5000/api/";
} else {
    HOST = "https://codeshare-app3.herokuapp.com/api/";
}

export default axios.create({
    baseURL: HOST,
    headers: {
        "Content-type": "application/json",
    },
});