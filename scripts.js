
//GOOGLE MAPS API
//---------———————————————————————————————————————————–––––––––––––

    // load GeoJSON from an external file
    $.getJSON("https://api.coord.co/v1/sv/location?latitude=38.995719&longitude=-77.038405&radius_km=100&access_key=lo_qtNC8fHHmJOTkvZnPSv3-aWFdker4UEn5z4LGqzU", function (data) {
        // add GeoJSON layer to the map once the file is loaded
        L.geoJson(data).addTo(mymap);
    });
    var mymap = L.map("mapid").setView([38.9072, -77.0369], 13);
    L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken: "pk.eyJ1Ijoibm9taW5iIiwiYSI6ImNqbTk4enhqdTBkazEzcG4xMnF2d2hhMHUifQ.FR4IlfSjVgCaXe4MtqsomQ"
    }).addTo(mymap);
    var marker = L.marker([38.8963, -77.045]).addTo(mymap);
    var marker = L.marker([38.9008, -77.047]).addTo(mymap);
    var marker = L.marker([38.9022212, -77.059219]).addTo(mymap);
    var marker = L.marker([38.9008, -77.047]).addTo(mymap);

    // https://www.mapbox.com/mapbox-gl-js/example/live-geojson/ //

    var url = "https://api.coord.co/v1/sv/location?latitude=38.995719&longitude=-77.038405&radius_km=100&access_key=lo_qtNC8fHHmJOTkvZnPSv3-aWFdker4UEn5z4LGqzU";
    mymap.on("load", function () {
        window.setInterval(function () {
            map.getSource("bike").setData(url);
        }, 2000);

        map.addSource("bike", { type: "geojson", data: url });
        map.addLayer({
            "id": "bike",
            "type": "symbol",
            "source": "bike",
            "layout": {
            "icon-image": "rocket-15"
            }
        });
    });

function geocode() {
    // var div = $("#top-container");
    div.animate({opacity: '0.25'});
    // Input of location from User
    // If then Statement.  If Input of Current Location is empty, then run the following, if not Alert the user. Reset the Field first before proceeding.
    var location = $("#current-location").val();
    // Turn location into City and State.
    axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
            params: {
                address: location,
                key: "AIzaSyArFwgB2r5o-zqLXF_b_nS9JXyg_78zArA"
            }
        })
        .then(function (response) {
            console.log("GoogleAPI:");
            console.log(response);

            var latResult = response.data.results[0].geometry.location.lat;
            console.log(latResult);
            // latResult = lngLatArray[0];


            var lngResult = response.data.results[0].geometry.location.lng;
            console.log(lngResult);
            // lngResult = lngLatArray[1];
            tempInput(latResult, lngResult);

        })
        .catch(function (error) {
            console.log(error);
        })

}