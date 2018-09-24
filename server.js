// ______________________________________________________________________________
// DEPENDENCIES - npm packages + API keys
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
require("dotenv").config();  
var express = require("express");
var serveStatic = require("serve-static")
var bodyParser = require("body-parser");
var path = require("path");
var keys = require("./keys.js");
var request = require("request");
// var L = require("leaflet");
var coord = (keys.coord.id);
var google = (keys.google.id);
// var mapbox = (keys.mapbox.id);
// var L = require("leaflet");
// var $ = require("jquery");


// ______________________________________________________________________________
// EXPRESS - server setup
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var app = express(); //we're making an express server
var PORT = process.env.PORT || 3000;

// Express app will handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//______________________________________________________________________________
//ROUTER - Connecting to .js data in routing folder
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
app.use(serveStatic("./public/", {"index": ["index.html"]}));


// ______________________________________________________________________________
//LISTENER - start server
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });