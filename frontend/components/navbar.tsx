"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-lg sm:text-2xl lg:text-3xl font-bold bg-linear-to-r from-sky-400 via-blue-500 to-violet-500 bg-clip-text text-transparent"
          >
            CV_Decode
          </Link>

          <div className="hidden md:flex gap-6 items-center font-medium">
            <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-sky-400 transition-colors">About</Link>
            <Link href="/cover_letter" className="hover:text-sky-400 transition-colors">Cover Letter</Link>

            <Link
              href="/login"
              className="bg-linear-to-r from-sky-400 via-blue-500 to-violet-500 text-white px-4 py-2 rounded-xl hover:scale-105 transition-all"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="bg-violet-600 text-white px-4 py-2 rounded-xl hover:bg-violet-500 transition-all"
            >
              Signup
            </Link>
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/cover_letter" onClick={() => setMenuOpen(false)}>Cover Letter</Link>

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-linear-to-r from-sky-400 via-blue-500 to-violet-500 text-white px-4 py-2 rounded-xl text-center"
            >
              Login
            </Link>

            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="bg-violet-600 text-white px-4 py-2 rounded-xl text-center"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}