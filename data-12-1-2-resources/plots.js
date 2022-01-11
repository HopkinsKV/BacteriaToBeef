// Note: plotArea is defined as div in index.html
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


Drinks: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"]