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

let bar1 = new BarChart('div#bar1', 800, 750);

let citiesElevation = cities.map(d=>[d.city, d.alt]);

bar1.render(citiesElevation);

let data = [['a',12],['b',18],['c',25],['d',3]];
data.map(d=>d[0]); // ['a','b','c','d']
console.log(d3.min(data, d=>d[1])); // 3
console.log(d3.max(data, d=>d[1])); // 25
console.log(d3.extent(data, d=>d[1])); // [3,25]