const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// code to retrieve full_name of Vandenberg AFB.
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
// lat and long of VAFB
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));
// using map() to print just the lat/long of each. 
// in .map the first arg is the element itself(arbitrary name), the second arg is the index (also arbitrary)
d3.json(url).then(spaceXResults => spaceXResults.map((_receivedData, i) => 
console.log((spaceXResults[i].location.latitude) + ', ' + (spaceXResults[i].location.longitude))));