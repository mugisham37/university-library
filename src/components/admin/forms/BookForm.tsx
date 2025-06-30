"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FileUpload from "@/components/FileUpload";
import type { BookParams } from "@/types";

const BookForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<BookParams>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      rating: 1,
      totalCopies: 1,
      coverUrl: "",
      coverColor: "#000000",
      description: "",
      videoUrl: "",
      summary: "",
    },
  });

  const onSubmit = async (data: BookParams) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement book creation logic
      console.log("Book data:", data);
      // await createBook(data);
    } catch (error) {
      console.error("Error creating book:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <h1 className="text-2xl font-semibold text-dark-400 mb-8">
        Create New Book
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              {...register("title")}
              className="book-form_input"
              placeholder="Enter book title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="author">Author</Label>
            <Input
              id="author"
              {...register("author")}
              className="book-form_input"
              placeholder="Enter author name"
            />
            {errors.author && (
              <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="genre">Genre</Label>
            <Input
              id="genre"
              {...register("genre")}
              className="book-form_input"
              placeholder="Enter book genre"
            />
            {errors.genre && (
              <p className="text-red-500 text-sm mt-1">{errors.genre.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="rating">Rating (1-5)</Label>
            <Input
              id="rating"
              type="number"
              min="1"
              max="5"
              {...register("rating", { valueAsNumber: true })}
              className="book-form_input"
              placeholder="Enter rating"
            />
            {errors.rating && (
              <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="totalCopies">Total Copies</Label>
            <Input
              id="totalCopies"
              type="number"
              min="1"
              {...register("totalCopies", { valueAsNumber: true })}
              className="book-form_input"
              placeholder="Enter total copies"
            />
            {errors.totalCopies && (
              <p className="text-red-500 text-sm mt-1">{errors.totalCopies.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="coverColor">Cover Color</Label>
            <Input
              id="coverColor"
              type="color"
              {...register("coverColor")}
              className="book-form_input h-14"
            />
            {errors.coverColor && (
              <p className="text-red-500 text-sm mt-1">{errors.coverColor.message}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            {...register("description")}
            className="book-form_input min-h-24"
            placeholder="Enter book description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="summary">Summary</Label>
          <Textarea
            id="summary"
            {...register("summary")}
            className="book-form_input min-h-32"
            placeholder="Enter book summary"
          />
          {errors.summary && (
            <p className="text-red-500 text-sm mt-1">{errors.summary.message}</p>
          )}
        </div>

        <div>
          <Label>Book Cover</Label>
          <FileUpload
            type="image"
            accept="image/*"
            placeholder="Upload book cover"
            folder="books/covers"
            onFileChange={(url) => {
              setValue("coverUrl", url);
            }}
          />
          {errors.coverUrl && (
            <p className="text-red-500 text-sm mt-1">{errors.coverUrl.message}</p>
          )}
        </div>

        <div>
          <Label>Book Video</Label>
          <FileUpload
            type="document"
            accept="video/*"
            placeholder="Upload book video"
            folder="books/videos"
            onFileChange={(url) => {
              setValue("videoUrl", url);
            }}
          />
          {errors.videoUrl && (
            <p className="text-red-500 text-sm mt-1">{errors.videoUrl.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="book-form_btn"
        >
          {isSubmitting ? "Creating..." : "Create Book"}
        </Button>
      </form>
    </div>
  );
};

export default BookForm;
