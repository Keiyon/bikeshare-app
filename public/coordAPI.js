
var request = require("request");
var PORT = 8080;
// var keys = require("./keys.js");
var coord = "lo_qtNC8fHHmJOTkvZnPSv3-aWFdker4UEn5z4LGqzU";
// var latitude = 38.995719;
// var longitude = -77.038405;

function findBikes() {
    var latitude = 38.9072;
    var longitude = -77.0369;
    var queryUrl = "https://api.coord.co/v1/sv/location?latitude=" +latitude + "&longitude=" + longitude + "&radius_km=" + radius + "&access_key=" + coord;
    request(queryUrl, function (error, response, body){
        if (!error && response.statusCode === 200){
            var jsonData = JSON.parse(body);
            console.log(jsonData, "This is the bikeShare datat");
            for (var i = 0; i< jsonData.features.length; i++){
            // console.log("Features: " +jsonData.features[i]);
            var bikeData = jsonData.features[i].properties;
            console.log("Company: " + bikeData.system_id);
            if (bikeData.system_id !== "CapitalBikeShare"){ //Return lat and long for dockless bikes
                console.log("Location: "+ bikeData.lon, ", " + bikeData.lat);
            }
            else {
                console.log("Location: " + bikeData.name); //if CaBi, return station name
            }
            console.log("Bikes Available: "+bikeData.num_bikes_available);
            if (bikeData.num_docks_available !== undefined){
                console.log("Number of Docks Avail: " + jsonData.features[i].properties.num_docks_available);
            }
        }
        }
    })
}
findBikes();

//https://api.coord.co/v1/sv/location?latitude=40.73935542&longitude=-73.99931783&radius_km=0.1&access_key=<your_api_key>
//add to-do's