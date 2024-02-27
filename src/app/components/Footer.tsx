import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="mt-auto text-center py-10 bg-gray-800 text-white">
      <p className="font-light">
        ©2023 Bass Pool Group - All rights reserved |{" "}
        <Link className="text-sky-500" href={"/terms-and-conditions"}>
          Terms & Conditions
        </Link>{" "}
      </p>
    </footer>
  );
};

export default Footer;
