import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="fixed shadow-md w-100  m-auto bg-white top-0 left-0 right-0 py-8  px-4">
      <div className="container mx-auto flex gap-4 sm justify-between items-start sm:items-center flex-col sm:flex-row">
        <Link href="/">
          <span className="text-2xl font-bold text-gray-900">
            Morad Elazyzy
          </span>
        </Link>
        <ul className="flex gap-8 text-xl font-medium text-gray-800 ">
          <li>
            <Link href="/design">Design</Link>
          </li>
          <li>
            <Link href="/front-end">Front end</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
