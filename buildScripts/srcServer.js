var express = require("express");
var path = require("path");
var open = require("open");

var port = 3000;
var app = express();
//Here we are requesting the root and sending the file specify in ../src/index.html
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    // Here we are opening the application on this address on this port
    open("http://localhost:" + port);
  }
});
