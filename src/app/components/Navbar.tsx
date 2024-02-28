import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-3">
      <nav className="flex justify-between w-[1380px] max-w-full bg-white p-4 rounded-lg shadow-xl border">
        <Link href={"/"}>Bass Pool Group</Link>{" "}
        <ul className="flex justify-between items-center gap-5 font-semibold">
          <li className="hover:text-sky-800 transition-colors">
            <Link href={"/gallery"}>Gallery</Link>
          </li>
          <li className="hover:text-sky-800 transition-colors">
            <Link href={"/services"}>Services</Link>
          </li>
          <li className="hover:text-sky-800 transition-colors">
            <Link href={"/about"}>About Us</Link>
          </li>
          <li className="hover:text-sky-800 transition-colors">
            <Link href={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
