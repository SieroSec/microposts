// common JS module syntax
//const person = require('./mymodule1');

//ES2015 syntax
//import { person, sayHello } from './mymodule2';
// console.log(person.name);
// console.log(sayHello());

// another format
// import * as mod from './mymodule2';
// console.log(mod.person.name);
// console.log(mod.sayHello());

import greeting from './mymodule2';
console.log(greeting);

// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData('https://jsonplaceholder.typicode.com/posts');

