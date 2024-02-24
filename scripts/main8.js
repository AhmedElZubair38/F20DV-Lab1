// lab 3 , tutorial 9, task

'use strict';

function one() {
    
    console.log(0.1+0.2);

}

function two(callback) {
    
console.log('Before callback');
callback();
console.log('After callback');

}

two(one);

function applier(val, cb){ console.log(`Result: ${cb(val)}`); }

applier(3, x=>x**2);
applier(4, x=>x+3);



