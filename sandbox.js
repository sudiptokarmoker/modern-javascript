//let email = "sudiptokarmoker@gmail.com";
// string index
//console.log(email.indexOf('@'));
const pi = 3.14;
let radious = 10;
//console.log(10 % 3); // output 1
// order of operation B I D M A S
//let result = 5 * (10 - 3) ** 2;
//console.log(result);
// let likes = 10;
//likes += 10; // 20
//likes -= 5; // 5
//likes *= 2; // 20 // likes = likes * 2 
//likes = console.log(likes);
//console.log(10 / 'hello'); // NaN
//let result = 'the blog has ' + likes + ' likes';
//console.log(result);
const title = 'Best reads of 2021';
const author = 'Mario';
const likes = 30;
// concatation way
//let result = 'the blog called ' + title + ' by ' + author + ' has' + likes + ' likes';
// template string
//let result = `the blog called ${title} by  ${author} has ${likes} likes`;
//console.log(result); //the blog called Best reads of 2021 by  Mario has 30 likes
// creating html template
// let html = `
//     <h2>${title}</h2>
//     <p>${author}</p>
//     <span>${likes}</span>
// `;
// console.log(html);
let ninja = ['shaun', 'ryn', 'chun-li'];
// console.log(ninja); // (3) ["shaun", "ryn", "chun-li"]
//ninja[1] = 'kane';
//console.log(ninja); //["shaun", "kane", "chun-li"]

//let age = [20, 25, 30, 50, 45];
//console.log(age); //(5) [20, 25, 30, 50, 45]

let random = ['apple', 'orange', 10, 'bananna'];
//console.log(random); //(4) ["apple", "orange", 10, "bananna"]
//console.log(random.length); // 4

// array method
//let result = ninja.join('-'); // shaun-ryn-chun-li
//let result = ninja.indexOf('chun-li'); // 2
//let result = ninja.concat(['crystal', 'earth']); //(5) ["shaun", "ryn", "chun-li", "crystal", "earth"]
let result = ninja.push('crystal'); // (4) ["shaun", "ryn", "chun-li", "crystal"]
let popItem = ninja.pop();
console.log(popItem);