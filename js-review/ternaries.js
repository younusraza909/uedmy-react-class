import { getBook } from "./data";

let book = getBook(1);

const { pages } = book;

// we can use below syntax replacing if/else
pages > 1000 ? "over a thousand" : "less than 1000";
