// ______________________________________________________________________________
// DEPENDENCIES - npm packages + API keys
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
require("dotenv").config();  
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var keys = require("./keys.js");
var request = require("request");
// var L = require("leaflet");
var citymapper = (keys.citymapper.id);
var google = (keys.google.id);

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
// require("index.html")(app);

app.get("/",function(req, res){
res.sendFile(path.join(__dirname,"./index.html"));
});
//_____________________________________________________________________________
//leaflet

// var mymap = L.map('mapid').setView([51.505, -0.09], 13);


// var layer = L.mapbox.tileLayer('mapbox.streets');
// layer.on('ready', function() {
//   // the layer has been fully loaded now, and you can
//   // call .getTileJSON and investigate its properties
// });

// var layer = L.mapbox.tileLayer('mapbox.streets');
// layer.on('error', function(err) {
//   // Handle error
// });

// ______________________________________________________________________________
//LISTENER - start server
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });