import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <main className="my-28 md:my-36 px-6 w-[1380px] max-w-full  m-auto">
      <h1 className="text-4xl font-bold ">About Us</h1>

      <div className="mt-10 space-y-5">
        <div className="">
          <p>
            At Bass Pool Group, we&apos;re passionate about transforming
            backyard dreams into reality.{" "}
          </p>
          <p>
            With years of experience serving the Miami community, we&apos;ve had
            the privilege of turning hundreds of ordinary yards into
            extraordinary paradises, leaving our customers thrilled with the
            results.
          </p>
        </div>
        <div className="">
          <p>
            <strong>Our mission is simple: </strong>
            to provide exceptional pool construction and renovation services
            that exceed our clients&apos; expectations.
          </p>
          <p>
            We understand that building a pool is more than just a construction
            project—it&apos;s an investment in your home, your lifestyle, and
            your enjoyment for years to come.
          </p>
        </div>

        <div className="">
          <p>
            What sets us apart is our unwavering commitment to quality,
            craftsmanship, and customer satisfaction.
          </p>
          <p>
            From the initial consultation to the final touches, we work closely
            with each client to understand their unique vision and preferences,
            ensuring that every pool we build reflects their individual style
            and personality.
          </p>
        </div>
        <div className="">
          <p>
            Whether you&apos;re looking to create a serene retreat for
            relaxation, a lively hub for entertainment, or a refreshing escape
            from the Miami heat, Bass Pool Group has the expertise and
            dedication to bring your vision to life.
          </p>
        </div>
        <div className="">
          <p>
            Contact us today via email at{" "}
            <Link
              className="text-sky-500"
              href={"mailto:bservicecorp@gmail.com"}
            >
              bservicecorp@gmail.com
            </Link>{" "}
            and let us help you transform your backyard into the ultimate oasis.
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
