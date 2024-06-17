//!---------
//!==SINGLE,Double AND CONSTRUCTOR==
//!---------

//Single quotes

const singleQuotestring = "This is a String using single quote";

// console.log(singleQuotestring);

//Double quotes

const doubleQuotestring = "This is a String using double quote";

// console.log(doubleQuotestring);

//Using String Constructor

const stringConstructor = new String("This is string using string constructor");

// console.log(stringConstructor);

//!--------
//!==Templet literals
//!---------

//Basic usage

const greeting = `hello,world`;
// console.log(greeting);

//String Interpolation

const username = "shrenik";
const welcomeMessage = `hello, ${username}! Welcome to Our Website`;

// console.log(welcomeMessage);

//Multiline String

const poem = `
Roses are red,
violets are blue,
bla,
bla,
bla
`;

// console.log(poem);

//Expression evaluation

const price = 10;
const tax = 0.05;
const total = ` The Price: ${price * (1 + tax)}`;

//Escaping Backtics
const stringwithbacktics = `here's a baktick \``;

//Escape Sequence Characters

const quote = 'he said , "hello,World"';
// console.log(quote);

//Newline and tab

const multiline = "Line1\nline2\ttabbed";
// console.log(multiline);

const filepath = "C:\\Programfiles\\apps";
// console.log(filepath);

//Using Template literals

const anotherQuote = `he saild,"That is Awesome"`;

//Unicode characters

const heart = " I \u2764 JavaScript";
// console.log(heart);

//Escape sequence for dolar and curly braces

const dolar = `the syntax for variable is \${Var Name}`;
// console.log(dolar);

//!----
//!==String Concat==
//!----

//using + operator

const firstname = "Shrenik\t";
const lastname = "Dubal";
const fullname = firstname + lastname;

// console.log(fullname);

//using .concat() method

const str1 = "Hello";
const str2 = "World";
const combined = str1.concat(" ", str2);

// console.log(combined);

//using templet literal

const fruit = "apple";
const color = "red";

const sentence = ` The ${fruit} is ${color}`;
// console.log(sentence);

//!----
//!==TOLOWER And TOUPPER case
//!----

//toupper

const string1 = "Shrenik";
const result1 = string1.toUpperCase();
// console.log(result1);

//tolower
const string2 = "SHreNIK";
const result2 = string2.toLocaleLowerCase();
// console.log(result2);

//case-insensitive comparision

const strin1 = "Javascript";
const strin2 = "javascript";

if (strin1.toLocaleLowerCase() === strin2.toLocaleLowerCase()) {
  //  console.log("The strings are equal ignoring the case");
}

//Notes on Non-English characters

const accentedStr = `â, î or ô`;
const yes = accentedStr.toUpperCase();
// console.log(yes);

//!----
//!==String Length
//!----

const mystr = "Hello, World";
const strlen = mystr.length;
// console.log(strlen);

//check length of empty string

const empstr = ""; //0
const emplen = empstr.length;
//console.log(emplen);

//String Validiation

const usrname = "shrenik";
if (usrname.length >= 6) {
  //console.log("valid username");
} else {
  //console.log("invalid username");
}

//!----
//!==Slice()==
//!----

//Basic use

const greeting1 = "Hello, world";
const extracted = greeting1.slice(7, 12);
// console.log(extracted);

const text = "Hello, World";
const result3 = text.slice(7, 9);
// console.log(result3);

//using negative indices

const phrase = "Hello World";
const endingText = phrase.slice(-6);
// console.log(endingText);

//slicing betwn negative indices

const sentence1 = "hello World";
const result4 = sentence1.slice(-6, -1);
console.log(result4);

//!----
//!==String Split==
//!----

//simple split by space

const mysentence = "Hello, World, Name";
const words = mysentence.split(",");

//limit No of split
const fruits = "apple,banana,pear";
const limitedFruits = fruits.split(",", 2);

//split by multiple characters
const complextext = "appple:banana;pear";
const mixedfruits = complextext.split(/[:;]/);

//split into characters
const word = "SHRENIK";
const letter = word.split("");

//!----
//!==String Indexof==
//!----

//basic usage

const sentences = "Hello,World";
const index = sentences.indexOf("Hello");

//!----
//!==String Trim==
//!----

//Trimming user input

const userinput = "    shrenik@gmail.com  ";
const trimmed = userinput.trim();

//Removing line breaks

const stringgsWithBreaks = "\n\t Hello, World";
const trim = stringgsWithBreaks.trim();

//!----
//!==String Replacement==
//!----

//Basic usage

const orignaltext = "This is old text";
const updatedtext = orignaltext.replace("old", "new");

//Replace all occurances

const repitativetext = "old text with old words";
const replaceAll = repitativetext.replace(/old/g, "new");

//!----
//!==.lastindexof()==
//!----

//Basic Usage

const mytext = "apple orange, apple ,banana ";
const myresult = mytext.lastIndexOf("apple");

//specifying the from index
const resulti = mytext.lastIndexOf("apple", 12);

//!----
//!==String Includes==
//!----

//Basic usage
const mytext1 = "I have an apple";
const result5 = mytext1.includes("apple"); //true

//checking for character
// const result6 = mytext1.includes("o"); //false

//specifying specific position
const result6 = mytext1.includes("I", 0);

//!----
//!==String Conversion==
//!----

//Converting Number to a String;

const Num = 42;
