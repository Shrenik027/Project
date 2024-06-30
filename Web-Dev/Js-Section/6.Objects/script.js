//--
//!-- Creating objects using  Object Literals
//--

//!Define an object to represent a book in a book store
//title
//author
//price
//available or not
//pages

const book = {
  title: "Harry Potter",
  author: "J.K Rowling",
  available: true,
  price: 9.99,
};
// console.log(book);

//!Accessing object properties using dot notation

// const booktitle = book.title;

// console.log(booktitle);
// console.log(book.price);

//!Accessing object properties using Bracket notation

// const Booktitle = book["title"];
// console.log(Booktitle);
// console.log(book["price"]);

//properties with speacial Characters

const person = {
  Firstname: "Shrenik",
  lastname: "Dubal",
};
//console.log(person["Firstname"]); //not possible with .

// Using Expressions

const task = {
  description: "Finish Homework",
  isCompleted: false,
};

const query = "isCom" + "pleted";

//console.log(task[query]);

//--
//!-- Adding Properties to objects
//--

//Add user role

const userprofile = {
  username: "SHrenik",
  email: "shrenik9477@gmail.com",
};

//userprofile.role = "admin";

userprofile["role"] = "admin";
// console.log(userprofile);

//Adding properties with speacial Characters

const book1 = {
  title: "Harry Potter",
  //"Publication year": 2024, // Space is not allowed so put it in quotes
};

book1["Publication year"] = 2025;
// console.log(book1);

//Adding Nested Properties

const emp = {
  name: "Shrenik",
  department: "HR",
};
//add adderess
emp.adderess = {
  city: "Karad",
  state: "Maharashtra",
};
console.log(emp.adderess.city);
