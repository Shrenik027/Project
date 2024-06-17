//if example:
let instock = true;
if (instock) {
  // console.log("item is in stock");
}

let age = 19;

if (age >= 19) {
  console.log("You are eligible");
}
let loginstatus = 450;

if (loginstatus === true) {
  console.log("Welcome Back");
} else if (loginstatus === false) {
  console.log("plz login");
} else if (loginstatus === 0) {
  console.log("0");
} else {
  console.log("1");
}

let dayno = 5;

switch (dayno) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("saturday");
    break;

  default:
    console.log("Enter Valid Day no.");
}
