import React from "react";
import Link from "next/link";
import Stats from "../components/Stats";
const Hero = () => {
  return (
    <section className="bg-[url('/hero-pool.webp')] w-full min-h-[500px] bg-no-repeat bg-cover bg-center relative flex justify-start items-center px-6">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sky-700  z-10 bg-opacity-35 backdrop-blur-[1px]"></div>
      <div className="relative z-20 text-white">
        <h1 className="text-2xl md:text-4xl font-bold mb-5">
          Miami&apos;s Premier Pool Builders:{" "}
          <span className="">Bass Pool Group</span>
        </h1>
        <h2 className="text-xl md:text-2xl">
          Transforming Miami Backyards with Bespoke Poolscapes
        </h2>
        <div className="mt-10">
          <Link
            href={"/contact"}
            className="px-8 py-2 bg-white text-sky-700 font-bold rounded flex items-center w-fit gap-3 hover:rounded-full transition-transform"
          >
            Get a Free Quote
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Hero;
