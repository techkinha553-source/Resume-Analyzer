import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b bg-white dark:bg-gray-900">
      <Link
        href="/"
        className="text-3xl font-bold text-sky-500 font-serif"
      >
        AI Resume Analyzer
      </Link>

      <div className="flex gap-6 font-medium items-center font-serif">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/cover_letter">Cover Letter</Link>
        <Link href="/login">Login</Link>

        <Link
          href="/signup"
          className="bg-sky-500 text-white px-4 py-2 rounded-xl"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}