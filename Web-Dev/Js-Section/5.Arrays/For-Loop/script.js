//----
//! FOR LOOP
//----

// numbers 1-5

for (let i = 0; i <= 5; i++) {
  //console.log(i);
}

//Looping through array to print its elements

const arr = ["apple", "Banana", "Guava", "Kiwa"];

for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
}

//Using Break and Continue

for (let i = 0; i <= 10; i++) {
  if (i === 8) {
    break;
  }
  //console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i === 4) {
    continue;
  }
  //console.log(i);
}

//reverse

for (let i = 10; i > 0; i--) {
  //console.log(i);
}

//----
//! FOR Each LOOP
//----

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Numbers.forEach(function (element, index, array) {
//console.log("Element:", element, "Index:", index);
//console.log("array", array);
// });

//Using forEach to sum the elements

// let sum = 0;
// Numbers.forEach(function (num) {
//YOu can give any name to arguments here element --> num
//   sum += num;
// });

//console.log(sum);

//Modifying Array Elements using ForEach

//const squares = [];

// Numbers.forEach(function (num) {
//   squares.push(num * num);
// });

//console.log(Numbers);
//console.log(squares);

//! MAPPING .Map()

// const newNoarr = Numbers.map(function (num, idx, arr) {
//   return num * 10; //If you dont return the array will be filled with undefined
// });

// console.log(newNoarr);
// console.log(Numbers);

// Using map to convert an array of strings to uppercase

const fruits = ["apple", "pear", "mango"];

const newfruits = fruits.map(function (word) {
  return word.toUpperCase();
});

console.log(newfruits);
