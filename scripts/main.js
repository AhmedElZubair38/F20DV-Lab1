'use strict';

// let barContainer = d3.select('div#bar1');

// let barSvg = barContainer.append('svg')
//     .attr('width', 800)
//     .attr('height', 600)
//     .classed('barchart', true);

// let cities = [
//     {city: 'Edinburgh', pop: 506000, area: 119, alt: 47},
//     {city: 'Dubai', pop: 3604000, area: 1610, alt: 5},
//     {city: 'Putrajaya', pop: 109000, area: 49, alt: 38},
//     {city: 'Qingdao', pop: 10071000, area: 11228, alt: 25},
//     {city: 'Lagos', pop: 8048000, area: 1171, alt: 41},
//     {city: 'Ottawa', pop: 1017000, area: 2790, alt: 70}
// ]

// let barGroup = barSvg.append('g');

// let bars = barGroup.selectAll('rect.bar')
//     .data(cities, d=>d.city)
//     .join('rect')
//     .classed('bar', true)
//     .attr('x', (d,i)=>i*40+5)
//     .attr('y', d => 600 - d.alt * 10)
//     .attr('width', 40)
//     .attr('height', d=>d.alt*10)
//     .style('fill', d=>d.pop<1000000?'#ba4a53':null)
//     .style('stroke', d=>d.pop<1000000?'#381619':null);

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

// let bar1 = new BarChart('div#bar1', 800, 750);

let bar1 = new BarChart('div#bar1', 700, 700, [10, 40, 45, 40]);

let citiesElevation = cities.map(d=>[d.city, d.alt]);

bar1.render(citiesElevation);

// let data = [['a',12],['b',18],['c',25],['d',3]];
// data.map(d=>d[0]); // ['a','b','c','d']
// console.log(d3.min(data, d=>d[1])); // 3
// console.log(d3.max(data, d=>d[1])); // 25
// console.log(d3.extent(data, d=>d[1])); // [3,25]
// console.log(data.map(d=>d[1]).reverse()); // [3,25,18,12]

// let mySelection = d3.select("div#bar1");
// let s1 = d3.scaleLinear([0,500],[0,400]);
// let axis = d3.axisBottom(s1);
// mySelection.call(axis);

// let s2 = d3.scalePoint(['A','B','C','D','F','E'],[0,400]);
// let axis2 = d3.axisRight(s2);
// mySelection.call(axis2);

// let s3 = d3.scaleLog([1,1000], [0,400]);
// let axis3 = d3.axisLeft(s3);
// mySelection.call(axis3);

// let dates = [new Date(2016, 0, 1), new Date(2022, 0, 1)];
// let dateDomain = d3.extent(dates);
// let s4 = d3.scaleTime().domain(dateDomain).range([0, 400]);
// let axis4 = d3.axisTop(s4);

// mySelection.append('svg')
// .attr("width", 500) // Adjust the width based on your layout
// .attr("height", 50) // Adjust the height based on your layout
// .append("g")
// .attr("transform", "translate(20, 30)")
// .call(axis4);

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





