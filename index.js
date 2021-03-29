const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const hostname = "localhost";
const port = 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.all("/", (req, res, next) => {
    res.status = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
});

app.get("/dishes", (req, res, next) => {
    res.end("Will send all the dishes to you!");
});

app.post("/dishes", (req, res, next) => {
    console.log(req.body);
    res.end(
        "Will add the dish: " +
            req.body.name +
            " with details: " +
            req.body.description
    );
});

app.put("/dishes", (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /dishes");
});

app.delete("/dishes", (req, res, next) => {
    res.end("Deleting all dishes");
});

app.get("/dishes/:dishId", (req, res, next) => {
    res.end("Will send details of the dish: " + req.params.dishId + " to you!");
});

app.post("/dishes/:dishId", (req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /dishes/" + req.params.dishId);
});

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});