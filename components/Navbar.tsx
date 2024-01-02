"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed shadow-md w-100  m-auto bg-white top-0 left-0 right-0 py-8 px-4">
      <div className="container mx-auto flex gap-4 sm justify-between items-start sm:items-center flex-col sm:flex-row">
        <Link href="/" scroll={false}>
          <span className="text-3xl font-bold text-gray-900">
            Morad Elazyzy
          </span>
        </Link>
        <ul className="flex gap-8 text-xl font-medium text-gray-800 ">
          <li>
            <Link
              href="/design"
              className={`hover:text-fuchsia-800 transition-colors hover:duration-500 ${
                pathname == "/design" ? "link-active" : undefined
              }`}
              scroll={false}
            >
              Design
            </Link>
          </li>
          <li>
            <Link
              href="/front-end"
              className={`hover:text-fuchsia-800 transition-colors hover:duration-500 ${
                pathname == "/front-end" ? "link-active" : undefined
              }`}
              scroll={false}
            >
              Front end
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className={`hover:text-fuchsia-800 transition-colors hover:duration-500 ${
                pathname == "/blogs" ? "link-active" : undefined
              }`}
              scroll={false}
            >
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
