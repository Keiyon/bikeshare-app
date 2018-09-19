$(document).ready(function () {

    $("#button").on("click", function (event) {
        event.preventDefault();
        findBikes();
    });

});

function findBike (lat, lon) {

    var capitalShare = $("#capitalShareSearch").val().trim();
    console.log(capitalShare);
    var queryURL = "https://gbfs.capitalbikeshare.com/gbfs/en/station_status.json";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

        $(".???????").empty();

        $(".station_id").text("Station ID: " + response[0].data[0].stations[0].station_id);
        $(".num_bikes_available").text("Number of Bikes Available: " + response[0].data[0].stations[0].num_bikes_available);
        $(".num_ebikes_available").text("Number of E-Bikes Available: " + response[0].data[0].stations[0].num_ebikes_available);
        $(".num_docks_available").text("Number of Docks Available: " + response[0].data[0].stations[0].num_docks_available);

        console.log(station_id);
        console.log(num_bikes_available);
        console.log(num_ebikes_available);
        console.log(num_docks_available);

    });

}