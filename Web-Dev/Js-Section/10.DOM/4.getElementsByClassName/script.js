//Selecting all Elements with the class name "Fiction"

const fictionBooksEl = document.getElementsByClassName("fiction");

//Selecting all elements with class name "non-fiction"

const nonFictionEl = document.getElementById("nonFictionSection");
//console.log(nonFictionEl);

const nonFictionBooksInSectionEl =
  nonFictionEl.getElementsByClassName("non-fiction");

//console.log(nonFictionBooksInSectionEl[1]);

console.log(fictionBooksEl);
//Looping Through the HTMLCollection

//First convert into an array

const fictionBooksArr = Array.from(fictionBooksEl);

const fictionBooksElTitle = fictionBooksArr.map((el) => el.innerHTML);

console.log(fictionBooksElTitle);
