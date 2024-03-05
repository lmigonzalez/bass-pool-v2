"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
const MobileMenu = () => {
  const path = usePathname();
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    setShowMenu(false);
  }, [path]);

  return (
    <div className="block  md:hidden">
      <nav className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className={`w-12 h-12 bg-white rounded-full z-50 relative border shadow-md`}
        >
          <div
            className={`transition-all duration-200 w-6 h-[3px] bg-sky-700 rounded-full absolute  ${
              showMenu
                ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"
                : "top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3"
            }`}
          ></div>

          <div
            className={`transition-all duration-200 w-8 h-[3px] bg-sky-700 rounded-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              showMenu ? "hidden" : "absolute"
            }`}
          ></div>

          <div
            className={`transition-all duration-200 w-6 h-[3px] bg-sky-700 rounded-full absolute  ${
              showMenu
                ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"
                : "top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3"
            }`}
          ></div>
        </button>
        {showMenu && (
          <div className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-40 flex justify-end">
            <ul className="flex justify-center flex-col items-center gap-5 font-semibold w-3/5 bg-sky-700 text-white text-xl">
              <li className="">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="">
                <Link href={"/gallery"}>Gallery</Link>
              </li>
              <li className="">
                <Link href={"/services"}>Services</Link>
              </li>
              <li className="">
                <Link href={"/about"}>About Us</Link>
              </li>
              <li className="">
                <Link href={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default MobileMenu;
