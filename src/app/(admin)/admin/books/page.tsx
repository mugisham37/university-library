import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">All Books</h2>
        <Button className="bg-primary-admin" asChild>
          <Link href="/admin/books/new" className="text-white">
            + Create a New Book
          </Link>
        </Button>
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <div className="bg-light-300 rounded-lg p-8 text-center">
          <div className="size-16 bg-light-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📚</span>
          </div>
          <h3 className="text-lg font-semibold text-dark-400 mb-2">
            Books Management
          </h3>
          <p className="text-light-500 mb-6">
            Manage your library&apos;s book collection. Add, edit, or remove books from the system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-primary-admin">1,234</div>
              <div className="text-sm text-light-500">Total Books</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">856</div>
              <div className="text-sm text-light-500">Available</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-600">378</div>
              <div className="text-sm text-light-500">Borrowed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
