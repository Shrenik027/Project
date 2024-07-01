//--
//!--Syntax of function declaration
//--

//hello
function sayHello() {
  //Logic goes here
  //write js logic
  console.log("hello");
}

//greeting
// function greetings() {
//   console.log("Habibi");
// }

//show date

function showdate() {
  const currentDate = new Date();
  console.log(`Todays date is ${currentDate}`);
}

//Calling the function

// showdate();
// sayHello();
// greetings();

//--
//!-- Function Expression
//--

const hello = function () {
  console.log("Hello World");
};

//invoke

//hello();

const greetings = function () {
  console.log("Welcome");
};

//invoke

//greetings();

//Even or odd

const num = function () {
  const number = 5;
  if (number % 2 === 0) {
    console.log("Its even");
  } else {
    console.log("its Odd");
  }
};

//num();

//--
//!-- Anonymous Functions
//--

// function(){
//   console.log('Welcome');
// }

//--
//!--Immediately Invoked Function Expression [IIFE]
//--

(function () {
  console.log("welcome");
})();

//calculating Square of a number

(function () {
  const num = 5;
  const square = num * num;
  console.log(square);
})();
