import React from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";
import type { Book } from "@/types";

const Page = () => {
  // Transform sampleBooks to match Book interface
  const transformedBooks: Book[] = sampleBooks.map((book) => ({
    id: book.id.toString(),
    title: book.title,
    author: book.author,
    genre: book.genre,
    rating: book.rating,
    totalCopies: book.total_copies,
    availableCopies: book.available_copies,
    description: book.description,
    coverColor: book.color,
    coverUrl: book.cover,
    videoUrl: book.video,
  }));

  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10"
      >
        <Button>Logout</Button>
      </form>

      <BookList title="Borrowed Books" books={transformedBooks} />
    </>
  );
};

export default Page;
