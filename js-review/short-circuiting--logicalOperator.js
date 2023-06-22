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
