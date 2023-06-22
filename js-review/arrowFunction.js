import { getBook } from "./data";

let book = getBook(1);

const { title, author, pages, publicationDate } = book;

const getYear = (str) => str.split("-")[0];

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
