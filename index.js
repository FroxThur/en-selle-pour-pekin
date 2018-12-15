const express = require("express");
const path = require("path");
const app = express();
const mediaData = require("./src/TransformJson");
/*scheduled task to update facebook photos json*/

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Put all API endpoints under '/api'
app.get("/api/getData", (req, res) => {
  res.json(mediaData);
});

// send robots.txt
app.get("/robots.txt", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/robots.txt"));
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Service listening on port ${port}`);