"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var app = express(); // parse requests of content-type - application/json

app.use(bodyParser.json()); // parse requests of content-type - application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({
  extended: true
})); // simple route

app.get("/", function (req, res) {
  res.json({
    message: "Welcome to AD757 application."
  });
});

require("./app/routes/customer.routes.js")(app); // set port, listen for requests


var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT, "."));
});