import React from "react";

const page = () => {
  return (
    <main className="mt-36 px-6">
      <h1 className="text-4xl font-bold mb-3 ">Our Services</h1>
      <h2 className="text-2xl font-semibold">
        Crafting and Revitalizing Your Perfect Pool Experience
      </h2>

      <p className=" mt-2">
        At Bass Pool Group, we offer a comprehensive range of services tailored
        to meet your specific requirements and preferences. From constructing
        brand new pools to renovating and revitalizing existing ones, our
        dedicated team ensures exceptional craftsmanship and unparalleled
        quality every step of the way.
      </p>

      <div className="mt-10 space-y-5">
        <div className="">
          <h3 className="text-xl font-bold">Pool Construction from Scratch</h3>
          <p>
            Embark on the journey to your dream pool with Bass Pool Group. We
            specialize in constructing stunning pools from the ground up,
            meticulously designed to suit your lifestyle and elevate your
            outdoor space.
          </p>
          <p>
            With a focus on using the highest quality materials and adhering to
            strict construction standards, we guarantee a pool that not only
            meets but exceeds your expectations.
          </p>
          <p>
            Plus, enjoy peace of mind with our one-year warranty on both
            structure and equipment.
          </p>
        </div>

        <div className="">
          <h3 className="text-xl font-bold">Pool Renovation</h3>
          <p>
            Revitalize your outdated or neglected pool with our expert
            renovation services.
          </p>
          <p>
            Whether your pool is suffering from cracked plaster, worn-out tiles,
            or outdated features, Bass Pool Group can transform it into a
            breathtaking oasis.
          </p>
          <p>
            Our renovation process includes repairing cracks, applying a new
            pool finish, installing new waterline tiles and coping, and even
            adding additional features like a spa or waterfall to enhance your
            pool&apos;s functionality and aesthetics.
          </p>
        </div>

        <div className="">
          <h3 className="text-xl font-bold">Our Production Process</h3>
          <p>
            Experience a seamless and efficient construction process with Bass
            Pool Group.
          </p>
          <p>
            Our meticulous production process is divided into clear stages,
            ensuring transparency and accountability at every step.
          </p>
          <p>
            From the initial preliminary checks to obtaining necessary permits
            and approvals, excavation, concrete work, plumbing and electrical
            installation, and finishing touches like pool equipment and
            plastering, we handle every aspect of the construction process with
            precision and care.
          </p>
        </div>
        <div className="bg-red-100 rounded p-3 border-red-400 border mt-10 text-sm">
          <strong>Note:</strong>
          <p className="opacity-60">
            We understand that every project is unique, which is why we offer
            flexible payment options that allow you to finance each stage of the
            construction process according to your budget and timeline.
          </p>
          <p className="opacity-60">
            At Bass Pool Group, we&apos;re committed to delivering exceptional
            results while providing a stress-free and rewarding experience for
            our clients.
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
