// Destructring

import { getBook } from "./data";

const book = getBook(2);

// Native way of extracting value out of object
// const title = book.title;
// const author = book.author;

// Es6 Destructring Method
// here we have to give same name as in object to variable
const { title, author, pages, publicationDate, genres } = book;

console.log(genres);

// Destructring Array

// Native Approach
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre] = genres;
