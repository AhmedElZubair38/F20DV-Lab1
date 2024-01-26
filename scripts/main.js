'use strict';

// in file main.js
import BarChart from './BarChart.js';

let cities = [
    {city: 'Edinburgh', pop: 506000, area: 119, alt: 47},
    {city: 'Dubai', pop: 3604000, area: 1610, alt: 5},
    {city: 'Putrajaya', pop: 109000, area: 49, alt: 38},
    {city: 'Qingdao', pop: 10071000, area: 11228, alt: 25},
    {city: 'Lagos', pop: 8048000, area: 1171, alt: 41},
    {city: 'Ottawa', pop: 1017000, area: 2790, alt: 70}
]

let bar1 = new BarChart('div#bar1', 700, 700, [10, 40, 45, 40]);

let citiesElevation = cities.map(d=>[d.city, d.alt]);

bar1.render(citiesElevation);














// Create an SVG container for the time bar
let timeBarSvg = d3.select("div#bar2");

// Sample dates for the time bar
let dates = [new Date(2016, 0, 1), new Date(2022, 0, 1)];

// Use d3.extent to get the minimum and maximum dates
let dateDomain = d3.extent(dates);

// Create a time scale with the correct domain
let timeScale = d3.scaleTime().domain(dateDomain).range([0, 500]);

// Create the time axis
let timeAxis = d3.axisBottom(timeScale);

// Append the time axis to the time bar
timeBarSvg.append("g").append("svg")
    .attr("height", 50)
    .attr("width", 900)
    .attr("transform", "translate(0, 30)") // Adjust the translation based on your layout
    .call(timeAxis);





