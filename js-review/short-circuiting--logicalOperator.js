import { getBook } from "./data";

let book = getBook(1);

// Some logical operator like & ,|| have something called short circuiting
// which means on certain condition it will immediately return first value and will not look to second value

console.log(true && "Some String"); // Some String
console.log(false && "Some String"); // false

// truthy value is any value which is not falsy value
// falsy value: 0 ,'',null , undefined
console.log("jonas" && "Some String"); // Some String;
console.log(0 && "Some String"); // 0

console.log(true || "Some String"); //true
console.log(false || "Some String"); //Some String

console.log(book.translations.spanish || "NOT TRANSLATED");

// Some times thing goes worng
console.log(book.reviews.librarything.reviewsCount); //if it is there but value is 0 (falsy)
const countWrong = book.reviews.librarything.reviewsCount || "no data";
console.log(countWrong); //no data (but there was)

// Nullish collision Operator
const count = book.reviews.librarything.reviewsCount ?? "no data";
console.log(count); // now answer will be 0
//Nullish collision short circuit when value is null or undefined not on (0,'')
