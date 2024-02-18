'use strict';

let data = [['a', 2], ['b', 3], ['c', 6]];
let pieGen = d3.pie().padAngle(0.02).sort(null).value(d => d[1]);

let pieData = pieGen(data);

// Define the size of the SVG container
let width = 300, // Width of the SVG
    height = 300; // Height of the SVG, same as width for a circular pie chart

// Create the SVG container
let chart = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g') // Append a 'g' element to center the pie chart
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

// creating an arc generator
let arcGen = d3.arc().innerRadius(width / 4).outerRadius(width / 2 - 5);

// drawing the arcs
let arcs = chart.selectAll('path')
    .data(pieData, d => d.data[0])
    .join('path')
    .attr('fill', 'cadetblue')
    .attr('fill-opacity', 0.8)
    .attr('stroke', 'cadetblue')
    .attr('stroke-width', 2)
    .attr('d', arcGen);
