// ______________________________________________________________________________
// DEPENDENCIES - npm packages + API keys
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
require("dotenv").config();  
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var keys = require("./keys.js");
var request = require("request");

var citymapper = (keys.citymapper.id);
//var google = (keys.google.id);
//var leaflet = (keys.leaflet.id);

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
require("./app/routes/apiRoutes.js")(app);
// require("./app/routing/htmlRoutes")(app);

// ______________________________________________________________________________
//LISTENER - start server
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });