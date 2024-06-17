//---------
//==SINGLE,Double AND CONSTRUCTOR==
//---------

//Single quotes

const singleQuotestring = "This is a String using single quote";

// console.log(singleQuotestring);

//Double quotes

const doubleQuotestring = "This is a String using double quote";

// console.log(doubleQuotestring);

//Using String Constructor

const stringConstructor = new String("This is string using string constructor");

// console.log(stringConstructor);

//---------
//==Templet literals
//---------

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

//----
//==String Concat==
//----

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

//----
//==TOLOWER And TOUPPER case
//----

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
  console.log("The strings are equal ignoring the case");
}

//Notes on Non-English characters

const accentedStr = `â, î or ô`;
const yes = accentedStr.toUpperCase();
// console.log(yes);
