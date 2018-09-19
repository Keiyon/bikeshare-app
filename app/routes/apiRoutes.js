// ______________________________________________________________________________
// DATA
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Madeline 9/18: We may not need this part but leaving it in, this is where
// we would put data stored in .js files
// ______________________________________________________________________________
// ROUTING
// -----–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Madeline 9/18: Here is where we will put the logic to retrive the users location
// based on their input in the form
// then we will run through each of the different bikeshare APIs and see which has
// the closest x# of bikes for the user and friends to ride. Copied below in from
// liri app as a reference of how to do the url calls, but instead of changing the
// url with user input, we will assign each user input (location, riders) from the
// form in here to variables, and then the call will be ~ie for jsonData[0].data.bikes[i]
// if lon,lat is x radius from user lat/long, && 'is_reserved' === 0 && is_disabled === 0,
// then plot the bike on the map

// module.exports = function(app) {}
// function concertThis() {
//     var band = process.argv[3];
//     var queryUrl = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=" + bit;
//     request(queryUrl, function (error, response, body){
//         if (!error && response.statusCode === 200){
//             var jsonData = JSON.parse(body);
//             console.log("Venue: " + jsonData[0].venue.name);
//             console.log("Location: " + jsonData[0].venue.city);
//             console.log("Date: " + moment(jsonData[0].datetime).format('MM/DD/YYYY'));
            
//         }
//     })
// 