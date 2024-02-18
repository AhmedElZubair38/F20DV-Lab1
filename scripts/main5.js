// lab 1 , tutorial 5, task

'use strict';

let data = [[80, 50],[120, 120], [160, 140],[200, 90], [240, 150],[280, 50]]; 

// Assuming your SVG dimensions are set to 300x200 pixels
let svgWidth = 400, svgHeight = 450;

// Adjust these margins to give some padding inside the SVG
let margin = { top: 20, right: 20, bottom: 30, left: 40 };

let xScale = d3.scaleLinear()
  .domain(d3.extent(data, d => d[0])) // use the extent of the x values in your data
  .range([margin.left, svgWidth - margin.right]);

let yScale = d3.scaleLinear()
  .domain([0, d3.max(data, d => d[1])]) // use 0 to max of the y values in your data
  .range([svgHeight - margin.bottom, margin.top]); // flip the y-axis

// creating the line generator 
let lineGen = d3.line().curve(d3.curveCardinal).x(d=>xScale(d[0])).y(d=>yScale(d[1])); 

// creating a path
let chart = d3.select('body').append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

// Add the x-axis
chart.append('g')
  .attr('transform', `translate(0,${svgHeight - margin.bottom})`)
  .call(d3.axisBottom(xScale));

// Add the y-axis
chart.append('g')
  .attr('transform', `translate(${margin.left},0)`)
  .call(d3.axisLeft(yScale));


// drawing with the line generator 
let line = chart.append('path').datum(data).attr('fill', 'none').attr('stroke', 'coral').attr('stroke-width', 3).attr('d', lineGen);

// draw the dots
let dots = chart.selectAll('circle').data(data).enter().append('circle').attr('cx', d=>xScale(d[0])).attr('cy', d=>yScale(d[1])).attr('r', 5).attr('fill', 'coral');