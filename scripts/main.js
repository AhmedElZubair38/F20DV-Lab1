'use strict';

// in file main.js
import BarChart from './BarChart.js';
import ScatterPlot from './ScatterPlot.js';

let cities = [
    
    {city: 'Edinburgh', pop: 506000, area: 119, alt: 47},
    {city: 'Dubai', pop: 3604000, area: 1610, alt: 5},
    {city: 'Putrajaya', pop: 109000, area: 49, alt: 38},
    {city: 'Qingdao', pop: 10071000, area: 11228, alt: 25},
    {city: 'Lagos', pop: 8048000, area: 1171, alt: 41},
    {city: 'Ottawa', pop: 1017000, area: 2790, alt: 70}
]

let bar1 = new BarChart('div#bar1', 750, 750, [10, 40, 45, 40]);

let scatter1 = new ScatterPlot('div#scatter1', 750, 750, [10, 40, 45, 40]);

let citiesElevation = cities.map(d=>[d.city, d.alt]);

bar1.render(citiesElevation);

scatter1.render(citiesElevation);