'use strict'; // to prevent us from overwriting important variables
const c = 'constant'; // a constant value, assignment to c is no longer allowed
let v = 'variable'; // a primitive variable
let a = [1, 2, 3, false]; // an array
let o = { // an object
'key1': 1,
'key2': 'something'
};

console.log(c);
console.log(v);
console.log(a);
console.log(o);
console.log(o['key1']);
console.log(o.key2);

function one(a, b) {
    return a+b;
}

let two = function(a, b) {
    return a+b;
}

let three = (a,b) => a+b;

import {GCD} from './math.js';
console.log(GCD(84, 52));

import {factorial as myFactorial} from './math.js';
console.log(myFactorial(5));

import Book from './Book.js';
const shakespeare = new Book('Hamlet', 'William Shakespeare', true);
shakespeare.borrow();
shakespeare.returnBook();