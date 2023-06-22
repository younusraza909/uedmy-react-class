import { getBook } from "./data";

const book = getBook(2);

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodread?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}

getTotalReviewCount(book);
