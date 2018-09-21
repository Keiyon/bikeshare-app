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

// app.get("/",function(req, res){
// res.sendFile(path.join(__dirname,"/"));
// });
//_____________________________________________________________________________
//leaflet

// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
// add GeoJSON layer to the map once the file is loaded

//   var mymap = L.map('mapid').setView([38.9072, -77.0369], 13);
//   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'pk.eyJ1Ijoibm9taW5iIiwiYSI6ImNqbTk4enhqdTBkazEzcG4xMnF2d2hhMHUifQ.FR4IlfSjVgCaXe4MtqsomQ'
//   }).addTo(mymap);

//   var marker = L.marker([38.8963, -77.045],).addTo(mymap);
//   var marker = L.marker([38.9008, -77.047],).addTo(mymap);
//   var marker = L.marker([38.9022212, -77.059219],).addTo(mymap);
//   var marker = L.marker([38.9008, -77.047],).addTo(mymap);





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