


// var location = $("#").val();
function geocode() {
var location = "washington,dc";
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
       

    })
    .catch(function (error) {
        console.log(error);
    })
};

geocode();