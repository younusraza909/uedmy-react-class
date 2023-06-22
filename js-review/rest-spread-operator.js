import { getBook } from "./data";

const book = getBook(1);

const { genres } = book;

// Rest Operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

// Spread Operator
const newGenres = [...genres, "epic fantasy"];

// Spread Opertor with object
const updatedBook = { ...book, moviePublicationDate: "2001-12-19" };
