const FIRST_NAME = "";
let myName = getMyfirstName();
function getMyfirstName() {

  const FIRST_NAME = "Pallavi";

  return FIRST_NAME;
}
// find that java interpreter language
// then why it invoke that getMyFirstName
// console.log(myName);
// console.log(FIRST_NAME);
// mutuable and immutable7
let myFullName = getMyFullName();
let myMistakeFullName = getMyFullName('pallavi');
let myAddition = addition(integerOne = 5, integerTwo = 3);
let mySubtraction = subtraction(integerOne = 6, integerTwo = 3);

function getMyFullName(firstName = '', lastName = '') {
  // firstName="Pallavi";
  // lastName="Soni";
  return firstName + " " + lastName;
}
function addition(integerOne, integerTwo) {


  return integerOne + integerTwo;
}
function subtraction(integerOne, integerTwo) {


  return integerOne - integerTwo;
}
//  console.log(myFullName);
//  console.log(myAddition);
//  console.log(mySubtraction);
//  console.log(myMistakeFullName)

//  challange 1:- In this pattern can't ignore optional parameters.
// challenge 2:- I can't pass dynamic as much as needed parameters.
let mult = myFunction(5);
function myFunction(x, y) {

  if (y == undefined) {
    y = 5
  }
  return x * y
}

// console.log(mult); //10

let substract = function (a, b) {
  return a - b
}
console.log(substract(5, 3)); //2

let multiply = (a, b) => a * b;

// console.log(multiply(2,5)); //10

function lead(name = 'User') {
  return `hello, ${name}!`;
}

//  console.log(lead());
//  console.log(lead('pallavi'));

function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
const user = {
  firstName: 'Pallavi',
  lastName: 'Soni',
  age: 19
};
console.log(getFullName(user));

function square(x) {
  return x * x;
}
console.log(square(4));

function applyOperation(a, b, operation) {
  return operation(a, b);
}
let add = (x, y) => x + y;
let multi = (x, y) => x * y;

console.log(applyOperation(3, 4, add));
console.log(applyOperation(3, 4, multi));

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}
try {
  console.log(divide(4, 2));
  console.log(divide(4, 0));
}
catch (error) {
  console.error(error.message);

}
finally {
  console.log('clean actions go here');
}
// mutli statement arrow 
const calculateTotal = (price, quantity) => {
  let subtotal = price * quantity;
  let tax = subtotal * 0.1;
  let total = subtotal + tax;
  return total
};
console.log(calculateTotal(50, 2));

//this keyword

let x = myFunction();
function myFunction() {
  return this;
}
console.log(x);


//function as method

let myObj = {
  firstName: "Pallavi",
  lastName: "Soni",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
console.log(myObj.fullName());




let person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
let person1 = {
  firstName: "pallavi",
  lastName: "soni"
}

let person2 = {
  firstName: "payal",
  lastName: "singh"
}
//  console.log(person.fullName.call(person1,person2));
//  console.log(person.fullName.call(person2));

//function call with arguments
let person3 = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
let person4 = {
  firstName: "pallavi",
  lastName: "soni"
}

let person5 = {
  firstName: "payal",
  lastName: "singh"
}
console.log(person3.fullName.call(person4, 'jaipur', 'India'));
console.log(person3.fullName.call(person5, 'Delhi', 'India'));
//function apply

let users = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + "," + country;
  }
}
let user1 = {
  firstName: 'Akshita',
  lastName: 'Medda'
}
console.log(users.fullName.apply(user1, ['M.p', 'India']));

 //simple arrow function
  
 let ud = () => 'Hello world';
 console.log(ud());


//Arrow function with arguments
 
let add1= (a,b) => a+b;
console.log(add1(2,3));

//single parameter 

let cube = x => x*x*x;
console.log(cube(3));

//Returning an object


let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(doubled);

// rest parameter

function showArgs(...args) {
  console.log(Array.isArray(args)); 
}
showArgs(1, 2, 3); 
showArgs('a', 'b', 'c'); 
showArgs(); 

// destructing with rest parameter

function showFirstAndRest([first, ...rest]) {
  console.log(first);
  console.log(rest);
}

showFirstAndRest([1, 2, 3, 4]); 
showFirstAndRest(['a', 'b', 'c']); 
showFirstAndRest([true, false, true]); 
showFirstAndRest([42]); 
showFirstAndRest([]); 

//others example of rest parameter

function middleware(...funcs) {
  return function(...args) {
    return funcs.reduce((acc, func) => func(...acc), args);
  };
}

const add2 = (x, y) => [x + y];
const square2 = (z) => [z * z];
const log = (result) => (console.log(result), result);

const combined = middleware(add2, square2, log);
combined(2, 3); 

// high order 

let compose = (f,g) => x => f(g(x));

let sum1 = x => x+2;
let multip = x=> x*3;

let addThenMulyiply = compose(multip,sum1);
console.log(addThenMulyiply(4));

function adds(x) {
  return function(y) {
    return x + y;
  };
}

const add3 = adds(3);
const result = add3(5); 




