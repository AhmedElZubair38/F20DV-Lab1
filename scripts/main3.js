// lab 2, tutorial 6, practice

let myMap = new Map([[1,'one'],[2,'two'],[3,'three']]);
let mySet = new Set([1,2,3,4,1,3]);
let myArray1 = Array.from(myMap);
let myArray2 = Array.from(mySet);
console.log(myArray1);
console.log(myArray2);

let myObject = {'A': 1, 'B':2, 'C':3, 'D':4, 'E':5};
let keys = Object.keys(myObject);
let values = Object.values(myObject);
let entries = Object.entries(myObject);
console.log(keys);
console.log(values);
console.log(entries);

let mapper = new Map([[1,['one', 'wahid', 'uno']],[2,'two', 'ethnayn', 'dos'],[3,'three', 'thalaatha', 'tres']]);
console.log("mapper here", mapper);

let data = [{name:'Pete',age:26},{name:'Johanna',age:27},{name:'Jamie',age:38},{name:'Aleksy',age:29},{name:'Akira',age:25},{name:'Adesina',age:32},{name:'Lorenzo',age:30},{name:'Julien',age:26}];

let newData = data.filter(person => person.age > 25  && person.age < 35);
let getNames = newData.map(d=>d.name);
let getJ = getNames.filter(person => person.startsWith('J'));
let getLength = getJ.map(d=>d.length);
console.log("length", getLength);

let query = data.filter(person => person.age > 25  && person.age < 35).map(d=>d.name).filter(person => person.startsWith('J')).map(d=>d.length);
console.log("length from full query", query);

let avg = query.reduce((a,b)=>a+b, 0) / query.length;
console.log("average here", avg)