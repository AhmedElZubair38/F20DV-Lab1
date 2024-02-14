'use strict';

let data = await d3.csv("data/movies_mock.csv", (d) => { 

    const monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const releaseMonth = monthNames[ parseInt(d.release_month)] || "Invalid Month";

    const positiveProfit = parseFloat(d.revenues) - parseFloat(d.budget) > 0;

    // for each row d, return a new object 
    return { 
        release_date: d.release_year, 
        release_month: releaseMonth, 
        genre: d.genre, 
        director: d.director, 
        budget: d.budget, 
        revenues: d.revenues,
        ratings_A: d.ratings_A,
        ratings_B: d.ratings_B,
        ratings_C: d.ratings_C,
        profit: parseFloat(d.revenues) - parseFloat(d.budget),
        positive_profit: positiveProfit
    }; 
});

// print the dataset
console.log(data);

// print number of rows in dataset
console.log(data.length);

// print the first row of the dataset
console.log(data[0]);

// print the revune data column values
console.log(data.map(d => d.positive_profit));
console.log(d3.rollup(data, v => v.length, d => d.positive_profit));

// tutorial 7 