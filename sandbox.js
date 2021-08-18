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
const title = "Best reads of 2021";
const author = "Mario";
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
let ninja = ["shaun", "ryn", "chun-li"];
// console.log(ninja); // (3) ["shaun", "ryn", "chun-li"]
//ninja[1] = 'kane';
//console.log(ninja); //["shaun", "kane", "chun-li"]

//let age = [20, 25, 30, 50, 45];
//console.log(age); //(5) [20, 25, 30, 50, 45]

let random = ["apple", "orange", 10, "bananna"];
//console.log(random); //(4) ["apple", "orange", 10, "bananna"]
//console.log(random.length); // 4

// array method
//let result = ninja.join('-'); // shaun-ryn-chun-li
//let result = ninja.indexOf('chun-li'); // 2
//let result = ninja.concat(['crystal', 'earth']); //(5) ["shaun", "ryn", "chun-li", "crystal", "earth"]
//let result = ninja.push('crystal'); // (4) ["shaun", "ryn", "chun-li", "crystal"]
//let popItem = ninja.pop();
//console.log(popItem);

// topics : undefind / null
//let age;
//console.log(age, age + 3, `this is my age ${age}`); //undefined NaN "this is my age undefined"

// topics : true false / boolean
//console.log(true, false, "true", "false");

//let email = 'sudiptokarmkoker@gmail.com';
//let result = email.includes('@');
// let names = ['jack', 'john', 'stephen'];
// let result = names.includes('john');

//console.log(result); // true
// topics : comparisan operator
// let age = 25;

// console.log(age === 25);
// console.log(age !== 25);
// console.log(age === 25);
// console.log(age === 25);

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 25);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 20);

// topics : type conversion
//let score = '100';
//console.log(score + 1);
// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);
//let result = Number('hello');
//console.log(result); // NaN
//let result = String(50);
// let result = Boolean('abcd');
// console.log(result, typeof result); //true "boolean"

// topics : loop
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
let names = ["john", "smith", "adam", "tomas"];
// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }
// topics : while loop
let i = 3;
// while(i < 5){
//     console.log(i);
//     i++;
// }
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }
// console.log("end of loops");
// topics : do while
// do {
//   console.log("val of i is " + i);
//   i++;
// } while (i < 5);

// topics : if else
const age = 25;
if (age > 20) {
  console.log("you are over 20 years old");
}

// const fruits = ['apple', 'orange', 'bananna'];
// if(fruits.length > 2){
//     console.log("much food there"); //much food there
// }

// const password = "p@ss";
// if (password.length > 12 && password.includes("@")) {
//   console.log("you have used strong password!");
// } else if (password.length > 8 || password.includes("@") && password.length >= 5) {
//   console.log("your password is also strong");
// } else {
//   console.log("password not so good");
// }

// switch statement
// variable and block scope

// const calArea = function(radious){
//   return 3.14 * radious**2;
// }

// const calArea = (radious) => {
//   return 3.14 * radious**2;
// }

// const calArea = radious => 3.14 * radious**2;

// const area = calArea(5);
// console.log('area is:', area);

// topics : call back function
// const myFunc = (callbackFunc) => {
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc(function (value) {
//   console.log(value);
// });

function myDisplayer(sum) {
  //document.getElementById("demo").innerHTML = some;
  console.log("total sum : " + sum);
}

function callBackFunctionTwo(value) {
  console.log("Value from call back function two : " + value);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
myCalculator(6, 6, callBackFunctionTwo);
