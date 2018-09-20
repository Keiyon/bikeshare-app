
var request = require("request");
var PORT = 8080;

// var latitude = 38.995719;
// var longitude = -77.038405;
var radius = 1;
var key = "lo_qtNC8fHHmJOTkvZnPSv3-aWFdker4UEn5z4LGqzU";

function findBikes() {
    var latitude = 38.995719;
    var longitude = -77.038405;
    var queryUrl = "https://api.coord.co/v1/sv/location?latitude=" +latitude + "&longitude=" + longitude + "&radius_km=" + radius + "&access_key=" + key;
    request(queryUrl, function (error, response, body){
        if (!error && response.statusCode === 200){
            var jsonData = JSON.parse(body);
            console.log(jsonData.features[0]);
    
            console.log("Longitude: " + jsonData.features[0].properties.lon);
            console.log("Latitude: " + jsonData.features[0].properties.lat);            
        }
    })
}
findBikes();

//https://api.coord.co/v1/sv/location?latitude=40.73935542&longitude=-73.99931783&radius_km=0.1&access_key=<your_api_key>
//add to-do's