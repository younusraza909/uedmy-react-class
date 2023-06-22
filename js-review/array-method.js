import { getBooks } from "./data";

const books = getBooks();

// Map Method
const x = [1, 2, 3, 4, 5].map((el) => el * 2);

console.log(x);

const titles = books.map((book) => book.title);

// Filter Mehod

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;
