import React from "react";
import BookCard from "@/components/BookCard";
import { Book } from "@/types";

interface BookListProps {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const BookList: React.FC<BookListProps> = ({ 
  title, 
  books, 
  containerClassName 
}) => {
  if (books.length < 2) return null;

  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>

      <ul className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </ul>
    </section>
  );
};

export default BookList;
