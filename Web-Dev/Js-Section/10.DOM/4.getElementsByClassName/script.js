//Selecting all Elements with the class name "Fiction"

const fictionBooksEl = document.getElementsByClassName("fiction");
// console.log(fictionBooksEl);

//Selecting All Elements with the class name "non-fiction" within the nonFictionSection

const nonFictionEl = document.getElementById("nonFictionSection");

const nonFictionBooksInSectionEl =
  nonFictionEl.getElementsByClassName("non-fiction");

// console.log(nonFictionBooksInSectionEl[1]);
//console.log(fictionBooksEl);

//First convert into an Array
fictionBooksElArr = Array.from(fictionBooksEl);

const fictionBooksElTitle = fictionBooksElArr.map((el) => el.innerHTML);

console.log(fictionBooksElTitle);
