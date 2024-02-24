'use strict';

// in file main.js
import BarChart from './BarChart.js';
//import ScatterPlot from './ScatterPlot.js';

let cities = [
    
    {city: 'Edinburgh', pop: 506000, area: 119, alt: 47},
    {city: 'Dubai', pop: 3604000, area: 1610, alt: 5},
    {city: 'Putrajaya', pop: 109000, area: 49, alt: 38},
    {city: 'Qingdao', pop: 10071000, area: 11228, alt: 25},
    {city: 'Lagos', pop: 8048000, area: 1171, alt: 41},
    {city: 'Ottawa', pop: 1017000, area: 2790, alt: 70}
]

let bar = new BarChart('div#bar', 750, 750, [10, 40, 45, 40]);

//let scatter1 = new ScatterPlot('div#scatter1', 750, 750, [10, 40, 45, 40]);

let citiesElevation = cities.map(d=>[d.city, d.alt]);

bar.render(citiesElevation);

//scatter1.render(citiesElevation);












// ----------------------------






let movieDataFull = await d3.csv('data/movies_mock.csv', d => { return{

        year:+d.release_year,
        revenues:parseFloat(d.revenues),
        genre:d.genre

}});

let highlightYear = (e,d)=>{
    let year = d[0];
    bar1.highlightBars([year]);
    bar2.highlightBars([year]);
}

let rmvHighlightYear = ()=>{
    bar1.highlightBars();
    bar2.highlightBars();
}
    
let bar1 = new BarChart('div#bar1', 800, 500, [10,40,65,10]);
let bar2 = new BarChart('div#bar2', 800, 500, [10,40,65,10]);
let bar3 = new BarChart('div#bar3', 800, 500, [10,40,65,10]);

let sortYears = (a,b)=>a[0]-b[0];
let yearRevenues = d3.flatRollup(movieDataFull, v=>d3.sum(v, d=>d.revenues), d=>d.year).sort(sortYears);
let yearCount = d3.flatRollup(movieDataFull, v=>v.length, d=>d.year).sort(sortYears);
let genreCount = d3.flatRollup(movieDataFull, v=>v.length, d=>d.genre);

let filterGenre = (e,d)=>{
    let genre = d[0];
    // filter by year randomly, only to show appearing/disappearing bars
    let y = d3.randomInt(2010,2020)();
    let yearFilter = movieDataFull.filter(d=>d.year !== y)
    // filtering by genre (+years to show disappearing bars)
    let filteredData = yearFilter.filter(d=>d.genre===genre);
    let yearRevenuesFiltered = d3.flatRollup(filteredData, v=>d3.sum(v, d=>d.revenues), d=>d.year).sort((a,b)=>a[0]-b[0]);
    let yearCountFiltered = d3.flatRollup(filteredData, v=>v.length, d=>d.year).sort((a,b)=>a[0]-b[0]);
    bar1.setLabels('Year', `Revenues ${genre}`).render(yearRevenuesFiltered);
    bar2.setLabels('Year', `Number of Releases ${genre}`).render(yearCountFiltered);
    bar3.highlightBars([genre], 'selected')
}

bar1
    .setLabels('Year', 'Total Revenues')
    .setBarHover(highlightYear)
    .setBarOut(rmvHighlightYear)
    .render(yearRevenues);
bar2
    .setLabels('Year', 'Total Number of Releases')
    .setBarHover(highlightYear)
    .setBarOut(rmvHighlightYear)
    .render(yearCount);

bar3.setLabels('Genre', 'Total Number of Releases').setBarClick(filterGenre).render(genreCount);