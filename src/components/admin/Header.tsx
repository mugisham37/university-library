"use client";

import { useState } from "react";
import Image from "next/image";
import type { Session } from "@/auth";

interface HeaderProps {
  session: Session;
}

const Header = ({ session }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="admin-header">
      <div>
        <h1 className="text-2xl font-semibold text-dark-400">
          Welcome back, {session.user.fullName.split(" ")[0]}!
        </h1>
        <p className="text-light-500">
          Track, manage and forecast your library operations.
        </p>
      </div>

      <div className="admin-search">
        <Image
          src="/icons/search-fill.svg"
          alt="Search"
          width={20}
          height={20}
          className="opacity-50"
        />
        <input
          type="text"
          placeholder="Search for books, users, or requests..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="admin-search_input"
        />
      </div>
    </header>
  );
};

export default Header;
