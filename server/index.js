const fs = require("fs");

const express = require("express");

const db = require("./db.json");

const app = express();

const PORT = process.env.PORT || 3001;

const data = JSON.parse(fs.readFileSync("./db.json", "utf8"));

const server = app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});

// Enable CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get("/", (req, res) => {
    res.json(data);
});