import React from "react";
import { FaGithub, FaBehanceSquare } from "react-icons/fa";
import Link from "next/link";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" bg-fuchsia-800 text-white ">
      <div className="flex container mx-auto  px-4 py-4 justify-between items-center">
        <div>
          <p className="text-base sm:text-lg font-medium">
            moradelazyzy22@gmail.com
          </p>
        </div>
        <div className="flex text-xl gap-2 sm:text-3xl sm:gap-4">
          <Link href="https://github.com/Morad-elazyzy" target="_blank">
            <FaGithub />
          </Link>
          <Link href="https://www.behance.net/morad-elazyzy" target="_blank">
            <FaBehanceSquare />
          </Link>
        </div>
        <div className="hidden sm:block">
          <p>© {currentYear} Morad Elazyzy </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
