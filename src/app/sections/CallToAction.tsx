import React from "react";
import Link from "next/link";
const CallToAction = () => {
  return (
    <section className="py-24 text-center">
      <p className="max-w-[700px] text-center m-auto">
        Experience the Ultimate in Luxury Living with Bass Pool Group. Contact
        us today to turn your dream pool into a reality and elevate your outdoor
        lifestyle.
      </p>
      <div className="flex justify-center mt-5">
        {" "}
        <Link
          href={"/contact"}
          className="px-8 py-2 bg-sky-950 text-white font-bold rounded flex items-center w-fit gap-3 hover:bg-sky-950 hover:text-white transition-colors"
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
    </section>
  );
};

export default CallToAction;
