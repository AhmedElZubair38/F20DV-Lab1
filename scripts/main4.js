// lab 2 , tutorial 7, task

'use strict';

let data = await d3.csv("data/movies_mock.csv", (d) => { 

    const monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const releaseMonth = monthNames[ parseInt(d.release_month)] || "Invalid Month";

    const profit = parseFloat(d.revenues) - parseFloat(d.budget);

    // for each row d, return a new object 
    return { 
        release_date: +d.release_year, 
        release_month: releaseMonth, 
        genre: d.genre, 
        director: d.director, 
        budget: +d.budget, 
        revenues: +d.revenues,
        ratings_A: +d.ratings_A,
        ratings_B: +d.ratings_B,
        ratings_C: +d.ratings_C,
        profit: profit,
        positive_profit: profit > 0
    }; 
});

console.log(data);

// question 1: What are the unique genres of movie?
let query1 = data.map(d => d.genre);
let query1x = new Set(query1);
console.log("question 1 answer: ", query1x);

// question 2: How many unique directors are there?
let query2 = data.map(d => d.director);
let query2x = new Set(query2).size;
console.log("question 2 answer: ", query2x);

// question 3: What’s the total sum of revenue in the industry?
let query3 = data.reduce((acc, d) =>  d.revenues + acc, 0);
console.log("question 3 answer: ", query3);

// question 4: How many movies were released between 2012 and 2014 (included)?
let query4 = data.filter(d => d.release_date >= 2012 && d.release_date <= 2014).map(d => d.release_date).length;
console.log("question 4 answer: ", query4);

// question 5: What is the average rating on website A for comedy movies?
let query5 = data.map(d => d.ratings_A);
let sum = data.reduce((acc, d) => d.ratings_A + acc, 0);
let length = query5.length;
let avg = sum/length;
console.log("question 5 answer: ", avg.toFixed(2));

// question 6: Has the industry made more profit before 2015 (included) or after?

// profit made before 2015
let query6a = data.filter(d => d.release_date <= 2015).reduce((acc, d) => d.profit + acc, 0);
console.log("profit made before 2015", query6a);

// profit made after 2015
let query6b = data.filter(d => d.release_date > 2015).reduce((acc, d) => d.profit + acc, 0);
console.log("profit made after 2015", query6b);

// conclusion
if (query6a > query6b) {
    console.log("industry made more profit before 2015")
} else console.log("industry made more profit after 2015")

// question 7: What’s the average budget of drama movies with a rating above 70% on website C?
