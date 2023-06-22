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

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

// Sort Method

//using slice we prevent orgianl array to mutate

const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

// Working with immutable array

// 1) Add a book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;
