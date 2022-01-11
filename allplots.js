// 12-1
// Note: plotArea is defined as div in index.html
//
// Line Chart
Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// Bar Chart
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };
 Plotly.newPlot("plotArea", [trace]);

// Layout Details
var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
Plotly.newPlot("plotArea", [trace], layout);

// Scatter Chart - need to add modes lines, markers, lines+markers
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    mode: "lines+markers",
    type: "scatter"
 };
 Plotly.newPlot("plotArea", [trace]);


 // Pie charts do not have x and y keys. Instead use labels and values.
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
var data = [trace];
var layout = {
    title: "'Pie' Chart",
};
Plotly.newPlot("plotArea", data, layout);
// 
//
//
//
// 12-2 
// using data.js
//
console.log(cityGrowths);

// Sort cities
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();
// Select top 5
var topFiveCities = sortedCities.slice(0,5);
// Create new arrays for top five names and growths
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// from Canvas - gives all cities
// var topFiveCityNames = cityGrowths.map(city => city.City);
// var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

// Create bar chart with plotly
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);