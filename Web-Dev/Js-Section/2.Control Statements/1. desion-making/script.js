//! IF-Else

let age = 16;

if (age >= 16) {
  // console.log("You are eligible to drive");
} else if (age >= 18) {
  // console.log("you are eligible to vote");
} else {
  // console.log("you are tooo younge");
}

//! Switch Case
const day = 4;
let dayname;
switch (day) {
  case 1:
    dayname = "Monday";
    break;
  case 2:
    dayname = "Tuesday";
    break;
  case 3:
    dayname = "Wednesday";
    break;
  default:
    dayname = "holiday";
}
console.log(dayname);
